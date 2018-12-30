import "allocator/tlsf";

// @ts-ignore
export { memory };

// @ts-ignore
@external("worker", "newWorker")
declare function newWorker(path: string): void;

// @ts-ignore
@external("worker", "onmessage")
declare function onmessage(data: string): void;

// @ts-ignore
@external("worker", "postMessage")
declare function postMessage(message: any, transfer?: ArrayBuffer[]): void;

// @ts-ignore
@external("worker", "terminate")
declare function terminate(): void;

export class Wokrer {
    public constructor(path: string) {
        newWorker(path);
    }

    public onMessage(message: ArrayBuffer): void {

    }

    public terminate(): void {
        terminate();
    }
}
