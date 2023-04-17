# Personal Notes

Knowing `Function.prototype.call()` may be required to solve this problem. Read up about it on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

`call()` can invoke the next parameters:

```
call(thisArg), arg1, arg2, ....argN)
```

For example,

```
const isNumberEven = num => num % 2 == 0;

const test = (callbackFn, thisArg) => {
    callbackFn.call(thisArg, 9);
    // 1. isNumberEven(10) -> 10 % 2 == 0 -> true
        // 2. isNumberEven(9) -> 9 % 2 == 0 -> false
}

test(isNumberEven, 10);

```

# Edges cases

- Sparse arrays. For example, `[, , , ,]`
