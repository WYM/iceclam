import "allocator/tlsf";
import { Par_Class } from "./class_sub_test";

// @ts-ignore
export { memory };

// @ts-ignore
@external("env", "log")
export declare function log(data: string): void;

function alloc<T>(): T {
    return changetype<T>(memory.allocate(offsetof<T>()));
}

function free<T>(obj: T): void {
    memory.free(changetype<usize>(obj));
}

export function test(): void {
    let t = alloc<Test1>();
    t.say();

    let t1 = alloc<Test2>();
    t1.say();

    free(t);
    free(t1);
}

class Test1 extends Par_Class {

    public say(): void {
        log("Test");
    }
}

class Test2 extends Par_Class {
    public say(): void {
        super.say();
    }
}