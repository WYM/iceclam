import { UObject } from "../base/object";
import { GLboolean, WebGLPowerPreference } from "./gl";

// @ts-ignore
@external("gl", "newContextAttributes")
export declare function newContextAttributes(id: i64): void;

export class WebGLContextAttributes extends UObject {
    public alpha?: GLboolean;
    public antialias?: GLboolean;
    public depth?: GLboolean;
    public failIfMajorPerformanceCaveat?: boolean;
    public powerPreference?: WebGLPowerPreference;
    public premultipliedAlpha?: GLboolean;
    public preserveDrawingBuffer?: GLboolean;
    public stencil?: GLboolean;

    public create(): void {
        newContextAttributes(this.id);
    }
}