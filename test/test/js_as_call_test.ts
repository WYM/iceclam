import * as fs from "fs";
import "mocha";
import { expect } from "chai";
const compiled = new WebAssembly.Module(fs.readFileSync("../../iceclam/build//test/untouched.wasm"));
const imports = {};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});

describe("loader_assemblyScript_test", () => {
  it("loader_test", () => {
    expect(module.exports).to.not.undefined;
  })
});