import { WebGLProgram } from "./gl_program";
import { WebGLShader } from "./gl_shader";
import { WebGLBuffer } from "./gl_buffer";
import { WebGLFramebuffer } from "./gl_frame_buffer";
import { WebGLRenderbuffer } from "./gl_render_buffer";
import { WebGLTexture } from "./gl_texture";
import { WebGLActiveInfo } from "./gl_activeInfo";
import { WebGLContextAttributes } from "./gl_context_attributes";
import { WebGLUniformLocation } from "./gl_uniform_location";
import { WebGLShaderPrecisionFormat } from "./gl_shader_precision_format";
import { EXT_blend_minmax } from "./gl_extensions";
import { OES_vertex_array_object } from "./gl_oes_vertex_array_object";


interface OES_element_index_uint {
}

export interface WebGLRenderingContextBase {
    //readonly canvas: HTMLCanvasElement;
    readonly drawingBufferHeight: i32 /**GLsizei */;
    readonly drawingBufferWidth: i32 /**GLsizei */;
    activeTexture(texture: u32 /**GLenum */): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: u32 /** */, name: string): void;
    bindBuffer(target: u32 /**GLenum */, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: u32 /**GLenum */, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: u32 /**GLenum */, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: u32 /**GLenum */, texture: WebGLTexture | null): void;
    blendColor(red: f32 /** GLclampf*/, green: f32 /** GLclampf*/, blue: f32 /** GLclampf*/, alpha: f32 /** GLclampf*/): void;
    blendEquation(mode: u32 /**GLenum */): void;
    blendEquationSeparate(modeRGB: u32 /**GLenum */, modeAlpha: u32 /**GLenum */): void;
    blendFunc(sfactor: u32 /**GLenum */, dfactor: u32 /**GLenum */): void;
    blendFuncSeparate(srcRGB: u32 /**GLenum */, dstRGB: u32 /**GLenum */, srcAlpha: u32 /**GLenum */, dstAlpha: u32 /**GLenum */): void;
    // bufferData(target: u32 /**GLenum */, size: i32 /**GLsizei */ptr, usage: u32 /**GLenum */): void;
    bufferData(target: u32 /**GLenum */, data: ArrayBuffer /**BufferSource */ | null, usage: u32 /**GLenum */): void;
    bufferSubData(target: u32 /**GLenum */, offset: isize /** GLintptr*/, data: ArrayBuffer /**BufferSource */): void;
    checkFramebufferStatus(target: u32 /**GLenum */): u32 /**GLenum */;
    clear(mask: u32 /** */): void;
    clearColor(red: f32 /** GLclampf*/, green: f32 /** GLclampf*/, blue: f32 /** GLclampf*/, alpha: f32 /** GLclampf*/): void;
    clearDepth(depth: f32 /** GLclampf*/): void;
    clearStencil(s: i32/**GLint*/): void;
    colorMask(red: u8 /** GLboolean*/, green: u8 /** GLboolean*/, blue: u8 /** GLboolean*/, alpha: u8 /** GLboolean*/): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: u32 /**GLenum */, level: i32/**GLint*/, internalformat: u32 /**GLenum */, width: i32 /**GLsizei */, height: i32 /**GLsizei */, border: i32/**GLint*/, data: ArrayBufferView<ArrayBuffer>): void;
    compressedTexSubImage2D(target: u32 /**GLenum */, level: i32/**GLint*/, xoffset: i32/**GLint*/, yoffset: i32/**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */, format: u32 /**GLenum */, data: ArrayBufferView<ArrayBuffer>): void;
    copyTexImage2D(target: u32 /**GLenum */, level: i32/**GLint*/, internalformat: u32 /**GLenum */, x: i32/**GLint*/, y: i32/**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */, border: i32/**GLint*/): void;
    copyTexSubImage2D(target: u32 /**GLenum */, level: i32/**GLint*/, xoffset: i32/**GLint*/, yoffset: i32/**GLint*/, x: i32/**GLint*/, y: i32/**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: u32 /**GLenum */): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: u32 /**GLenum */): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: u32 /**GLenum */): void;
    depthMask(flag: u8 /** GLboolean*/): void;
    depthRange(zNear: f32 /** GLclampf*/, zFar: f32 /** GLclampf*/): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: u32 /**GLenum */): void;
    disableVertexAttribArray(index: u32 /** */): void;
    drawArrays(mode: u32 /**GLenum */, first: i32 /**GLint*/, count: i32 /**GLsizei */): void;
    drawElements(mode: u32 /**GLenum */, count: i32 /**GLsizei */, type: u32 /**GLenum */, offset: isize /** GLintptr*/): void;
    enable(cap: u32 /**GLenum */): void;
    enableVertexAttribArray(index: u32 /** */): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: u32 /**GLenum */, attachment: u32 /**GLenum */, renderbuffertarget: u32 /**GLenum */, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: u32 /**GLenum */, attachment: u32 /**GLenum */, textarget: u32 /**GLenum */, texture: WebGLTexture | null, level: i32 /**GLint*/): void;
    frontFace(mode: u32 /**GLenum */): void;
    generateMipmap(target: u32 /**GLenum */): void;
    getActiveAttrib(program: WebGLProgram, index: u32 /** */): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: u32 /** */): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): i32 /**GLint*/;
    getBufferParameter(target: u32 /**GLenum */, pname: u32 /**GLenum */): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): u32 /**GLenum */;
    //getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    // getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    // getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    // getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    // getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    // getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    // getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    // getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    // getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    // getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    // getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    // getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    // getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    // getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    // getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    // getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    // getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    // getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    // getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    // getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    // getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getFramebufferAttachmentParameter(target: u32 /**GLenum */, attachment: u32 /**GLenum */, pname: u32 /**GLenum */): any;
    getParameter(pname: u32 /**GLenum */): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: u32 /**GLenum */): any;
    getRenderbufferParameter(target: u32 /**GLenum */, pname: u32 /**GLenum */): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: u32 /**GLenum */): any;
    getShaderPrecisionFormat(shadertype: u32 /**GLenum */, precisiontype: u32 /**GLenum */): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: u32 /**GLenum */, pname: u32 /**GLenum */): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: u32 /** */, pname: u32 /**GLenum */): any;
    getVertexAttribOffset(index: u32 /** */, pname: u32 /**GLenum */): isize /** GLintptr*/;
    hint(target: u32 /**GLenum */, mode: u32 /**GLenum */): void;
    isBuffer(buffer: WebGLBuffer | null): u8 /** GLboolean*/;
    isContextLost(): boolean;
    isEnabled(cap: u32 /**GLenum */): u8 /** GLboolean*/;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): u8 /** GLboolean*/;
    isProgram(program: WebGLProgram | null): u8 /** GLboolean*/;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): u8 /** GLboolean*/;
    isShader(shader: WebGLShader | null): u8 /** GLboolean*/;
    isTexture(texture: WebGLTexture | null): u8 /** GLboolean*/;
    lineWidth(width: f32 /**GFloat */): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: u32 /**GLenum */, param: i32 /**GLint*/): void;
    polygonOffset(factor: f32 /**GFloat */, units: f32 /**GFloat */): void;
    readPixels(x: i32 /**GLint*/, y: i32 /**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */, format: u32 /**GLenum */, type: u32 /**GLenum */, pixels: ArrayBufferView<ArrayBuffer> | null): void;
    renderbufferStorage(target: u32 /**GLenum */, internalformat: u32 /**GLenum */, width: i32 /**GLsizei */, height: i32 /**GLsizei */): void;
    sampleCoverage(value: f32 /** GLclampf*/, invert: u8 /** GLboolean*/): void;
    scissor(x: i32 /**GLint*/, y: i32 /**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: u32 /**GLenum */, ref: i32 /**GLint*/, mask: u32 /** */): void;
    stencilFuncSeparate(face: u32 /**GLenum */, func: u32 /**GLenum */, ref: i32 /**GLint*/, mask: u32 /** */): void;
    stencilMask(mask: u32 /** */): void;
    stencilMaskSeparate(face: u32 /**GLenum */, mask: u32 /** */): void;
    stencilOp(fail: u32 /**GLenum */, zfail: u32 /**GLenum */, zpass: u32 /**GLenum */): void;
    stencilOpSeparate(face: u32 /**GLenum */, fail: u32 /**GLenum */, zfail: u32 /**GLenum */, zpass: u32 /**GLenum */): void;
    texImage2D(target: u32 /**GLenum */, level: i32 /**GLint*/, internalformat: i32 /**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */, border: i32 /**GLint*/, format: u32 /**GLenum */, type: u32 /**GLenum */, pixels: ArrayBufferView<ArrayBuffer> | null): void;
    //texImage2D(target: u32 /**GLenum */, level: GLint, internalformat: GLint, format: u32 /**GLenum */, type: u32 /**GLenum */, source: TexImageSource): void;
    texParameterf(target: u32 /**GLenum */, pname: u32 /**GLenum */, param: f32 /**GFloat */): void;
    texParameteri(target: u32 /**GLenum */, pname: u32 /**GLenum */, param: i32 /**GLint*/): void;
    texSubImage2D(target: u32 /**GLenum */, level: i32 /**GLint*/, xoffset: i32 /**GLint*/, yoffset: i32 /**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */, format: u32 /**GLenum */, type: u32 /**GLenum */, pixels: ArrayBufferView<ArrayBuffer> | null): void;
    //texSubImage2D(target: u32 /**GLenum */, level: GLint, xoffset: GLint, yoffset: GLint, format: u32 /**GLenum */, type: u32 /**GLenum */, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation | null, x: f32 /**GFloat */): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32Array /** Float32List*/): void;
    uniform1i(location: WebGLUniformLocation | null, x: i32 /**GLint*/): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32Array /** Int32List*/): void;
    uniform2f(location: WebGLUniformLocation | null, x: f32 /**GFloat */, y: f32 /**GFloat */): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32Array /** Float32List*/): void;
    uniform2i(location: WebGLUniformLocation | null, x: i32 /**GLint*/, y: i32 /**GLint*/): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32Array /** Int32List*/): void;
    uniform3f(location: WebGLUniformLocation | null, x: f32 /**GFloat */, y: f32 /**GFloat */, z: f32 /**GFloat */): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32Array /** Float32List*/): void;
    uniform3i(location: WebGLUniformLocation | null, x: i32 /**GLint*/, y: i32 /**GLint*/, z: i32 /**GLint*/): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32Array /** Int32List*/): void;
    uniform4f(location: WebGLUniformLocation | null, x: f32 /**GFloat */, y: f32 /**GFloat */, z: f32 /**GFloat */, w: f32 /**GFloat */): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32Array /** Float32List*/): void;
    uniform4i(location: WebGLUniformLocation | null, x: i32 /**GLint*/, y: i32 /**GLint*/, z: i32 /**GLint*/, w: i32 /**GLint*/): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32Array /** Int32List*/): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: u8 /** GLboolean*/, value: Float32Array /** Float32List*/): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: u8 /** GLboolean*/, value: Float32Array /** Float32List*/): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: u8 /** GLboolean*/, value: Float32Array /** Float32List*/): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: u32 /** */, x: f32 /**GFloat */): void;
    vertexAttrib1fv(index: u32 /** */, values: Float32Array /** Float32List*/): void;
    vertexAttrib2f(index: u32 /** */, x: f32 /**GFloat */, y: f32 /**GFloat */): void;
    vertexAttrib2fv(index: u32 /** */, values: Float32Array /** Float32List*/): void;
    vertexAttrib3f(index: u32 /** */, x: f32 /**GFloat */, y: f32 /**GFloat */, z: f32 /**GFloat */): void;
    vertexAttrib3fv(index: u32 /** */, values: Float32Array /** Float32List*/): void;
    vertexAttrib4f(index: u32 /** */, x: f32 /**GFloat */, y: f32 /**GFloat */, z: f32 /**GFloat */, w: f32 /**GFloat */): void;
    vertexAttrib4fv(index: u32 /** */, values: Float32Array /** Float32List*/): void;
    vertexAttribPointer(index: u32 /** */, size: i32 /**GLint*/, type: u32 /**GLenum */, normalized: u8 /** GLboolean*/, stride: i32 /**GLsizei */, offset: isize /** GLintptr*/): void;
    viewport(x: i32 /**GLint*/, y: i32 /**GLint*/, width: i32 /**GLsizei */, height: i32 /**GLsizei */): void;
    readonly ACTIVE_ATTRIBUTES: u32 /**GLenum */;
    readonly ACTIVE_TEXTURE: u32 /**GLenum */;
    readonly ACTIVE_UNIFORMS: u32 /**GLenum */;
    readonly ALIASED_LINE_WIDTH_RANGE: u32 /**GLenum */;
    readonly ALIASED_POINT_SIZE_RANGE: u32 /**GLenum */;
    readonly ALPHA: u32 /**GLenum */;
    readonly ALPHA_BITS: u32 /**GLenum */;
    readonly ALWAYS: u32 /**GLenum */;
    readonly ARRAY_BUFFER: u32 /**GLenum */;
    readonly ARRAY_BUFFER_BINDING: u32 /**GLenum */;
    readonly ATTACHED_SHADERS: u32 /**GLenum */;
    readonly BACK: u32 /**GLenum */;
    readonly BLEND: u32 /**GLenum */;
    readonly BLEND_COLOR: u32 /**GLenum */;
    readonly BLEND_DST_ALPHA: u32 /**GLenum */;
    readonly BLEND_DST_RGB: u32 /**GLenum */;
    readonly BLEND_EQUATION: u32 /**GLenum */;
    readonly BLEND_EQUATION_ALPHA: u32 /**GLenum */;
    readonly BLEND_EQUATION_RGB: u32 /**GLenum */;
    readonly BLEND_SRC_ALPHA: u32 /**GLenum */;
    readonly BLEND_SRC_RGB: u32 /**GLenum */;
    readonly BLUE_BITS: u32 /**GLenum */;
    readonly BOOL: u32 /**GLenum */;
    readonly BOOL_VEC2: u32 /**GLenum */;
    readonly BOOL_VEC3: u32 /**GLenum */;
    readonly BOOL_VEC4: u32 /**GLenum */;
    readonly BROWSER_DEFAULT_WEBGL: u32 /**GLenum */;
    readonly BUFFER_SIZE: u32 /**GLenum */;
    readonly BUFFER_USAGE: u32 /**GLenum */;
    readonly BYTE: u32 /**GLenum */;
    readonly CCW: u32 /**GLenum */;
    readonly CLAMP_TO_EDGE: u32 /**GLenum */;
    readonly COLOR_ATTACHMENT0: u32 /**GLenum */;
    readonly COLOR_BUFFER_BIT: u32 /**GLenum */;
    readonly COLOR_CLEAR_VALUE: u32 /**GLenum */;
    readonly COLOR_WRITEMASK: u32 /**GLenum */;
    readonly COMPILE_STATUS: u32 /**GLenum */;
    readonly COMPRESSED_TEXTURE_FORMATS: u32 /**GLenum */;
    readonly CONSTANT_ALPHA: u32 /**GLenum */;
    readonly CONSTANT_COLOR: u32 /**GLenum */;
    readonly CONTEXT_LOST_WEBGL: u32 /**GLenum */;
    readonly CULL_FACE: u32 /**GLenum */;
    readonly CULL_FACE_MODE: u32 /**GLenum */;
    readonly CURRENT_PROGRAM: u32 /**GLenum */;
    readonly CURRENT_VERTEX_ATTRIB: u32 /**GLenum */;
    readonly CW: u32 /**GLenum */;
    readonly DECR: u32 /**GLenum */;
    readonly DECR_WRAP: u32 /**GLenum */;
    readonly DELETE_STATUS: u32 /**GLenum */;
    readonly DEPTH_ATTACHMENT: u32 /**GLenum */;
    readonly DEPTH_BITS: u32 /**GLenum */;
    readonly DEPTH_BUFFER_BIT: u32 /**GLenum */;
    readonly DEPTH_CLEAR_VALUE: u32 /**GLenum */;
    readonly DEPTH_COMPONENT: u32 /**GLenum */;
    readonly DEPTH_COMPONENT16: u32 /**GLenum */;
    readonly DEPTH_FUNC: u32 /**GLenum */;
    readonly DEPTH_RANGE: u32 /**GLenum */;
    readonly DEPTH_STENCIL: u32 /**GLenum */;
    readonly DEPTH_STENCIL_ATTACHMENT: u32 /**GLenum */;
    readonly DEPTH_TEST: u32 /**GLenum */;
    readonly DEPTH_WRITEMASK: u32 /**GLenum */;
    readonly DITHER: u32 /**GLenum */;
    readonly DONT_CARE: u32 /**GLenum */;
    readonly DST_ALPHA: u32 /**GLenum */;
    readonly DST_COLOR: u32 /**GLenum */;
    readonly DYNAMIC_DRAW: u32 /**GLenum */;
    readonly ELEMENT_ARRAY_BUFFER: u32 /**GLenum */;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: u32 /**GLenum */;
    readonly EQUAL: u32 /**GLenum */;
    readonly FASTEST: u32 /**GLenum */;
    readonly FLOAT: u32 /**GLenum */;
    readonly FLOAT_MAT2: u32 /**GLenum */;
    readonly FLOAT_MAT3: u32 /**GLenum */;
    readonly FLOAT_MAT4: u32 /**GLenum */;
    readonly FLOAT_VEC2: u32 /**GLenum */;
    readonly FLOAT_VEC3: u32 /**GLenum */;
    readonly FLOAT_VEC4: u32 /**GLenum */;
    readonly FRAGMENT_SHADER: u32 /**GLenum */;
    readonly FRAMEBUFFER: u32 /**GLenum */;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: u32 /**GLenum */;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: u32 /**GLenum */;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: u32 /**GLenum */;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: u32 /**GLenum */;
    readonly FRAMEBUFFER_BINDING: u32 /**GLenum */;
    readonly FRAMEBUFFER_COMPLETE: u32 /**GLenum */;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: u32 /**GLenum */;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: u32 /**GLenum */;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: u32 /**GLenum */;
    readonly FRAMEBUFFER_UNSUPPORTED: u32 /**GLenum */;
    readonly FRONT: u32 /**GLenum */;
    readonly FRONT_AND_BACK: u32 /**GLenum */;
    readonly FRONT_FACE: u32 /**GLenum */;
    readonly FUNC_ADD: u32 /**GLenum */;
    readonly FUNC_REVERSE_SUBTRACT: u32 /**GLenum */;
    readonly FUNC_SUBTRACT: u32 /**GLenum */;
    readonly GENERATE_MIPMAP_HINT: u32 /**GLenum */;
    readonly GEQUAL: u32 /**GLenum */;
    readonly GREATER: u32 /**GLenum */;
    readonly GREEN_BITS: u32 /**GLenum */;
    readonly HIGH_FLOAT: u32 /**GLenum */;
    readonly HIGH_INT: u32 /**GLenum */;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: u32 /**GLenum */;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: u32 /**GLenum */;
    readonly INCR: u32 /**GLenum */;
    readonly INCR_WRAP: u32 /**GLenum */;
    readonly INT: u32 /**GLenum */;
    readonly INT_VEC2: u32 /**GLenum */;
    readonly INT_VEC3: u32 /**GLenum */;
    readonly INT_VEC4: u32 /**GLenum */;
    readonly INVALID_ENUM: u32 /**GLenum */;
    readonly INVALID_FRAMEBUFFER_OPERATION: u32 /**GLenum */;
    readonly INVALID_OPERATION: u32 /**GLenum */;
    readonly INVALID_VALUE: u32 /**GLenum */;
    readonly INVERT: u32 /**GLenum */;
    readonly KEEP: u32 /**GLenum */;
    readonly LEQUAL: u32 /**GLenum */;
    readonly LESS: u32 /**GLenum */;
    readonly LINEAR: u32 /**GLenum */;
    readonly LINEAR_MIPMAP_LINEAR: u32 /**GLenum */;
    readonly LINEAR_MIPMAP_NEAREST: u32 /**GLenum */;
    readonly LINES: u32 /**GLenum */;
    readonly LINE_LOOP: u32 /**GLenum */;
    readonly LINE_STRIP: u32 /**GLenum */;
    readonly LINE_WIDTH: u32 /**GLenum */;
    readonly LINK_STATUS: u32 /**GLenum */;
    readonly LOW_FLOAT: u32 /**GLenum */;
    readonly LOW_INT: u32 /**GLenum */;
    readonly LUMINANCE: u32 /**GLenum */;
    readonly LUMINANCE_ALPHA: u32 /**GLenum */;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: u32 /**GLenum */;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: u32 /**GLenum */;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: u32 /**GLenum */;
    readonly MAX_RENDERBUFFER_SIZE: u32 /**GLenum */;
    readonly MAX_TEXTURE_IMAGE_UNITS: u32 /**GLenum */;
    readonly MAX_TEXTURE_SIZE: u32 /**GLenum */;
    readonly MAX_VARYING_VECTORS: u32 /**GLenum */;
    readonly MAX_VERTEX_ATTRIBS: u32 /**GLenum */;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: u32 /**GLenum */;
    readonly MAX_VERTEX_UNIFORM_VECTORS: u32 /**GLenum */;
    readonly MAX_VIEWPORT_DIMS: u32 /**GLenum */;
    readonly MEDIUM_FLOAT: u32 /**GLenum */;
    readonly MEDIUM_INT: u32 /**GLenum */;
    readonly MIRRORED_REPEAT: u32 /**GLenum */;
    readonly NEAREST: u32 /**GLenum */;
    readonly NEAREST_MIPMAP_LINEAR: u32 /**GLenum */;
    readonly NEAREST_MIPMAP_NEAREST: u32 /**GLenum */;
    readonly NEVER: u32 /**GLenum */;
    readonly NICEST: u32 /**GLenum */;
    readonly NONE: u32 /**GLenum */;
    readonly NOTEQUAL: u32 /**GLenum */;
    readonly NO_ERROR: u32 /**GLenum */;
    readonly ONE: u32 /**GLenum */;
    readonly ONE_MINUS_CONSTANT_ALPHA: u32 /**GLenum */;
    readonly ONE_MINUS_CONSTANT_COLOR: u32 /**GLenum */;
    readonly ONE_MINUS_DST_ALPHA: u32 /**GLenum */;
    readonly ONE_MINUS_DST_COLOR: u32 /**GLenum */;
    readonly ONE_MINUS_SRC_ALPHA: u32 /**GLenum */;
    readonly ONE_MINUS_SRC_COLOR: u32 /**GLenum */;
    readonly OUT_OF_MEMORY: u32 /**GLenum */;
    readonly PACK_ALIGNMENT: u32 /**GLenum */;
    readonly POINTS: u32 /**GLenum */;
    readonly POLYGON_OFFSET_FACTOR: u32 /**GLenum */;
    readonly POLYGON_OFFSET_FILL: u32 /**GLenum */;
    readonly POLYGON_OFFSET_UNITS: u32 /**GLenum */;
    readonly RED_BITS: u32 /**GLenum */;
    readonly RENDERBUFFER: u32 /**GLenum */;
    readonly RENDERBUFFER_ALPHA_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_BINDING: u32 /**GLenum */;
    readonly RENDERBUFFER_BLUE_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_DEPTH_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_GREEN_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_HEIGHT: u32 /**GLenum */;
    readonly RENDERBUFFER_INTERNAL_FORMAT: u32 /**GLenum */;
    readonly RENDERBUFFER_RED_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_STENCIL_SIZE: u32 /**GLenum */;
    readonly RENDERBUFFER_WIDTH: u32 /**GLenum */;
    readonly RENDERER: u32 /**GLenum */;
    readonly REPEAT: u32 /**GLenum */;
    readonly REPLACE: u32 /**GLenum */;
    readonly RGB: u32 /**GLenum */;
    readonly RGB565: u32 /**GLenum */;
    readonly RGB5_A1: u32 /**GLenum */;
    readonly RGBA: u32 /**GLenum */;
    readonly RGBA4: u32 /**GLenum */;
    readonly SAMPLER_2D: u32 /**GLenum */;
    readonly SAMPLER_CUBE: u32 /**GLenum */;
    readonly SAMPLES: u32 /**GLenum */;
    readonly SAMPLE_ALPHA_TO_COVERAGE: u32 /**GLenum */;
    readonly SAMPLE_BUFFERS: u32 /**GLenum */;
    readonly SAMPLE_COVERAGE: u32 /**GLenum */;
    readonly SAMPLE_COVERAGE_INVERT: u32 /**GLenum */;
    readonly SAMPLE_COVERAGE_VALUE: u32 /**GLenum */;
    readonly SCISSOR_BOX: u32 /**GLenum */;
    readonly SCISSOR_TEST: u32 /**GLenum */;
    readonly SHADER_TYPE: u32 /**GLenum */;
    readonly SHADING_LANGUAGE_VERSION: u32 /**GLenum */;
    readonly SHORT: u32 /**GLenum */;
    readonly SRC_ALPHA: u32 /**GLenum */;
    readonly SRC_ALPHA_SATURATE: u32 /**GLenum */;
    readonly SRC_COLOR: u32 /**GLenum */;
    readonly STATIC_DRAW: u32 /**GLenum */;
    readonly STENCIL_ATTACHMENT: u32 /**GLenum */;
    readonly STENCIL_BACK_FAIL: u32 /**GLenum */;
    readonly STENCIL_BACK_FUNC: u32 /**GLenum */;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: u32 /**GLenum */;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: u32 /**GLenum */;
    readonly STENCIL_BACK_REF: u32 /**GLenum */;
    readonly STENCIL_BACK_VALUE_MASK: u32 /**GLenum */;
    readonly STENCIL_BACK_WRITEMASK: u32 /**GLenum */;
    readonly STENCIL_BITS: u32 /**GLenum */;
    readonly STENCIL_BUFFER_BIT: u32 /**GLenum */;
    readonly STENCIL_CLEAR_VALUE: u32 /**GLenum */;
    readonly STENCIL_FAIL: u32 /**GLenum */;
    readonly STENCIL_FUNC: u32 /**GLenum */;
    readonly STENCIL_INDEX8: u32 /**GLenum */;
    readonly STENCIL_PASS_DEPTH_FAIL: u32 /**GLenum */;
    readonly STENCIL_PASS_DEPTH_PASS: u32 /**GLenum */;
    readonly STENCIL_REF: u32 /**GLenum */;
    readonly STENCIL_TEST: u32 /**GLenum */;
    readonly STENCIL_VALUE_MASK: u32 /**GLenum */;
    readonly STENCIL_WRITEMASK: u32 /**GLenum */;
    readonly STREAM_DRAW: u32 /**GLenum */;
    readonly SUBPIXEL_BITS: u32 /**GLenum */;
    readonly TEXTURE: u32 /**GLenum */;
    readonly TEXTURE0: u32 /**GLenum */;
    readonly TEXTURE1: u32 /**GLenum */;
    readonly TEXTURE10: u32 /**GLenum */;
    readonly TEXTURE11: u32 /**GLenum */;
    readonly TEXTURE12: u32 /**GLenum */;
    readonly TEXTURE13: u32 /**GLenum */;
    readonly TEXTURE14: u32 /**GLenum */;
    readonly TEXTURE15: u32 /**GLenum */;
    readonly TEXTURE16: u32 /**GLenum */;
    readonly TEXTURE17: u32 /**GLenum */;
    readonly TEXTURE18: u32 /**GLenum */;
    readonly TEXTURE19: u32 /**GLenum */;
    readonly TEXTURE2: u32 /**GLenum */;
    readonly TEXTURE20: u32 /**GLenum */;
    readonly TEXTURE21: u32 /**GLenum */;
    readonly TEXTURE22: u32 /**GLenum */;
    readonly TEXTURE23: u32 /**GLenum */;
    readonly TEXTURE24: u32 /**GLenum */;
    readonly TEXTURE25: u32 /**GLenum */;
    readonly TEXTURE26: u32 /**GLenum */;
    readonly TEXTURE27: u32 /**GLenum */;
    readonly TEXTURE28: u32 /**GLenum */;
    readonly TEXTURE29: u32 /**GLenum */;
    readonly TEXTURE3: u32 /**GLenum */;
    readonly TEXTURE30: u32 /**GLenum */;
    readonly TEXTURE31: u32 /**GLenum */;
    readonly TEXTURE4: u32 /**GLenum */;
    readonly TEXTURE5: u32 /**GLenum */;
    readonly TEXTURE6: u32 /**GLenum */;
    readonly TEXTURE7: u32 /**GLenum */;
    readonly TEXTURE8: u32 /**GLenum */;
    readonly TEXTURE9: u32 /**GLenum */;
    readonly TEXTURE_2D: u32 /**GLenum */;
    readonly TEXTURE_BINDING_2D: u32 /**GLenum */;
    readonly TEXTURE_BINDING_CUBE_MAP: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: u32 /**GLenum */;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: u32 /**GLenum */;
    readonly TEXTURE_MAG_FILTER: u32 /**GLenum */;
    readonly TEXTURE_MIN_FILTER: u32 /**GLenum */;
    readonly TEXTURE_WRAP_S: u32 /**GLenum */;
    readonly TEXTURE_WRAP_T: u32 /**GLenum */;
    readonly TRIANGLES: u32 /**GLenum */;
    readonly TRIANGLE_FAN: u32 /**GLenum */;
    readonly TRIANGLE_STRIP: u32 /**GLenum */;
    readonly UNPACK_ALIGNMENT: u32 /**GLenum */;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: u32 /**GLenum */;
    readonly UNPACK_FLIP_Y_WEBGL: u32 /**GLenum */;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: u32 /**GLenum */;
    readonly UNSIGNED_BYTE: u32 /**GLenum */;
    readonly UNSIGNED_INT: u32 /**GLenum */;
    readonly UNSIGNED_SHORT: u32 /**GLenum */;
    readonly UNSIGNED_SHORT_4_4_4_4: u32 /**GLenum */;
    readonly UNSIGNED_SHORT_5_5_5_1: u32 /**GLenum */;
    readonly UNSIGNED_SHORT_5_6_5: u32 /**GLenum */;
    readonly VALIDATE_STATUS: u32 /**GLenum */;
    readonly VENDOR: u32 /**GLenum */;
    readonly VERSION: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: u32 /**GLenum */;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: u32 /**GLenum */;
    readonly VERTEX_SHADER: u32 /**GLenum */;
    readonly VIEWPORT: u32 /**GLenum */;
    readonly ZERO: u32 /**GLenum */;
}