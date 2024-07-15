## `addEventListener`

The `addEventListener` method is used to attach an event handler to a specified element. This means that when an event (like a click, hover, or keypress) occurs on that element, a specific function will run.

### Syntax

```javascript
element.addEventListener(event, function, useCapture);
```

- **element** : The HTML element you want to attach the event to.
- **event** : A string that specifies the type of event (e.g., "click", "mouseover", "keydown").
- **function** : The function you want to run when the event occurs.
- **useCapture** (optional) : A boolean value that indicates whether the event should be captured or bubbled. Default is `false` (bubbling).

### Example

Here’s an example of using `addEventListener` to show an alert when a button is clicked :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click me</button>

    <script>
        // Get the button element
        var button = document.getElementById('myButton');
        
        // Define the function to run when the event occurs
        function showAlert() {
            alert('Button was clicked!');
        }
        
        // Attach the event listener to the button
        button.addEventListener('click', showAlert);
    </script>
</body>
</html>
```

### Explanation

1. **Get the Element** : `var button = document.getElementById('myButton');`
   - This line selects the button element by its ID.

2. **Define the Function** : `function showAlert() { alert('Button was clicked!'); }`
   - This function will run when the button is clicked, showing an alert with the message "Button was clicked!".

3. **Attach the Event Listener** : `button.addEventListener('click', showAlert);`
   - This line attaches the `showAlert` function to the button’s `click` event.

### Why Use `addEventListener`?

- **Separation of HTML and JavaScript** : Keeps your HTML clean by not mixing event handlers with HTML tags.
- **Multiple Event Handlers** : Allows you to add multiple event listeners to a single element.
- **Removing Event Listeners** : Makes it easy to remove event listeners when they are no longer needed using `removeEventListener`.

## `innerHTML`

The `innerHTML` property is used to get or set the HTML content of an element. It allows you to read the HTML inside an element or insert new HTML into it.

### Syntax
To get the HTML content :
```javascript
var content = element.innerHTML;
```

To set the HTML content :
```javascript
element.innerHTML = 'new HTML content';
```

### Example

Here’s an example of using `innerHTML` to update the content of a `<div>` element when a button is clicked :

```html
<!-- A div element with an ID of "content-el" -->
<div id="content-el">Original content</div>
<!-- A button to trigger the event -->
<button id="btn">Change Content</button>
```

```js
// Get the button and div elements
var button = document.getElementById('btn');
var contentDiv = document.getElementById('content-el');

// Define the function to change the inner HTML
function changeContent() {
// Set new HTML content for the div
contentDiv.innerHTML = '<p>New content</p>';
}

