import loader, { ImportsObject, ASUtil } from "assemblyscript/lib/loader";
import { Command } from "../commands/command";

interface CustomeImportsObject extends ImportsObject {
    command: {
        commit(buffer: Float64Array): void
    },
    utils: ASUtil
}

export class BackendInterop<T> {
    private command!: Command;
    private module!: T & ASUtil;

    public async init(imps: CustomeImportsObject = {} as CustomeImportsObject, buffer: Uint8Array): Promise<BackendInterop<T>> {
        const command = this.command = new Command();
        imps.command = command.getCommand();
        this.module = await loader.instantiateBuffer<T>(buffer, imps);
        imps.utils = this.module;
        return this;
    }
}