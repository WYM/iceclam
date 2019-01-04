import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer

// @ts-ignore
@external("gl", "newBuffer")
export declare function newBuffer(id: i64): void;

export class WebGLBuffer extends UObject {
    public create(): void {
        newBuffer(this.id);
    }
}