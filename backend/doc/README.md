```
Most of the standard library has been designed with eventual GC support in mind, so freeing the respective structures is not straight forward. It can be done, though.

function freeArray<T>(arr: T[]): void {
  assert(arr !== null);
  memory.free(load<usize>(changetype<usize>(arr) + offsetof<T[]>("buffer_")));
  memory.free(changetype<usize>(arr));
}
That frees both the backing ArrayBuffer and the Array structure (in this order). Careful, though, because if there are any other references to that array afterwards, that might result in a use-after-free situation.

Another thing to note is that arrays can resize their buffer automatically, i.e. when more space is needed, leaving an unreferenced buffer behind that can't be accessed anymore. Do this only with fixed size arrays, like

var arr = new Array<i32>(32);
and take special care that it doesn't have to resize.
```