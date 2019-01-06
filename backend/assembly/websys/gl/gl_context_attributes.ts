import { UObject } from "../../base/object";

// @ts-ignore
@external("gl", "newContextAttributes")
export declare function newContextAttributes(id: i64): void;

export class WebGLContextAttributes extends UObject {
    public alpha: u8; /**GLboolean */
    public antialias: u8; /**GLboolean */
    public depth: u8; /**GLboolean */
    public failIfMajorPerformanceCaveat: boolean;
    public powerPreference: string /** default*/;
    public premultipliedAlpha: u8; /**GLboolean */
    public preserveDrawingBuffer: u8; /**GLboolean */
    public stencil: u8; /**GLboolean */

    public create(): void {
        newContextAttributes(this.id);
    }
}