// Attach an event listener to the button
button.addEventListener('click', changeContent);
```

### Explanation

1. **HTML Structure** :
   - A `<div>` element with an ID of `content-el` and initial content "Original content".
   - A button with an ID of `btn` to trigger the event.

2. **JavaScript** :
   - `var button = document.getElementById('btn');` and `var contentDiv = document.getElementById('content-el');` are used to get the button and div elements by their IDs.
   - `function changeContent() { contentDiv.innerHTML = '<p>New content</p>'; }` defines a function that changes the inner HTML of the div to `<p>New content</p>`.
   - `button.addEventListener('click', changeContent);` attaches an event listener to the button, so when the button is clicked, the `changeContent` function runs and updates the content of the div.

### Using `innerHTML` to Get Content

To get the current HTML content of an element, you can use `innerHTML` like this :
```javascript
var currentContent = contentDiv.innerHTML;
console.log(currentContent);
```
This will log the current HTML content of the `contentDiv` element to the console.

### Important Notes

- **Security** : Be careful when setting `innerHTML` with user input, as it can lead to Cross-Site Scripting (XSS) attacks. Always sanitize any user input before inserting it into the DOM.
- **Performance** : Frequent updates to `innerHTML` can impact performance, especially with large DOM elements. Consider using other methods like `createElement` and `appendChild` for more complex DOM manipulations.

## `localStorage`

The `localStorage` object is part of the Web Storage API and allows you to store data in the browser. The data stored in `localStorage` has no expiration time, which means it will persist even after the browser is closed and reopened.

**Key Points about `localStorage` :**
- Data is stored as key-value pairs.
- It is limited to around 5-10MB of data, depending on the browser.
- Only strings can be stored. If you need to store objects, arrays, or other types, you need to convert them to strings using `JSON.stringify()`.

**Basic Usage :**

1. **Storing Data :**
   ```javascript
   localStorage.setItem('key', 'value');
   ```

2. **Retrieving Data :**
   ```javascript
   var value = localStorage.getItem('key');
   ```

3. **Removing Data :**
   ```javascript
   localStorage.removeItem('key');
   ```

4. **Clearing All Data :**
   ```javascript
   localStorage.clear();
   ```

## `JSON`

The `JSON` object is used for parsing JSON-formatted strings and converting JavaScript values to JSON strings. JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.

**Key Points about `JSON`:**
- It is commonly used for transmitting data in web applications.
- It is language-independent but uses conventions familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and others.

**Basic Usage :**

1. **Converting a JavaScript object to a JSON string :**
   ```javascript
   var obj = { name: 'John', age: 30 };
   var jsonString = JSON.stringify(obj);
   ```

2. **Parsing a JSON string to a JavaScript object :**
   ```javascript
   var jsonString = '{"name":"John","age":30}';
   var obj = JSON.parse(jsonString);
   ```

### Example : Storing and Retrieving an Object in `localStorage`

Let's combine `localStorage` and `JSON` to store and retrieve a JavaScript object.

1. **Storing an object :**
   ```javascript
   var user = { name: 'John', age: 30 };
   localStorage.setItem('user', JSON.stringify(user));
   ```

2. **Retrieving and parsing the object :**
   ```javascript
   var userString = localStorage.getItem('user');
   var user = JSON.parse(userString);
   console.log(user.name); // Output: John
   ```

## `manifest.json`

```js
{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads Tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    },
    "permissions": [
        "tabs"
    ]
}
```

### Breakdown of the Manifest File

1. **manifest_version** :
   ```json
   "manifest_version": 3
   ```
   - Specifies the version of the manifest file format being used. Manifest version 3 is the latest version, introducing new features and security improvements.

2. **version** :
   ```json
   "version": "1.0"
   ```
   - The version of your Chrome extension. This is used to keep track of different versions of your extension.

3. **name** :
   ```json
   "name": "Leads Tracker"
   ```
   - The name of your Chrome extension. This name will appear in the Chrome Web Store and in the Extensions page in Chrome.

4. **action** :
   ```json
   "action": {
       "default_popup": "index.html",
       "default_icon": "icon.png"
   }
   ```
   - **default_popup** :
     ```json
     "default_popup": "index.html"
     ```
     - Specifies the HTML file that will be used as the popup for the extension's action. When the user clicks on the extension's icon in the toolbar, this file will be displayed.
   - **default_icon** :
     ```json
     "default_icon": "icon.png"
     ```
     - Specifies the icon file that will be used for the extension's action. This is the icon that will appear in the Chrome toolbar.

5. **permissions** :
   ```json
   "permissions": [
       "tabs"
   ]
   ```
   - Lists the permissions that the extension needs to operate. In this case, the extension is requesting permission to access the browser's tabs API. This permission allows the extension to interact with and manipulate browser tabs.

### Example Usage

- **Extension Icon** :
  - The icon for the extension (`icon.png`) will appear in the Chrome toolbar.
- **Popup** :
  - When the user clicks on the extension icon, the `index.html` file will be displayed as a popup.
- **Permissions** :
  - The extension can access and interact with the browser's tabs, allowing it to perform actions such as querying, creating, and modifying tabs.