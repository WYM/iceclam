import { UObject } from "../../base/object";

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLUniformLocation

// @ts-ignore
@external("gl", "newUniformLocation")
export declare function newUniformLocation(id: i64): void;

export class WebGLUniformLocation extends UObject {
    public create(): void {
        newUniformLocation(this.id);
    }
}