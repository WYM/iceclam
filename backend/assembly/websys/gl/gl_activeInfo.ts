import { Assemble } from "../../commands/assemble";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo

export class WebGLActiveInfo extends Assemble {
    public readonly name: string;
    public readonly size: i32 /**GLint */;
    public readonly type: u32 /**GLenum */;
}