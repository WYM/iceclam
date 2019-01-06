import { UObject } from "../../base/object";
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat

// @ts-ignore
@external("gl", "newShaderPrecisionFormat")
export declare function newShaderPrecisionFormat(id: i64): void;

export class WebGLShaderPrecisionFormat extends UObject {
    public readonly precision: i32 /** GLint*/;
    public readonly rangeMax: i32 /** GLint*/;
    public readonly rangeMin: i32 /** GLint*/;

    public create(): void {
        newShaderPrecisionFormat(this.id);
    }
}