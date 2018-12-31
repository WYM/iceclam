import { UObject } from "../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLFramebuffer

// @ts-ignore
@external("gl", "newFramebuffer")
export declare function newFramebuffer(id: i64): void;

export class WebGLFramebuffer extends UObject {

    public create(): void {
        newFramebuffer(this.id);
    }
}