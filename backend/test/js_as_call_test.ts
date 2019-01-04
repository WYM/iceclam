import "allocator/tlsf";

// @ts-ignore
export { memory };

// @ts-ignore
@external("env", "log")
declare function log(data: string): void;

export function add(a: i32, b: i32): i32 {
    log('js call as function');
    return a + b;
}