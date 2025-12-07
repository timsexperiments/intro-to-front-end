# 04. JavaScript Fundamentals

JavaScript (JS) is the programming language of the web. While HTML defines structure and CSS handles appearance, JavaScript provides the **behavior**.

In this lesson, we are stepping away from the visual DOM. We will write pure logic that runs in the browser's "Console."

## 1. The Runtime: Interpreted vs. Compiled

Before we write code, you need to understand _how_ the computer reads it.

In languages like **Java** or **C++**, code is **Compiled**. You write the code, run a "Compiler" to check for errors and translate it into machine code, and _then_ you run the resulting file. If you miss a semicolon, the compiler stops you before the program ever starts.

**JavaScript is Interpreted.**
The browser reads your code line-by-line and executes it immediately. There is no "Compile" step.

- **The Benefit:** It is flexible. You can open the Console, type `1 + 1`, and get `2` instantly without setting up a file. It also tries to be helpful; if you forget a semicolon, the engine (Automatic Semicolon Insertion) will often guess where it goes and add it for you.
- **The Trade-off:** Safety. Because there is no compiler checking your work beforehand, you often won't know you have a syntax error or a typo until the program actually runs and crashes on that specific line.

### Try it: The Console (REPL)

Every browser has a built-in JavaScript environment called the **Console**. This is a REPL (Read-Eval-Print Loop). You type code, press Enter, and the browser runs it immediately.

1.  Open Chrome.
2.  Press `F12` (or Right-click -> Inspect).
3.  Click the **Console** tab.
4.  Type this and press Enter:
    ```javascript
    console.log("Hello, World!");
    ```

**`console.log()`** is your most important tool. It prints data to this panel so you can see what your code is doing.

### The Single-Threaded Model

JavaScript is **Single-Threaded**. This means it has one "Event Loop" and can only do **one thing at a time**. It reads one line, executes it, and moves to the next. It cannot process two functions simultaneously. This simplifies your mental model: you rarely have to worry about two parts of your code fighting over the same variable at the exact same time.

## 2. Comments

Code is read by humans more often than machines. Comments allow you to leave notes or disable code without deleting it. The browser completely ignores these lines.

```javascript
// This is a single-line comment.

/*
   This is a multi-line comment.
   It spans multiple lines.
   Useful for long explanations.
*/
```

## 3. Variables & Scoping

Variables are labeled boxes where we store data. To understand variables, we must understand **Scope**—which is simply "where a variable is visible."

A **Block Scope** is created anytime you see curly braces `{ ... }` (like in an `if` statement or a loop).

### `let` & `const` (Block Scoped)

These are the modern standard. They respect the boundaries of the block they are defined in.

```javascript
{
  const secret = "I am hidden";
  console.log(secret); // Works!
}
// console.log(secret); // ERROR! 'secret' is not defined here.
```

- **`const`**: Immutable binding. You cannot reassign it (`x = 5`). Use this by default.
- **`let`**: Mutable. Use this only if you know the value needs to change (like a counter).

### `var` (Function Scoped)

This is the old way to declare variables. **Avoid using `var`.**
It ignores block scopes (like `if` statements) and only stays contained if it's inside a **Function**. This leads to unpredictable bugs where variables "leak" out of places where you thought they were private.

```javascript
if (true) {
  var leaked = "I escaped!";
}
console.log(leaked); // Works (unfortunately). 'let' would have thrown an error.
```

## 4. Data Types & Operations

JavaScript has a few primitive types.

- **Number**: Integers (`5`) and decimals (`5.5`) are the same type.
  - Math: `+`, `-`, `*`, `/`, `%` (Remainder/Modulo).
