import { Assemble } from "../../commands/assemble";

export class WebGLContextAttributes extends Assemble {
    public alpha: u8; /**GLboolean */
    public antialias: u8; /**GLboolean */
    public depth: u8; /**GLboolean */
    public failIfMajorPerformanceCaveat: boolean;
    public powerPreference: string /** default*/;
    public premultipliedAlpha: u8; /**GLboolean */
    public preserveDrawingBuffer: u8; /**GLboolean */
    public stencil: u8; /**GLboolean */
}