# jQuery.css

## Difficulty: Easy

My personal difficult: medium

# Description

The way to set styles on an element in Vanilla JavaScript would be as follows:

```
const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';
```

jQuery simplifies DOM manipulation and more. The library uses `$` as its alias function, which can simplify the above code into:

```
const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');
```

Most jQuery manipulation APIs return the jQuery object itself, so that method calls can be chained. For example:

```
$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');
```

And if the second parameter's not provided, the value of the style property is returned:

```
<button style="color: red">Submit</button>

$('button').css('color'); // 'red'
```

# Requirements

Implement the jQuery single-character function `$` which only supports the `css()` method. The `css()` method either sets a CSS property on the matched element or gets the value of a computed style property.
