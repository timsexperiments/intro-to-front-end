# 05. The Interactive DOM

We have built the body (HTML), dressed it up (CSS), and learned the language of logic (JavaScript). Now, it is time to connect the brain to the body.

Up until now, your JavaScript ran in the isolated void of the Console. In this lesson, we will use JavaScript to reach out and touch the HTML elements on your page.

## 1. The Bridge: The `document` Object

The browser gives us a global object called `document`. This object is your portal to the DOM. It contains methods to find, create, and delete HTML elements.

**Crucial Concept:** When you change the DOM with JavaScript (e.g., deleting a photo), you are **NOT** changing your source HTML file. You are only changing the _in-memory_ version currently shown in the browser. If you refresh the page, everything resets to what is in your `.html` file.

## 2. Selection (Grabbing Elements)

To manipulate an element, you first have to find it.

### `querySelector()` (Recommended)

This is the modern standard. It uses the **CSS Selectors** you already know. Finds the **first** element that matches a CSS selector.

```javascript
// Finds the first <h1> tag
const title = document.querySelector("h1");

// Finds the element with class "card"
const card = document.querySelector(".card");

// Finds the element with ID "submit-btn"
const btn = document.querySelector("#submit-btn");
```

### `querySelectorAll()`

Finds **all** elements that match. It returns a `NodeList` (which acts like an Array).

```javascript
const allButtons = document.querySelectorAll("button");

// We can loop through them!
for (const btn of allButtons) {
  console.log(btn);
}
```

> **Note:** `querySelectorAll` returns a "static" list. If you add more buttons to the page later, this list won't automatically update.

### `getElementById()`

The classic, fast way to grab a specific element by ID.

```javascript
const title = document.getElementById("main-title");
```

## 3. The `HTMLElement` Class

When you grab an element, the browser returns an instance of the **`HTMLElement`** class. These objects have properties (data) and methods (actions).

### Common Properties

- **`element.innerText`**: The visible text inside the element.
- **`element.innerHTML`**: The raw HTML inside. **Warning:** Be careful when using this! If you insert user-generated content here without sanitizing it, you risk XSS (Cross-Site Scripting) attacks (e.g., a malicious user inserting a script tag).
- **`element.children`**: A list of elements inside this one.
- **`element.style`**: An object representing the inline CSS styles.
- **`element.classList`**: A manager for the element's CSS classes.

## 4. Reading & Changing Content

Once you have an element, you often want to change what's inside.

### `innerText` vs `textContent` vs `innerHTML`

- **`element.textContent`**: The safest and fastest way to set text. It sets the raw text content.
- **`element.innerText`**: Similar to `textContent`, but it respects CSS styling (e.g., it won't show text that is `display: none`).
- **`element.innerHTML`**: Parses the string as HTML.
  - **Warning:** Be careful! If you insert user-generated content here without sanitizing it, you risk XSS (Cross-Site Scripting) attacks.

```javascript
const title = document.querySelector("h1");

title.textContent = "Hello World"; // Good default
title.innerHTML = "Hello <span>World</span>"; // Renders the span as HTML
```

### Example: Content Manipulation

<div style="padding: 20px; background: #e3f2fd; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0;">Try It: Change Content</h4>
  <h3 id="demo-heading" style="color: #1976D2;">Original Text</h3>
  <button style="padding: 10px 20px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;" onclick="document.getElementById('demo-heading').textContent = 'Changed with textContent!'">Change Text</button>
  <button style="padding: 10px 20px; background: #FF9800; color: white; border: none; border-radius: 4px; cursor: pointer;" onclick="document.getElementById('demo-heading').innerHTML = '<strong>Bold</strong> HTML!'">Change with HTML</button>
</div>

```javascript
// What happens when you click the first button:
const heading = document.getElementById("demo-heading");
// heading = <h3 id="demo-heading">Original Text</h3>

heading.textContent = "Changed with textContent!";
// heading.textContent = "Changed with textContent!"
// Result: <h3 id="demo-heading">Changed with textContent!</h3>

// What happens when you click the second button:
heading.innerHTML = "<strong>Bold</strong> HTML!";
// innerHTML parses the string as HTML
// Result: <h3 id="demo-heading"><strong>Bold</strong> HTML!</h3>
```

## 5. Inputs & Values

When working with form elements (`<input>`, `<textarea>`, `<select>`), we don't use `innerText`. We use **`value`**.

The `value` property represents what the user has currently typed or selected.

```javascript
const emailInput = document.querySelector("#email");

// Reading the value
console.log(emailInput.value); // What the user typed

// Writing the value (Programmatically filling the form)
emailInput.value = "user@example.com";
```

### Styles (`classList` vs `.style`)

You _can_ set styles directly using `.style`, but it applies **inline styles**, which are hard to override and messy.

**Bad:**

```javascript
// Adds inline style="color: red;"
btn.style.color = "red";
```

**Good (`classList`):**
Define a class in your CSS (`.active { color: red; }`) and toggle it in JS.

```javascript
btn.classList.add("active");
btn.classList.remove("active");
btn.classList.toggle("active"); // Adds if missing, removes if present
btn.classList.contains("active"); // Returns true/false
```

### Example: classList in Action

<style>
  .demo-box-cls {
    width: 100px;
    height: 100px;
    background: #ccc;
    transition: all 0.3s ease;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .demo-box-cls.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.2) rotate(5deg);
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }
</style>

