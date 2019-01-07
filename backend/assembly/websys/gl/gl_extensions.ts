import { Assemble } from "../../commands/assemble";

export class EXT_blend_minmax extends Assemble {
    public readonly MAX_EXT: u32 /**GLenum */;
    public readonly MIN_EXT: u32 /**GLenum */;
}

export function get_ext_blend_minmax_callback(MAX_EXT: u32, MIN_EXT: u32): void {

}