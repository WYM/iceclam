import * as fs from "fs";
import * as path from "path";
import "mocha";
import { expect } from "chai";

let instance = null;
const p = path.resolve(__dirname, "../../iceclam/build/test/js_as_call_test.wasm");
const buffer = fs.readFileSync(p);

declare let BigUint64Array;
declare let BigInt64Array;

const hasBigInt64 = typeof BigUint64Array !== "undefined";
let mem, I8, U8, I16, U16, I32, U32, F32, F64, I64, U64;

const checkMem = () => {
  if (mem !== exports.memory.buffer) {
    mem = exports.memory.buffer;
    I8 = new Int8Array(mem);
    U8 = new Uint8Array(mem);
    I16 = new Int16Array(mem);
    U16 = new Uint16Array(mem);
    I32 = new Int32Array(mem);
    U32 = new Uint32Array(mem);
    if (hasBigInt64) {
      I64 = new BigInt64Array(mem);
      U64 = new BigUint64Array(mem);
    }
    F32 = new Float32Array(mem);
    F64 = new Float64Array(mem);
  }
}

const getString = (ptr) => {
  checkMem();
  const dataLength = U32[ptr >>> 2];
  let dataOffset = (ptr + 4) >>> 1;
  let dataRemain = dataLength;
  const parts = [];
  const chunkSize = 1024;
  while (dataRemain > chunkSize) {
    let last = U16[dataOffset + chunkSize - 1];
    let size = last >= 0xD800 && last < 0xDC00 ? chunkSize - 1 : chunkSize;
    let part = U16.subarray(dataOffset, dataOffset += size);
    parts.push(String.fromCharCode.apply(String, part));
    dataRemain -= size;
  }
  return parts.join("") + String.fromCharCode.apply(String, U16.subarray(dataOffset, dataOffset + dataRemain));
}

describe("js_as_call_test", () => {
  it("js_as_call_test", () => {
    WebAssembly.instantiate(buffer, {
      env: {
        log(s: string) {
          expect(getString(s)).to.equals('js call as function')
        },
        abort(mesg, file, line, colm) {
          throw Error("abort: " + mesg + " at " + file + ":" + line + ":" + colm);
        }
      }
    }).then(obj => {
      instance = obj.instance;
      exports = instance.exports;

      const value = obj.instance.exports.add("s", 2);
      expect(value).equals(2);

      const value1 = obj.instance.exports.add("4", 2);
      expect(value1).equals(6);

      const value2 = obj.instance.exports.add(4, 2);
      expect(value2).equals(6);
    }).catch(console.error);
  })
})

