import { CommandArgs, Command } from "../../command/command";

interface glsys {
    [id: number]: any;
    1: HTMLCanvasElement
}

export class gl {
    private _obj: glsys;

    public constructor() {
        this._obj = {} as glsys;
    }

    public createCanvas(id: number, width: number = 800, height: number = 600): void {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        document.body.append(canvas);
        this._obj[id] = canvas;
    }

    public getContext(id: number, command: CommandArgs): void {
        let canvas = this._obj[1];
        let gl = canvas.getContext(Command[command]);
        this._obj[id] = gl;
    }
}