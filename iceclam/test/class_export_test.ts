import "allocator/tlsf";

// @ts-ignore
export { memory };

function alloc<T>(): T {
    return changetype<T>(memory.allocate(offsetof<T>()));
}

function free<T>(obj: T): void {
    memory.free(changetype<usize>(obj));
}

// @ts-ignore
@external("worker", "newWorker")
declare function newWorker(path: string): void;

// @ts-ignore
@external("worker", "postMessage")
declare function postMessage(message: i32): void;

// @ts-ignore
@external("worker", "terminate")
declare function terminate(): void;

// @ts-ignore
@external("env", "log")
declare function log(message: string): void;

export class Wokrer {
    public newWorker(path: string): void {
        newWorker(path);
    }

    public onMessage(message: string): void {
        log(message);
    }

    public postMessage(message: i32): void {
        postMessage(message);
    }

    public terminate(): void {
        terminate();
    }
}

let worker: Wokrer;
export function test(path: Uint16Array, message: i32): void {
    worker = alloc<Wokrer>();
    let str = String.fromUTF8(path.buffer.data, path.buffer.byteLength);
    log("path：" + str);
    worker.newWorker(str);
    worker.postMessage(message);

    // free(str);
}

export function destory(): void {
    free(worker);
}