import { document } from '../../assembly/websys/web/document';
import { HTMLCanvasElement } from '../../assembly/websys/web/html_canvas_element';
import { WebGLRenderingContext } from '../../assembly/websys/gl/gl_webgl_rendering_context';

export function test(): void {
    let canvas = document.getElementById<HTMLCanvasElement>();
    canvas.commit();

    let webgl = canvas.getContext<WebGLRenderingContext>();
    if (!webgl) {
        return;
    }
    webgl.commit();
}