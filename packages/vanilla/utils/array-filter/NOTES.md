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

Additionally, if we look in the test case functions, at least one function has a variable or parameter that is being converted from a number in an array `[9]` into `9` number.

What's happening here is some kind of type conversion in JavaScript. If you want to know more, see the PDFs files that displays the table of type conversion or visit their sources:

https://getify.github.io/coercions-grid
https://www.w3schools.com/jsref/jsref_type_conversion.asp

# Edges cases

- Sparse arrays. For example, `[, , , ,]`
