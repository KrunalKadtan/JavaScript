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