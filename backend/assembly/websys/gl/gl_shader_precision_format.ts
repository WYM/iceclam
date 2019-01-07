import { Assemble } from "../../commands/assemble";

export class WebGLShaderPrecisionFormat extends Assemble {
    public readonly precision: i32 /** GLint*/;
    public readonly rangeMax: i32 /** GLint*/;
    public readonly rangeMin: i32 /** GLint*/;
}