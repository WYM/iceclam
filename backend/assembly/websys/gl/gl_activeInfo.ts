import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo

// @ts-ignore
@external("gl", "newActiveInfo")
export declare function newActiveInfo(id: i64): void;

export class WebGLActiveInfo extends UObject {
    public readonly name: string;
    public readonly size: i32 /**GLint */;
    public readonly type: u32 /**GLenum */;

    public create(): void {
        newActiveInfo(this.id);
    }
}