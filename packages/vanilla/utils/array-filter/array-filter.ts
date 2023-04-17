interface Array<T> {
  myFilter(callbackFn: (value: T) => boolean, thisArg?: any): Array<T>;
}

Array.prototype.myFilter = function (callbackFn: Function, thisArg: unknown) {
  const result: unknown[] = [];
  // this is referring to Array
  const arrayLength = this.length;

  let value = null;

  for (let i = 0; i < arrayLength; i++) {
    value = this[i];

    // sparse arrays
    if (value == undefined) {
      continue;
    }

    // invoke the callback func on thisArg first, then value, then index, then the Array based on the test cases
    if (callbackFn.call(thisArg, value, i, this)) {
      result.push(value);
    }
  }

  return result;
};

const mytest = (value: number) => value % 2 == 0;

//  [1, 2, 3, 4] is "this"
[1, 2, 3, 4].myFilter(mytest);
