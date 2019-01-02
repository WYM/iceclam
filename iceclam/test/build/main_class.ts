import "allocator/tlsf";
// import { ImportClass } from "./other_class";

// @ts-ignore
export { memory };

function alloc<T>(): T {
    return changetype<T>(memory.allocate(offsetof<T>()));
}

function free<T>(obj: T): void {
    memory.free(changetype<usize>(obj));
}

// @ts-ignore
@external("gl", "log")
export declare function log(data: string, xx: string): void;

export class Iceclam {

}

export function Main(): void {
    let iceclam = alloc<Iceclam>();
    free(iceclam);

    // let importclass = alloc<ImportClass>();
    // free(importclass);
}