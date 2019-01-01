import { UObject } from "../base/object";
import { GLint, GLenum } from "./gl_type";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo

// @ts-ignore
@external("gl", "newActiveInfo")
export declare function newActiveInfo(id: i64): void;

export class WebGLActiveInfo extends UObject {
    public readonly name: string;
    public readonly size: GLint;
    public readonly type: GLenum;

    public create(): void {
        newActiveInfo(this.id);
    }
}