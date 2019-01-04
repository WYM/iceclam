import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader

// @ts-ignore
@external("gl", "newShader")
export declare function newShader(id: i64): void;

export class WebGLShader extends UObject {
    public create(): void {
        newShader(this.id);
    }
}