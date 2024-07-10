```js
let countEl = document.getElementById("count-el")
```

- Here, `document.getElementById("count-el")` represent the `count-el` ID of `h2` element.
- `document` is an object & `getElementById` is a method.
- `innerText` represents the content of `h2` element with `count-el` id.

```js
let saveEl = document.getElementById("save-el")
```

- Here, We declare variable `saveEL` & store `save-el` element into it.
- We change the inner content of `save-el` as below,
```js
saveEl.innerText += " " + count + ", "
```

# `textContent` & `innerText`

- `innerText` and `textContent` are used to get or set the text of an HTML element.

### `textContent`

1. Includes all text content : `textContent` retrieves all the text within an element, including hidden elements (elements with `display: none`).
2. Faster : It's generally faster because it only concerns itself with the text content and ignores CSS styles.
3. Sets all text : When setting `textContent`, it replaces all the content of the element with the provided text.

### `innerText`

1. Excludes hidden text : `innerText` only retrieves text that is visible to the user (does not include text from hidden elements).
2. Slower : It's slower compared to `textContent` because it involves layout and style computations.
3. CSS considerations : It respects CSS styles and takes into account `line breaks` and `text transformations`.

### Example

```html
<div id="example">
    Hello <span style="display:none">World</span>!
</div>
```

#### Using `textContent`

```js
const element = document.getElementById("example");
console.log(element.textContent); // Outputs: "Hello World!"
element.textContent = "New Content";
console.log(element.innerHTML);   // Outputs: "New Content"
```

#### Using `innerText`

```js
const element = document.getElementById("example");
console.log(element.innerText);   // Outputs: "Hello !"
element.innerText = "New Content";
console.log(element.innerHTML);   // Outputs: "New Content"
```