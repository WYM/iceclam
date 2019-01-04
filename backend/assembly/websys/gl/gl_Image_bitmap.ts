import { UObject } from "../../base/object";

// @ts-ignore
@external("gl", "newImageBitmap")
export declare function newImageBitmap(id: i64): void;

// @ts-ignore
@external("gl", "imageBitmapClose")
export declare function imageBitmapClose(id: i64): void;

export class ImageBitmap extends UObject {
    public readonly height: number;
    public readonly width: number;

    public create(): void {
        newImageBitmap(this.id);
    }

    public close(): void {
        imageBitmapClose(this.id);
    }
}