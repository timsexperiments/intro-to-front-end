# 04. JavaScript Fundamentals

JavaScript is the programming language of the web. It runs in the browser, allowing us to add **behavior** to static HTML and CSS. This lesson introduces core language concepts before we start manipulating the DOM.

## Why Learn JavaScript?

- **Interactivity:** React to user actions (clicks, input, scroll).
- **Logic:** Perform calculations, make decisions, and process data.
- **Universality:** Runs in every modern browser and on the server (Node.js).

## 1. Variables & Data Types

### Variable Declarations

- `const` – Immutable binding (cannot be reassigned). Use for values that never change.
- `let` – Mutable binding (can be reassigned). Use for values that will change.
- `var` – Function‑scoped, hoisted. **Avoid** in modern code.

```javascript
const name = "Tim"; // never changes
let score = 0; // will be updated
```

### Primitive Types

- **String** – Textual data, e.g., `"Hello"`.
- **Number** – Integers or floating‑point, e.g., `42` or `3.14`.
- **Boolean** – `true` or `false`.
- **Null / Undefined** – Absence of a value.
- **BigInt** – Very large integers.

### Complex Types

- **Array** – Ordered list of values.

```javascript
const colors = ["red", "green", "blue"]; // index 0,1,2
```

- **Object** – Collection of key‑value pairs.

```javascript
const user = { name: "Tim", role: "Admin" };
```

- **Class** – Blueprint for creating objects (syntactic sugar over prototypes).

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const tim = new Person("Tim");
```

## 2. Operators & Expressions

- **Arithmetic:** `+ - * / % **`
- **Comparison:** `=== !== > < >= <=` (strict equality vs. loose).
- **Logical:** `&& || !`
- **Assignment:** `= += -= *= /=` etc.
- **Ternary:** `condition ? exprIfTrue : exprIfFalse`

```javascript
const isAdult = age >= 18 ? "yes" : "no";
```

## 3. Control Flow

### Conditional Statements

```javascript
if (score > 5) {
  console.log("Winner!");
} else if (score === 5) {
  console.log("Tie!");
} else {
  console.log("Try again.");
}
```

### Switch

```javascript
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}
```

### Loops

- **for** – Classic counted loop.
- **while** – Loop while a condition is true.
- **do…while** – Execute at least once.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let n = 0;
while (n < 3) {
  console.log(n++);
}
```

## 4. Functions

Functions are first‑class values – they can be stored in variables, passed as arguments, and returned.

```javascript
function add(a, b) {
  return a + b;
}
const multiply = (a, b) => a * b; // arrow function
```

### Higher‑Order Functions

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // map returns a new array
```

## 5. The Console

The **Console** tab in DevTools lets you inspect values, run snippets, and debug.

```javascript
console.log("Hello, world!");
console.table(users);
console.error("Something went wrong!");
```

Open it with **Ctrl+Shift+J** (Windows/Linux) or **Cmd+Option+J** (macOS).

## Assignment: The Console

A quick hands‑on exercise where you add a `<script>` tag to your `index.html` and write JavaScript that:

1. Logs your name.
2. Performs a simple arithmetic operation and logs the result.
3. Uses `console.table` to display an array of objects.
4. Experiments with `console.error` and `console.warn`.

See the full instructions in the [assignment README](./assignment/README.md).
