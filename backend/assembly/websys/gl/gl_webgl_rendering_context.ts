import { UObject } from "../../base/object";
import { WebGLRenderingContextBase } from "./gl";
import { WebGLProgram } from "./gl_program";
import { WebGLShader } from "./gl_shader";
import { WebGLBuffer } from "./gl_buffer";
import { WebGLFramebuffer } from "./gl_frame_buffer";
import { WebGLRenderbuffer } from "./gl_render_buffer";
import { WebGLTexture } from "./gl_texture";
import { WebGLActiveInfo } from "./gl_activeInfo";
import { WebGLContextAttributes } from "./gl_context_attributes";
import { OES_vertex_array_object } from "./gl_oes_vertex_array_object";
import { WebGLUniformLocation } from "./gl_uniform_location";
import { Float32List, Int32List, GLenum, GLsizei } from "./gl_type";
import { ImageBitmap } from "./gl_Image_bitmap";
import { WebGLShaderPrecisionFormat } from "./gl_shader_precision_format";

export class WebGLRenderingContext extends UObject implements WebGLRenderingContextBase {
    public ACTIVE_ATTRIBUTES: GLenum;
    public ACTIVE_TEXTURE: GLenum;
    public ACTIVE_UNIFORMS: GLenum;
    public ALIASED_LINE_WIDTH_RANGE: GLenum;
    public ALIASED_POINT_SIZE_RANGE: GLenum;
    public ALPHA: GLenum;
    public ALPHA_BITS: GLenum;
    public ALWAYS: GLenum;
    public ARRAY_BUFFER: GLenum;
    public ARRAY_BUFFER_BINDING: GLenum;
    public ATTACHED_SHADERS: GLenum;
    public BACK: GLenum;
    public BLEND: GLenum;
    public BLEND_COLOR: GLenum;
    public BLEND_DST_ALPHA: GLenum;
    public BLEND_DST_RGB: GLenum;
    public BLEND_EQUATION: GLenum;
    public BLEND_EQUATION_ALPHA: GLenum;
    public BLEND_EQUATION_RGB: GLenum;
    public BLEND_SRC_ALPHA: GLenum;
    public BLEND_SRC_RGB: GLenum;
    public BLUE_BITS: GLenum;
    public BOOL: GLenum;
    public BOOL_VEC2: GLenum;
    public BOOL_VEC3: GLenum;
    public BOOL_VEC4: GLenum;
    public BROWSER_DEFAULT_WEBGL: GLenum;
    public BUFFER_SIZE: GLenum;
    public BUFFER_USAGE: GLenum;
    public BYTE: GLenum;
    public CCW: GLenum;
    public CLAMP_TO_EDGE: GLenum;
    public COLOR_ATTACHMENT0: GLenum;
    public COLOR_BUFFER_BIT: GLenum;
    public COLOR_CLEAR_VALUE: GLenum;
    public COLOR_WRITEMASK: GLenum;
    public COMPILE_STATUS: GLenum;
    public COMPRESSED_TEXTURE_FORMATS: GLenum;
    public CONSTANT_ALPHA: GLenum;
    public CONSTANT_COLOR: GLenum;
    public CONTEXT_LOST_WEBGL: GLenum;
    public CULL_FACE: GLenum;
    public CULL_FACE_MODE: GLenum;
    public CURRENT_PROGRAM: GLenum;
    public CURRENT_VERTEX_ATTRIB: GLenum;
    public CW: GLenum;
    public DECR: GLenum;
    public DECR_WRAP: GLenum;
    public DELETE_STATUS: GLenum;
    public DEPTH_ATTACHMENT: GLenum;
    public DEPTH_BITS: GLenum;
    public DEPTH_BUFFER_BIT: GLenum;
    public DEPTH_CLEAR_VALUE: GLenum;
    public DEPTH_COMPONENT: GLenum;
    public DEPTH_COMPONENT16: GLenum;
    public DEPTH_FUNC: GLenum;
    public DEPTH_RANGE: GLenum;
    public DEPTH_STENCIL: GLenum;
    public DEPTH_STENCIL_ATTACHMENT: GLenum;
    public DEPTH_TEST: GLenum;
    public DEPTH_WRITEMASK: GLenum;
    public DITHER: GLenum;
    public DONT_CARE: GLenum;
    public DST_ALPHA: GLenum;
    public DST_COLOR: GLenum;
    public DYNAMIC_DRAW: GLenum;
    public ELEMENT_ARRAY_BUFFER: GLenum;
    public ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    public EQUAL: GLenum;
    public FASTEST: GLenum;
    public FLOAT: GLenum;
    public FLOAT_MAT2: GLenum;
    public FLOAT_MAT3: GLenum;
    public FLOAT_MAT4: GLenum;
    public FLOAT_VEC2: GLenum;
    public FLOAT_VEC3: GLenum;
    public FLOAT_VEC4: GLenum;
    public FRAGMENT_SHADER: GLenum;
    public FRAMEBUFFER: GLenum;
    public FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    public FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    public FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    public FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    public FRAMEBUFFER_BINDING: GLenum;
    public FRAMEBUFFER_COMPLETE: GLenum;
    public FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    public FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    public FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    public FRAMEBUFFER_UNSUPPORTED: GLenum;
    public FRONT: GLenum;
    public FRONT_AND_BACK: GLenum;
    public FRONT_FACE: GLenum;
    public FUNC_ADD: GLenum;
    public FUNC_REVERSE_SUBTRACT: GLenum;
    public FUNC_SUBTRACT: GLenum;
    public GENERATE_MIPMAP_HINT: GLenum;
    public GEQUAL: GLenum;
    public GREATER: GLenum;
    public GREEN_BITS: GLenum;
    public HIGH_FLOAT: GLenum;
    public HIGH_INT: GLenum;
    public IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    public IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    public INCR: GLenum;
    public INCR_WRAP: GLenum;
    public INT: GLenum;
    public INT_VEC2: GLenum;
    public INT_VEC3: GLenum;
    public INT_VEC4: GLenum;
    public INVALID_ENUM: GLenum;
    public INVALID_FRAMEBUFFER_OPERATION: GLenum;
    public INVALID_OPERATION: GLenum;
    public INVALID_VALUE: GLenum;
    public INVERT: GLenum;
    public KEEP: GLenum;
    public LEQUAL: GLenum;
    public LESS: GLenum;
    public LINEAR: GLenum;
    public LINEAR_MIPMAP_LINEAR: GLenum;
    public LINEAR_MIPMAP_NEAREST: GLenum;
    public LINES: GLenum;
    public LINE_LOOP: GLenum;
    public LINE_STRIP: GLenum;
    public LINE_WIDTH: GLenum;
    public LINK_STATUS: GLenum;
    public LOW_FLOAT: GLenum;
    public LOW_INT: GLenum;
    public LUMINANCE: GLenum;
    public LUMINANCE_ALPHA: GLenum;
    public MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    public MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    public MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    public MAX_RENDERBUFFER_SIZE: GLenum;
    public MAX_TEXTURE_IMAGE_UNITS: GLenum;
    public MAX_TEXTURE_SIZE: GLenum;
    public MAX_VARYING_VECTORS: GLenum;
    public MAX_VERTEX_ATTRIBS: GLenum;
    public MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    public MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    public MAX_VIEWPORT_DIMS: GLenum;
    public MEDIUM_FLOAT: GLenum;
    public MEDIUM_INT: GLenum;
    public MIRRORED_REPEAT: GLenum;
    public NEAREST: GLenum;
    public NEAREST_MIPMAP_LINEAR: GLenum;
    public NEAREST_MIPMAP_NEAREST: GLenum;
    public NEVER: GLenum;
    public NICEST: GLenum;
    public NONE: GLenum;
    public NOTEQUAL: GLenum;
    public NO_ERROR: GLenum;
    public ONE: GLenum;
    public ONE_MINUS_CONSTANT_ALPHA: GLenum;
    public ONE_MINUS_CONSTANT_COLOR: GLenum;
    public ONE_MINUS_DST_ALPHA: GLenum;
    public ONE_MINUS_DST_COLOR: GLenum;
    public ONE_MINUS_SRC_ALPHA: GLenum;
    public ONE_MINUS_SRC_COLOR: GLenum;
    public OUT_OF_MEMORY: GLenum;
    public PACK_ALIGNMENT: GLenum;
    public POINTS: GLenum;
    public POLYGON_OFFSET_FACTOR: GLenum;
    public POLYGON_OFFSET_FILL: GLenum;
    public POLYGON_OFFSET_UNITS: GLenum;
    public RED_BITS: GLenum;
    public RENDERBUFFER: GLenum;
    public RENDERBUFFER_ALPHA_SIZE: GLenum;
    public RENDERBUFFER_BINDING: GLenum;
    public RENDERBUFFER_BLUE_SIZE: GLenum;
    public RENDERBUFFER_DEPTH_SIZE: GLenum;
    public RENDERBUFFER_GREEN_SIZE: GLenum;
    public RENDERBUFFER_HEIGHT: GLenum;
    public RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    public RENDERBUFFER_RED_SIZE: GLenum;
    public RENDERBUFFER_STENCIL_SIZE: GLenum;
    public RENDERBUFFER_WIDTH: GLenum;
    public RENDERER: GLenum;
    public REPEAT: GLenum;
    public REPLACE: GLenum;
    public RGB: GLenum;
    public RGB565: GLenum;
    public RGB5_A1: GLenum;
    public RGBA: GLenum;
    public RGBA4: GLenum;
    public SAMPLER_2D: GLenum;
    public SAMPLER_CUBE: GLenum;
    public SAMPLES: GLenum;
    public SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    public SAMPLE_BUFFERS: GLenum;
    public SAMPLE_COVERAGE: GLenum;
    public SAMPLE_COVERAGE_INVERT: GLenum;
    public SAMPLE_COVERAGE_VALUE: GLenum;
    public SCISSOR_BOX: GLenum;
    public SCISSOR_TEST: GLenum;
    public SHADER_TYPE: GLenum;
    public SHADING_LANGUAGE_VERSION: GLenum;
    public SHORT: GLenum;
    public SRC_ALPHA: GLenum;
    public SRC_ALPHA_SATURATE: GLenum;
    public SRC_COLOR: GLenum;
    public STATIC_DRAW: GLenum;
    public STENCIL_ATTACHMENT: GLenum;
    public STENCIL_BACK_FAIL: GLenum;
    public STENCIL_BACK_FUNC: GLenum;
    public STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    public STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    public STENCIL_BACK_REF: GLenum;
    public STENCIL_BACK_VALUE_MASK: GLenum;
    public STENCIL_BACK_WRITEMASK: GLenum;
    public STENCIL_BITS: GLenum;
    public STENCIL_BUFFER_BIT: GLenum;
    public STENCIL_CLEAR_VALUE: GLenum;
    public STENCIL_FAIL: GLenum;
    public STENCIL_FUNC: GLenum;
    public STENCIL_INDEX8: GLenum;
    public STENCIL_PASS_DEPTH_FAIL: GLenum;
    public STENCIL_PASS_DEPTH_PASS: GLenum;
    public STENCIL_REF: GLenum;
    public STENCIL_TEST: GLenum;
    public STENCIL_VALUE_MASK: GLenum;
    public STENCIL_WRITEMASK: GLenum;
    public STREAM_DRAW: GLenum;
    public SUBPIXEL_BITS: GLenum;
    public TEXTURE: GLenum;
    public TEXTURE0: GLenum;
    public TEXTURE1: GLenum;
    public TEXTURE10: GLenum;
    public TEXTURE11: GLenum;
    public TEXTURE12: GLenum;
    public TEXTURE13: GLenum;
    public TEXTURE14: GLenum;
    public TEXTURE15: GLenum;
    public TEXTURE16: GLenum;
    public TEXTURE17: GLenum;
    public TEXTURE18: GLenum;
    public TEXTURE19: GLenum;
    public TEXTURE2: GLenum;
    public TEXTURE20: GLenum;
    public TEXTURE21: GLenum;
    public TEXTURE22: GLenum;
    public TEXTURE23: GLenum;
    public TEXTURE24: GLenum;
    public TEXTURE25: GLenum;
    public TEXTURE26: GLenum;
    public TEXTURE27: GLenum;
    public TEXTURE28: GLenum;
    public TEXTURE29: GLenum;
    public TEXTURE3: GLenum;
    public TEXTURE30: GLenum;
    public TEXTURE31: GLenum;
    public TEXTURE4: GLenum;
    public TEXTURE5: GLenum;
    public TEXTURE6: GLenum;
    public TEXTURE7: GLenum;
    public TEXTURE8: GLenum;
    public TEXTURE9: GLenum;
    public TEXTURE_2D: GLenum;
    public TEXTURE_BINDING_2D: GLenum;
    public TEXTURE_BINDING_CUBE_MAP: GLenum;
    public TEXTURE_CUBE_MAP: GLenum;
    public TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    public TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    public TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    public TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    public TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    public TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    public TEXTURE_MAG_FILTER: GLenum;
    public TEXTURE_MIN_FILTER: GLenum;
    public TEXTURE_WRAP_S: GLenum;
    public TEXTURE_WRAP_T: GLenum;
    public TRIANGLES: GLenum;
    public TRIANGLE_FAN: GLenum;
    public TRIANGLE_STRIP: GLenum;
    public UNPACK_ALIGNMENT: GLenum;
    public UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    public UNPACK_FLIP_Y_WEBGL: GLenum;
    public UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    public UNSIGNED_BYTE: GLenum;
    public UNSIGNED_INT: GLenum;
    public UNSIGNED_SHORT: GLenum;
    public UNSIGNED_SHORT_4_4_4_4: GLenum;
    public UNSIGNED_SHORT_5_5_5_1: GLenum;
    public UNSIGNED_SHORT_5_6_5: GLenum;
    public VALIDATE_STATUS: GLenum;
    public VENDOR: GLenum;
    public VERSION: GLenum;
    public VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    public VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    public VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    public VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    public VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    public VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    public VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    public VERTEX_SHADER: GLenum;
    public VIEWPORT: GLenum;
    public ZERO: GLenum;
    public drawingBufferHeight: GLsizei;
    public drawingBufferWidth: GLsizei;
    public activeTexture(texture: GLenum): void {
        throw new Error("Method not implemented.");
    }
    public attachShader(program: WebGLProgram, shader: WebGLShader): void {
        throw new Error("Method not implemented.");
    }
    public bindAttribLocation(program: WebGLProgram, index: number, name: string): void {
        throw new Error("Method not implemented.");
    }
    public bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void {
        throw new Error("Method not implemented.");
    }
    public bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void {
        throw new Error("Method not implemented.");
    }
    public bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer | null): void {
        throw new Error("Method not implemented.");
    }
    public bindTexture(target: number, texture: WebGLTexture | null): void {
        throw new Error("Method not implemented.");
    }
    public blendColor(red: number, green: number, blue: number, alpha: number): void {
        throw new Error("Method not implemented.");
    }
    public blendEquation(mode: number): void {
        throw new Error("Method not implemented.");
    }
    public blendEquationSeparate(modeRGB: number, modeAlpha: number): void {
        throw new Error("Method not implemented.");
    }
    public blendFunc(sfactor: number, dfactor: number): void {
        throw new Error("Method not implemented.");
    }
    public blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void {
        throw new Error("Method not implemented.");
    }
    public bufferData(target: number, size: number, usage: number): void;
    public bufferData(target: number, data: ArrayBuffer | null, usage: number): void;
    public bufferData(target: any, data: any, usage: any) {
        throw new Error("Method not implemented.");
    }
    bufferSubData(target: number, offset: number, data: ArrayBuffer): void {
        throw new Error("Method not implemented.");
    }
    checkFramebufferStatus(target: number): number {
        throw new Error("Method not implemented.");
    }
    clear(mask: number): void {
        throw new Error("Method not implemented.");
    }
    clearColor(red: number, green: number, blue: number, alpha: number): void {
        throw new Error("Method not implemented.");
    }
    clearDepth(depth: number): void {
        throw new Error("Method not implemented.");
    }
    clearStencil(s: number): void {
        throw new Error("Method not implemented.");
    }
    colorMask(red: number, green: number, blue: number, alpha: number): void {
        throw new Error("Method not implemented.");
    }
    compileShader(shader: WebGLShader): void {
        throw new Error("Method not implemented.");
    }
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView<ArrayBuffer>): void {
        throw new Error("Method not implemented.");
    }
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView<ArrayBuffer>): void {
        throw new Error("Method not implemented.");
    }
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void {
        throw new Error("Method not implemented.");
    }
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
    createBuffer(): WebGLBuffer | null {
        throw new Error("Method not implemented.");
    }
    createFramebuffer(): WebGLFramebuffer | null {
        throw new Error("Method not implemented.");
    }
    createProgram(): WebGLProgram | null {
        throw new Error("Method not implemented.");
    }
    createRenderbuffer(): WebGLRenderbuffer | null {
        throw new Error("Method not implemented.");
    }
    createShader(type: number): WebGLShader | null {
        throw new Error("Method not implemented.");
    }
    createTexture(): WebGLTexture | null {
        throw new Error("Method not implemented.");
    }
    cullFace(mode: number): void {
        throw new Error("Method not implemented.");
    }
    deleteBuffer(buffer: WebGLBuffer | null): void {
        throw new Error("Method not implemented.");
    }
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void {
        throw new Error("Method not implemented.");
    }
    deleteProgram(program: WebGLProgram | null): void {
        throw new Error("Method not implemented.");
    }
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void {
        throw new Error("Method not implemented.");
    }
    deleteShader(shader: WebGLShader | null): void {
        throw new Error("Method not implemented.");
    }
    deleteTexture(texture: WebGLTexture | null): void {
        throw new Error("Method not implemented.");
    }
    depthFunc(func: number): void {
        throw new Error("Method not implemented.");
    }
    depthMask(flag: number): void {
        throw new Error("Method not implemented.");
    }
    depthRange(zNear: number, zFar: number): void {
        throw new Error("Method not implemented.");
    }
    detachShader(program: WebGLProgram, shader: WebGLShader): void {
        throw new Error("Method not implemented.");
    }
    disable(cap: number): void {
        throw new Error("Method not implemented.");
    }
    disableVertexAttribArray(index: number): void {
        throw new Error("Method not implemented.");
    }
    drawArrays(mode: number, first: number, count: number): void {
        throw new Error("Method not implemented.");
    }
    drawElements(mode: number, count: number, type: number, offset: number): void {
        throw new Error("Method not implemented.");
    }
    enable(cap: number): void {
        throw new Error("Method not implemented.");
    }
    enableVertexAttribArray(index: number): void {
        throw new Error("Method not implemented.");
    }
    finish(): void {
        throw new Error("Method not implemented.");
    }
    flush(): void {
        throw new Error("Method not implemented.");
    }
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer | null): void {
        throw new Error("Method not implemented.");
    }
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture | null, level: number): void {
        throw new Error("Method not implemented.");
    }
    frontFace(mode: number): void {
        throw new Error("Method not implemented.");
    }
    generateMipmap(target: number): void {
        throw new Error("Method not implemented.");
    }
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo | null {
        throw new Error("Method not implemented.");
    }
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo | null {
        throw new Error("Method not implemented.");
    }
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null {
        throw new Error("Method not implemented.");
    }
    getAttribLocation(program: WebGLProgram, name: string): number {
        throw new Error("Method not implemented.");
    }
    getBufferParameter(target: number, pname: number) {
        throw new Error("Method not implemented.");
    }
    getContextAttributes(): WebGLContextAttributes | null {
        throw new Error("Method not implemented.");
    }
    getError(): number {
        throw new Error("Method not implemented.");
    }
    //getExtension(extensionName: "EXT_blend_minmax"): import("e:/project/one/engine/iceclam/iceclam/assembly/websys/gl_extensions").EXT_blend_minmax | null;
    //getExtension(extensionName: "OES_vertex_array_object"): import("e:/project/one/engine/iceclam/iceclam/assembly/websys/gl_oes_vertex_array_object").OES_vertex_array_object | null;
    // getExtension(extensionName: "EXT_blend_minmax" | "OES_vertex_array_object" ):EXT_blend_minmax | OES_vertex_array_object {
    //     throw new Error("Method not implemented.");
    // }
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null {
        throw new Error("Method not implemented.");
    }
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number) {
        throw new Error("Method not implemented.");
    }
    getParameter(pname: number) {
        throw new Error("Method not implemented.");
    }
    getProgramInfoLog(program: WebGLProgram): string | null {
        throw new Error("Method not implemented.");
    }
    getProgramParameter(program: WebGLProgram, pname: number) {
        throw new Error("Method not implemented.");
    }
    getRenderbufferParameter(target: number, pname: number) {
        throw new Error("Method not implemented.");
    }
    getShaderInfoLog(shader: WebGLShader): string | null {
        throw new Error("Method not implemented.");
    }
    getShaderParameter(shader: WebGLShader, pname: number) {
        throw new Error("Method not implemented.");
    }
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat | null {
        throw new Error("Method not implemented.");
    }
    getShaderSource(shader: WebGLShader): string | null {
        throw new Error("Method not implemented.");
    }
    getSupportedExtensions(): string[] | null {
        throw new Error("Method not implemented.");
    }
    getTexParameter(target: number, pname: number) {
        throw new Error("Method not implemented.");
    }
    getUniform(program: WebGLProgram, location: WebGLUniformLocation) {
        throw new Error("Method not implemented.");
    }
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null {
        throw new Error("Method not implemented.");
    }
    getVertexAttrib(index: number, pname: number) {
        throw new Error("Method not implemented.");
    }
    getVertexAttribOffset(index: number, pname: number): number {
        throw new Error("Method not implemented.");
    }
    hint(target: number, mode: number): void {
        throw new Error("Method not implemented.");
    }
    isBuffer(buffer: WebGLBuffer | null): number {
        throw new Error("Method not implemented.");
    }
    isContextLost(): boolean {
        throw new Error("Method not implemented.");
    }
    isEnabled(cap: number): number {
        throw new Error("Method not implemented.");
    }
    isFramebuffer(framebuffer: WebGLFramebuffer | null): number {
        throw new Error("Method not implemented.");
    }
    isProgram(program: WebGLProgram | null): number {
        throw new Error("Method not implemented.");
    }
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): number {
        throw new Error("Method not implemented.");
    }
    isShader(shader: WebGLShader | null): number {
        throw new Error("Method not implemented.");
    }
    isTexture(texture: WebGLTexture | null): number {
        throw new Error("Method not implemented.");
    }
    lineWidth(width: number): void {
        throw new Error("Method not implemented.");
    }
    linkProgram(program: WebGLProgram): void {
        throw new Error("Method not implemented.");
    }
    pixelStorei(pname: number, param: number): void {
        throw new Error("Method not implemented.");
    }
    polygonOffset(factor: number, units: number): void {
        throw new Error("Method not implemented.");
    }
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView<ArrayBuffer> | null): void {
        throw new Error("Method not implemented.");
    }
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
    sampleCoverage(value: number, invert: number): void {
        throw new Error("Method not implemented.");
    }
    scissor(x: number, y: number, width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
    shaderSource(shader: WebGLShader, source: string): void {
        throw new Error("Method not implemented.");
    }
    stencilFunc(func: number, ref: number, mask: number): void {
        throw new Error("Method not implemented.");
    }
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        throw new Error("Method not implemented.");
    }
    stencilMask(mask: number): void {
        throw new Error("Method not implemented.");
    }
    stencilMaskSeparate(face: number, mask: number): void {
        throw new Error("Method not implemented.");
    }
    stencilOp(fail: number, zfail: number, zpass: number): void {
        throw new Error("Method not implemented.");
    }
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        throw new Error("Method not implemented.");
    }
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView<ArrayBuffer> | null): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, source: ImageBitmap): void;
    texImage2D(target: any, level: any, internalformat: any, width: any, height: any, border: any, format?: any, type?: any, pixels?: any) {
        throw new Error("Method not implemented.");
    }
    texParameterf(target: number, pname: number, param: number): void {
        throw new Error("Method not implemented.");
    }
    texParameteri(target: number, pname: number, param: number): void {
        throw new Error("Method not implemented.");
    }
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView<ArrayBuffer> | null): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, source: ImageBitmap): void;
    texSubImage2D(target: any, level: any, xoffset: any, yoffset: any, width: any, height: any, format: any, type?: any, pixels?: any) {
        throw new Error("Method not implemented.");
    }
    uniform1f(location: WebGLUniformLocation | null, x: number): void {
        throw new Error("Method not implemented.");
    }
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniform1i(location: WebGLUniformLocation | null, x: number): void {
        throw new Error("Method not implemented.");
    }
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void {
        throw new Error("Method not implemented.");
    }
    uniform2f(location: WebGLUniformLocation | null, x: number, y: number): void {
        throw new Error("Method not implemented.");
    }
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniform2i(location: WebGLUniformLocation | null, x: number, y: number): void {
        throw new Error("Method not implemented.");
    }
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void {
        throw new Error("Method not implemented.");
    }
    uniform3f(location: WebGLUniformLocation | null, x: number, y: number, z: number): void {
        throw new Error("Method not implemented.");
    }
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniform3i(location: WebGLUniformLocation | null, x: number, y: number, z: number): void {
        throw new Error("Method not implemented.");
    }
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void {
        throw new Error("Method not implemented.");
    }
    uniform4f(location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number): void {
        throw new Error("Method not implemented.");
    }
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniform4i(location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number): void {
        throw new Error("Method not implemented.");
    }
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void {
        throw new Error("Method not implemented.");
    }
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: number, value: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: number, value: Float32List): void {
        throw new Error("Method not implemented.");
    }
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: number, value: Float32List): void {
        throw new Error("Method not implemented.");
    }
    useProgram(program: WebGLProgram | null): void {
        throw new Error("Method not implemented.");
    }
    validateProgram(program: WebGLProgram): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib1f(index: number, x: number): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib1fv(index: number, values: Float32List): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib2f(index: number, x: number, y: number): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib2fv(index: number, values: Float32List): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib3f(index: number, x: number, y: number, z: number): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib3fv(index: number, values: Float32List): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib4f(index: number, x: number, y: number, z: number, w: number): void {
        throw new Error("Method not implemented.");
    }
    vertexAttrib4fv(index: number, values: Float32List): void {
        throw new Error("Method not implemented.");
    }
    vertexAttribPointer(index: number, size: number, type: number, normalized: number, stride: number, offset: number): void {
        throw new Error("Method not implemented.");
    }
    viewport(x: number, y: number, width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
}