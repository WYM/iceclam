import * as fs from "fs";
import * as path from "path";
import "mocha";
import { expect } from "chai";
const p = path.resolve(__dirname,"../../iceclam/build/test/loader_assamblyScript_test.wasm");
const compiled = new WebAssembly.Module(fs.readFileSync(p));
const imports = {};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});

describe("loader_assemblyScript_test", () => {
  it("loader_test", () => {
    expect(module.exports.add).to.not.undefined;
  })
});