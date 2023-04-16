# Personal Notes

Knowing about **JavaScript Function Chaining/Object Chaining** is necessary to solve implement the `css()` method. jQuery is able to do functional chaining because it returns the same object once the function is executed & the returned elements act as a reference for the next operation.

So we can achieve that in Vanilla JavaScript as well by returning the current reference of the object (`return this`) that the function is currently executing, for example:

```
function test() {
    return {
        result: 0,
        add: function(a) {
            this.result = this.result + a;

            return this; // this points to the currently executing object. e.g. the returning {} that is containing result, add fn(), and subtract().
        },
        subtract: function(c) {
            this.result = this.result - c;
            return this;
        }
    }
}

test().add(1).subtract(2); // -1
```

The functions can be chained together because the previous function returns the results (execution context) that can be processed further.

# Edge Cases

- No elements match the selector.
- Return `undefined` instead of an empty string if the CSS property doesn't exist.

# Solution

```
/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * @param {string} prop
     * @param {boolean|string|number} value
     * @return {Object|void}
     */
    css: function (prop, value) {
      // Getter case.
      if (value === undefined) {
        // No matching elements.
        if (element == null) {
          return undefined;
        }

        const value = element.style[prop];
        return value === '' ? undefined : value;
      }

      // Setter case.
      if (element != null) {
        element.style[prop] = value;
      }

      return this;
    },
  };
}
```

# Alternate solution

```
class jQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  css(prop, value) {
    // Getter case.
    if (value === undefined) {
      // No matching elements.
      if (this.element == null) {
        return undefined;
      }

      const value = this.element.style[prop];
      return value === '' ? undefined : value;
    }

    // Setter case.
    if (this.element != null) {
      this.element.style[prop] = value;
    }

    return this;
  }
}

export default function $(element) {
  return new jQuery(element);
}
```
