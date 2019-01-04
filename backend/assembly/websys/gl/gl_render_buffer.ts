import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderbuffer

// @ts-ignore
@external("gl", "newRenderBuffer")
export declare function newRenderBuffer(id: i64): void;

export class WebGLRenderbuffer extends UObject {
    public create(): void {
        newRenderBuffer(this.id);
    }
}