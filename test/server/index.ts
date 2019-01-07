import { BackendInterop } from "../../frontend/interop/backend";
import { CommandParser } from "../../frontend/commands/command";

fetch('/wasm/$file.wasm').then(async (res) => {
    return res.arrayBuffer();
}).then(async buffer => {
    const interop = new BackendInterop<CommandParser<{}> & { test(): void }>();
    await interop.init(void 0, new Uint8Array(buffer));
    interop.module.test();
});