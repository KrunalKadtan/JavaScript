- `querySelector` method is used to select the first element that matches a specified CSS selector within the document.

### Basic Syntax
```javascript
document.querySelector(selector);
```
- `selector`: A string representing a CSS selector.

### Example Usage

1. **Selecting an Element by ID**
   ```javascript
   var element = document.querySelector('#myId');
   ```
   This selects the first element with the ID `myId`.

2. **Selecting an Element by Class**
   ```javascript
   var element = document.querySelector('.myClass');
   ```
   This selects the first element with the class `myClass`.

3. **Selecting an Element by Tag Name**
   ```javascript
   var element = document.querySelector('div');
   ```
   This selects the first `<div>` element in the document.

4. **Selecting a Nested Element**
   ```javascript
   var element = document.querySelector('div .myClass');
   ```
   This selects the first element with the class `myClass` inside a `<div>` element.

- If no matches are found, `querySelector` returns `null`.
- If you want to select all matching elements, use `querySelectorAll`.

- `Math.random()` and `Math.floor()` are two functions provided by the `Math` object, which is a built-in object that has properties and methods for mathematical constants and functions.

### `Math.random()`

The `Math.random()` function returns a floating-point, pseudo-random number in the range from 0 (inclusive) up to but not including 1 (exclusive).

### Basic Syntax

```javascript
Math.random();
```

### Example Usage

1. **Generate a Random Number Between 0 and 1**
   ```javascript
   var randomNumber = Math.random();
   console.log(randomNumber); // Example output: 0.345678
   ```

2. **Generate a Random Number Between 0 and 10**
   ```javascript
   var randomNumber = Math.random() * 10;
   console.log(randomNumber); // Example output: 7.456789
   ```

### `Math.floor()`

The `Math.floor()` function returns the largest integer less than or equal to a given number. It rounds down to the nearest integer.

### Basic Syntax

```javascript
Math.floor(x);
```

- `x`: The number you want to round down.

### Example Usage

1. **Rounding Down a Floating-Point Number**
   ```javascript
   var roundedNumber = Math.floor(4.7);
   console.log(roundedNumber); // Output: 4
   ```

2. **Rounding Down a Negative Floating-Point Number**
   ```javascript
   var roundedNumber = Math.floor(-4.7);
   console.log(roundedNumber); // Output: -5
   ```

### Combining `Math.random()` and `Math.floor()`

These functions are often used together to generate random integers within a specific range.

1. **Generate a Random Integer Between 0 and 9**
   ```javascript
   var randomInteger = Math.floor(Math.random() * 10);
   console.log(randomInteger); // Example output: 3
   ```

2. **Generate a Random Integer Between min (inclusive) and max (exclusive)**
   ```javascript
   function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
   }

   var randomInt = getRandomInt(5, 15);
   console.log(randomInt); // Example output: 7 (this will vary)
   ```

3. **Generate a Random Integer Between min (inclusive) and max (inclusive)**
   ```javascript
   function getRandomIntInclusive(min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
   }

   var randomIntInclusive = getRandomIntInclusive(5, 15);
   console.log(randomIntInclusive); // Example output: 12 (this will vary)
   ```

- Objects are a key part of the language and are used to store collections of data and more complex entities.

### What is an Object?

An object in JavaScript is a collection of properties, and a property is an association between a name (or key) and a value. The value of a property can be a function, which is then considered a method of the object.

### Creating an Object

You can create an object in JavaScript in a few different ways :

#### 1. Using Object Literals
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "Engineer"
};
```

#### 2. Using the `new Object()` Syntax
```javascript
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.job = "Engineer";
```

### Accessing Object Properties

You can access the properties of an object using dot notation or bracket notation :

#### Dot Notation
```javascript
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30
```

#### Bracket Notation
```javascript
console.log(person["firstName"]); // Output: John
console.log(person["age"]); // Output: 30
```

### Adding and Modifying Properties

You can add new properties or modify existing ones using either dot notation or bracket notation :

#### Adding a New Property
```javascript
person.gender = "male";
console.log(person.gender); // Output: male
```

#### Modifying an Existing Property
```javascript
person.age = 31;
console.log(person.age); // Output: 31
```

### Removing Properties

You can remove properties from an object using the `delete` operator :

```javascript
delete person.job;
console.log(person.job); // Output: undefined
```

### Methods in Objects

A method is a function that is a property of an object. Here’s how you can define and use methods :

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "Engineer",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe
```

### Looping through Properties

You can loop through the properties of an object using a `for...in` loop :

```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

This will output:
```
firstName: John
lastName: Doe
age: 30
job: Engineer
```