import { GLenum } from "./gl_type";
import { UObject } from "../base/object";

// @ts-ignore
@external("gl", "getExtension")
export declare function getExtension(id: i64, extension: string): void;

export class EXT_blend_minmax extends UObject {
    public readonly MAX_EXT: GLenum;
    public readonly MIN_EXT: GLenum;
}

export function get_ext_blend_minmax_callback(MAX_EXT: u32, MIN_EXT: u32): void {

}