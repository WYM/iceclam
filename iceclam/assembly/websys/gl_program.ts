import { UObject } from "../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram

// @ts-ignore
@external("gl", "newProgram")
export declare function newProgram(id: i64): void;

export class WebGLProgram extends UObject {
    public create(): void {
        newProgram(this.id);
    }
}