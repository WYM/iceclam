import * as loader from "assemblyscript/lib/loader";
import { CommandParser } from "../commands/command";

interface CustomeImportsObject extends loader.ImportsObject {
    command: {
        commit(buffer: number): void
    },
    utils: loader.ASUtil
}

export class BackendInterop<T> {
    public command!: CommandParser<T>;
    public module!: T & loader.ASUtil;

    public async init(imps: CustomeImportsObject = {} as CustomeImportsObject, buffer: Uint8Array): Promise<BackendInterop<T>> {
        const command = this.command = new CommandParser();
        imps.command = command.getCommand();
        this.module = await loader.instantiateBuffer<T>(buffer, imps);
        imps.utils = this.module;
        command.backendInterop = this;
        return this;
    }
}