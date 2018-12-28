import * as fs from "fs";
import * as path from "path";
import "mocha";
import { expect } from "chai";

const p = path.resolve(__dirname, "../../iceclam/build/test/js_as_call_test.wasm");
console.log(p);
const buffer = fs.readFileSync(p);

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

describe("js_as_call_test", () => {
  it("js_as_call_test", () => {
    WebAssembly.instantiate(toArrayBuffer(buffer), {
      env: {
        log(s: string) {
          expect(s).to.equals("add", "why not equals add");
          console.log(s);
        },
        abort(mesg, file, line, colm) {
          throw Error("abort: " + mesg + " at " + file + ":" + line + ":" + colm);
        }
      }
    }).then(obj => {
      obj.instance.exports.add(4, 2)
    }).catch(console.error);
  })
})

