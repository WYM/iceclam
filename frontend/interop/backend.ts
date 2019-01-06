import * as loader from "assemblyscript/lib/loader";
import { Command } from "../commands/command";

interface CustomeImportsObject extends loader.ImportsObject {
    command: {
        commit(buffer: Float64Array): void
    },
    utils: loader.ASUtil
}

export class BackendInterop<T> {
    public command!: Command;
    public module!: T & loader.ASUtil;

    public async init(imps: CustomeImportsObject = {} as CustomeImportsObject, buffer: Uint8Array): Promise<BackendInterop<T>> {
        const command = this.command = new Command();
        imps.command = command.getCommand();
        this.module = await loader.instantiateBuffer<T>(buffer, imps);
        imps.utils = this.module;
        return this;
    }
}