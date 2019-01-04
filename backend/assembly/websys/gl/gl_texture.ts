import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture

// @ts-ignore
@external("gl", "newTexture")
export declare function newTexture(id: i64): void;

export class WebGLTexture extends UObject {
    public create(): void {
        newTexture(this.id);
    }
}