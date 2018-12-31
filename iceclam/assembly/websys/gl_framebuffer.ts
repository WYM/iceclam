import { UObject } from "../base/object";

// @ts-ignore
@external("gl", "newFramebuffer")
export declare function newFramebuffer(id: i64): void;

export class WebGLFramebuffer extends UObject {

    public create(): void {
        newFramebuffer(this.id);
    }
}