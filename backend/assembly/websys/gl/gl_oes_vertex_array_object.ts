import { UObject } from "../../base/object";

export class WebGLVertexArrayObjectOES extends UObject {

}

export class OES_vertex_array_object extends UObject {
    public readonly VERTEX_ARRAY_BINDING_OES: u32 /**GLenum */;

    public bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void {

    }

    public createVertexArrayOES(): WebGLVertexArrayObjectOES | null {
        return null;
    }

    public deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void {

    }

    public isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): u8 /**GLboolean */ {
        return 1;
    }

    public create(): void {

    }
}