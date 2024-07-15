- To print on console, You have to write variable name or content in place of (...),
  
```js
console.log(...)
```

- If you write a name of a variable in which data is store which you want to print then, No need of `"..."` (like, `console.log(...)`), but if you write a content which you want to print then you have to write it inside `"..."` (like, `console.log("...")`).

- To declare a variable, use the keyword `let` & To declare a function, use the keyword `function`.
- You can define variable & function as below,

```js
let myAge = 20

function printHello() {
    console.log("Hello")
}
```

- We can declare & define strings as below, 
```js
let username = "Krunal Kadtan"
let name = 'Krunal'
```
- We can use `"..."` or `'...'` for defining string.

```js
console.log(4 + 5)  //9
console.log("2" + "4")  //24
console.log("5" + 1)    //51
console.log(100 + "100")    //100100
```
- In 1st example, `4` & `5` are numbers.
- In 2nd example, `2` & `4` are strings.
- In 3rd example, `5` is string & `1` is number.
- In 4th example, `100` is number & another `100` is string.

- In console, numbers are printed in blue color & strings are printed in white color.

- You concatenate two string simply using `+` sign.

## Render a welcome message

```html
<html>
    <head>
    </head>
    <body>
        <p id="welcome-el"></p>
        <script src="index.js"></script>
    </body>
</html>
```

```js
let welcomeEl = document.getElementById("welcome-el")

let name = "Krunal Kadtan"
let greeting = "Welcome Back"

welcomeEl.innerText = greeting + ", " + name + "!"
```

- We can use conditional statement as below,
```js
if (condition1) {
    // block of code if condition1 is true
} else if (condition2) {
    //block of code if condition2 is true
} else {
    // block of code if both conditions are not true
}
```

- For **equal to** condition, we use `===` instead of `==`.

- We can declare & define array as below,
```js
let names = ["Krunal", "Dev", "Yagnesh"]

// OR

let names = [
    "Krunal",
    "Dev",
    "Yagnesh"
]
```

- We can find length of array by using `length` property as below,
```js
console.log(name.length)    // 3
```

- We can store value of different datatype in a array as below,

```js
let person = ["Krunal Kadtan", 20]
```

- We can add new element at the end of the array using `push` method as below,
```js
let cards = [4, 7]
cards.push(10)
console.log(cards)  // [4, 7, 10]
```
We can add new element at the beginning of the array using `unshift` method.

- We can remove last element of the array using `pop` method as below,
```js
console.log(cards)  // [4, 7, 10]
cards.pop()
console.log(cards)  // [4, 7]
```
We can remove first element of the array using `shift` method.

- We can use for loop similarly as we use in C programming language.

- We can use logical operators similarly as we use in C programming language.

- We can declare & define object as below,
```js
let person = {
    name: "Krunal",
    age: 20
}
```
- Inside object, we use `:` to assign values to variables & we separate variables using `,` as we do in array.
- Variables that are inside the object is known as **key** of an object & Functions that are inside the object is known as **method** of an object.

- `document.getElementById("input-el").value` is used to access the value entered in an input field with the ID `input-el`.
- `document.createElement("li")` method is used to create a new HTML element of the type specified (in this case, a list item `<li>`). This new element can then be modified and added to the DOM (Document Object Model). (We can also create HTML element using `innerHTML` like this, `ulEl.innerHTML += "<li>" + myLead[i] + "</li>"`)
- Template strings, also known as template literals, are a feature that allows for easier and more readable string interpolation and multi-line strings. They are enclosed by backticks (`` ` ``) instead of single or double quotes.