- **String**: Text. Wrapped in quotes (`""`, `''`) or backticks (`` ` ``).
  - **Concatenation:** Joining strings.
    ```javascript
    const greet = "Hello " + "World"; // "Hello World"
    const name = "Tim";
    const template = `Hello ${name}`; // Template Literal (Recommended)
    ```
  - **Indexing:** You can access characters like an array.
    ```javascript
    console.log("Apple"[0]); // "A"
    ```
- **Boolean**: `true` or `false`.
- **Undefined vs. Null**:
  - `undefined`: The default "empty" state. If you declare `let x;`, `x` is `undefined`. It means "value is unset."
  - `null`: A value that represents "nothing." You assume `x = null` to explicitly say "I cleared this variable."

## 5. Arrays & Loops

### Arrays (Lists)

An ordered list of items. Accessed by index (0-based).

```javascript
const colors = ["Red", "Green", "Blue"];

// Accessing items by index
console.log(colors[0]); // "Red" (First item is 0)
console.log(colors[1]); // "Green"

colors.push("Yellow"); // Adds to the end
```

**Note:** Strings work the same way! You can access characters in a string using the same `[0]` index syntax.

### Looping

We often need to run code multiple times.

**1. The Standard For Loop**
Best when you need to count numbers or use the index.

```javascript
// for (assignment; condition; increment)
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

**2. The `for...of` Loop (Arrays)**
Best for reading every item in a list. Cleaner syntax.

```javascript
for (const color of colors) {
  console.log(color);
}
```

## 6. Objects & JSON

Objects are collections of **Key-Value** pairs. They are the most common structure in engineering.

```javascript
const user = {
  firstName: "Jane",
  age: 30,
};
// Accessing data
console.log(user.firstName); // Dot notation
console.log(user["age"]); // Bracket notation
```

### Looping Objects (`for...in`)

To loop through the _keys_ of an object:

```javascript
for (const key in user) {
  console.log(key); // "firstName", then "age"
  console.log(user[key]); // "Jane", then 30
}
```

### JSON (The Universal Language)

**JSON (JavaScript Object Notation)** is a standard format for sharing data. It looks almost identical to a JavaScript Object, but keys must be wrapped in double quotes. It is used by almost every language (Python, Java, Go) to send data over the web.

- `JSON.stringify(data)`: Converts a JS Object into a JSON String (for sending to a server).
- `JSON.parse(string)`: Converts a JSON String back into a JS Object (for using in your code).

## 7. Operators

- **Math**: `+`, `-`, `*`, `/`, `%` (Remainder).
- **Comparison**:
  - `===` (Strict Equal): Checks value AND type. `5 === "5"` is `false`. **You typically want to use this.**
  - `==` (Loose Equal): Converts types. `5 == "5"` is `true`. **You typically want to avoid this.**
  - `!==` / `!=` (Not Equal): Checks that values are not equal. `!==` compares both the value and type. `!=` only compares the value.
  - `>`, `<`, `>=`.
- **Logical**:
  - `&&` (AND): Both must be true.
  - `||` (OR): At least one must be true.
  - `!` (NOT): Flips true to false.

## 8. Control Flow

Control flow determines which lines of code run.

### If / Else

The code inside the `(...)` must evaluate to `true` or `false`. If `true`, the **Scope** created by `{ ... }` is executed.

```javascript
const age = 20;

if (age >= 18) {
  // This block runs
  console.log("Adult");
} else if (age >= 13) {
  // This block is skipped
  console.log("Teenager");
} else {
  // This block is skipped
  console.log("Child");
}

if (age > 20) {
  // This block also runs
  console.log("Legal to drink");
}
```

### Switch

Useful for comparing one variable against many specific values.

```javascript
switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit Access");
    break;
  default:
    console.log("No Access");
}
```

### While Loop

Runs code as long as a condition is `true`. Be careful with these—if the condition never becomes `false`, you'll create an infinite loop and crash your browser!

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++; // Important: update the condition variable!
}
```

## 9. Functions

A Function is a reusable block of code that performs a specific task. You can think of it as a machine:

1.  **Input (Arguments):** Data you feed in.
2.  **Processing (Body):** The logic inside `{ ... }`.
3.  **Output (Return):** The result the machine spits out.

Functions are "First-Class Citizens," meaning they are values. You can store them in variables just like strings and numbers.

### Declaration

```javascript
function add(a, b) {
  const sum = a + b; // Statement
  return sum; // Return value
}
```

### Arrow Functions

This is simply an alternative syntax to write functions. It is widely used in modern codebases, but functionally very similar to the above.

```javascript
const subtract = (a, b) => {
  return a - b;
};

// Implicit return (if it's one line)
const multiply = (a, b) => a * b;
```

## 10. The Script Tag

To run JavaScript in a website, we use the HTML `<script>` tag. There are two ways to use it:

### 1. Inline Script

You can write JavaScript code directly inside the tag. This is useful for small snippets.

```html
<script>
  console.log("I run immediately!");
  alert("Hello from inside the HTML!");
</script>
```

### 2. External Script

For larger projects, you load an external file using the `src` attribute.

```html
<script src="script.js"></script>
```

**Important:** In both cases, the browser executes the code **immediately** as soon as it encounters the tag. This is why we often put `<script>` tags at the very bottom of the `<body>`, so the HTML content loads first.

## Assignment: The Logic

We are going to take a break from the Profile Card to write some pure logic script.

[-> Go to the Assignment](./assignment/README.md)
