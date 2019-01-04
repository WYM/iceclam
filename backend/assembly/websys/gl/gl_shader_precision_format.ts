import { UObject } from "../../base/object";
import { GLint } from "./gl_type";
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat

// @ts-ignore
@external("gl", "newShaderPrecisionFormat")
export declare function newShaderPrecisionFormat(id: i64): void;

export class WebGLShaderPrecisionFormat extends UObject {
    public readonly precision: GLint;
    public readonly rangeMax: GLint;
    public readonly rangeMin: GLint;

    public create(): void {
        newShaderPrecisionFormat(this.id);
    }
}