<div style="padding: 20px; background: #f5f5f5; border-radius: 8px; margin: 20px 0;">
  <div class="demo-box-cls" id="toggle-box">OFF</div>
  <button style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 15px;" onclick="const box = document.getElementById('toggle-box'); box.classList.toggle('active'); box.textContent = box.classList.contains('active') ? 'ON' : 'OFF';">Toggle .active Class</button>
</div>

```javascript
// When you click the button:
const box = document.getElementById("toggle-box");

box.classList.toggle("active");
// If 'active' is absent → adds it
// If 'active' is present → removes it

// Check if it has the class
if (box.classList.contains("active")) {
  box.textContent = "ON";
} else {
  box.textContent = "OFF";
}
```

## 6. Creating & Removing Elements

You aren't limited to the elements you wrote in your HTML file. You can build new ones on the fly.

### 1. Create

```javascript
const newBtn = document.createElement("button");
newBtn.textContent = "Click Me";
newBtn.classList.add("btn-primary");
```

### 2. Insert

You need to tell the browser _where_ to put this new element.

```javascript
const container = document.querySelector(".container");

container.append(newBtn); // Adds to the end of the container
container.prepend(newBtn); // Adds to the start
```

### 3. Clear

Sometimes you want to wipe an element clean before adding new things (like removing text to make room for an input).

```javascript
const container = document.querySelector(".name-container");
container.innerHTML = ""; // Removes everything inside

// Alternative (Looping to remove)
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

### 4. Remove

```javascript
newBtn.remove(); // Deletes it from the page
```

### Example: Creating Elements Dynamically

<div style="padding: 20px; background: #e8f5e9; border-radius: 8px; margin: 20px 0;">
  <div id="card-container" style="display: flex; gap: 10px; flex-wrap: wrap; min-height: 60px; align-items: center;">
    <em style="color: #666;">Click the button to add cards...</em>
  </div>
  <button style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 15px;" onclick="const container = document.getElementById('card-container'); const card = document.createElement('div'); card.style.cssText = 'background: #4CAF50; color: white; padding: 15px 25px; border-radius: 8px; font-weight: bold;'; card.textContent = 'Card ' + (container.children.length + 1); if(container.querySelector('em')) container.querySelector('em').remove(); container.append(card);">Add New Card</button>
  <button style="padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 15px; margin-left: 10px;" onclick="const container = document.getElementById('card-container'); if(container.lastElementChild && container.lastElementChild.tagName === 'DIV') container.lastElementChild.remove(); if(container.children.length === 0) {const em = document.createElement('em'); em.style.color = '#666'; em.textContent = 'Click the button to add cards...'; container.append(em);}">Remove Last Card</button>
</div>

```javascript
// Step-by-step: Creating and adding an element
const newCard = document.createElement("div");
// newCard = <div></div> (exists in memory only)

newCard.textContent = "Card 1";
// newCard = <div>Card 1</div>

newCard.style.background = "#4CAF50";
newCard.style.color = "white";
newCard.style.padding = "15px 25px";
// Styles applied

const container = document.getElementById("card-container");
container.append(newCard);
// Now it's visible on the page!

// Removing an element
newCard.remove();
// Element is deleted from the page
```

## 7. Events (Listening)

Websites are event-driven. We use `addEventListener` to tell the browser: _"Hey, wait for the user to do X, and then run function Y."_

```javascript
const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

### Common Events

- **Mouse:** `click`, `mouseenter` (hover start), `mouseleave` (hover end).
- **Keyboard:** `keydown`, `keyup`.
- **Forms:** `submit`, `input` (typing), `change`.

### Keyboard Example (Enter Key)

```javascript
const input = document.querySelector("#chat-input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Message sent:", input.value);
  }
});
```

### Script Timing (`DOMContentLoaded`)

If your script runs before the HTML exists, it won't find your elements.
**Best Practice:** Put your `<script>` at the bottom of `<body>`.
**Alternative:** Listen for the DOM to be ready.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // Run your code here
});
```

## 8. The Event Object

When an event occurs, the browser passes an **Event Object** (`e`) to your function.

- **`e.target`**: The specific element that was clicked.
- **`e.preventDefault()`**: Stops the default browser behavior (like a form refreshing the page).

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop refresh
  console.log("Form submitted!");
});
```

## 9. The Event Flow (Bubbling)

Events "bubble" up from the clicked element to its parents.

1.  You click a button inside a card.
2.  The button's click listener fires.
3.  The card's click listener fires.

You can stop this with `e.stopPropagation()`.

## 10. Best Practices Summary

1.  **Separation of Concerns:** Keep styles in CSS, structure in HTML, and logic in JS.
2.  **Avoid Inline Handlers:** Don't use `onclick="..."` in HTML. Use `addEventListener`.
3.  **Use Classes for State:** Don't manually change 10 CSS properties in JS. Toggle a single class.
4.  **Cache Selectors:** If you use an element often, save it to a variable (`const btn = ...`) instead of querying it every time.

## Assignment: The Interaction

It is time to make your Profile Card actually work.

[-> Go to the Assignment](./assignment/README.md)
