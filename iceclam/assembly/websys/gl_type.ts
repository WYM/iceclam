import { ImageBitmap } from "./gl_Image_bitmap";

export type GLenum = u32;
export type GLboolean = u8;
export type GLbitfield = u32;
export type GLint = i32;
export type GLsizei = i32;
export type GLintptr = isize;
export type GLsizeiptr = isize;
export type GLuint = u32;
export type GLfloat = f32;
export type GLclampf = f32;
export type BufferSource = ArrayBuffer;
export type WebGLPowerPreference = "default" | "low-power" | "high-performance";
export type Float32List = Float32Array | GLfloat[];
export type Int32List = Int32Array | GLint[];
export type TexImageSource = ImageBitmap; /*| ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;*/