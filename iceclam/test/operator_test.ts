import "allocator/tlsf";

// @ts-ignore
export { memory };

function alloc<T>(): T {
    return changetype<T>(memory.allocate(offsetof<T>()));
}

function free<T>(obj: T): void {
    memory.free(changetype<usize>(obj));
}

class Vector2D {
    public x: i32;
    public y: i32;

    public constructor(x: i32 = 0, y: i32 = 0) {
        this.x = x;
        this.y = y;
    }

    @operator('+')
    public add(other: Vector2D): Vector2D {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
}

export function test(): i32 {
    let v1 = alloc<Vector2D>();
    let v2 = alloc<Vector2D>();
    v2.x = 1;
    v2.y = 2;

    // @ts-ignore
    let v3: Vector2D = v1 + v2;

    let r = v3.x * v3.y;
    free(v1);
    free(v2);
    return r;
}