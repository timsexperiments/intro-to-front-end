# Assignment: The Logic

Before we make our Profile Card interactive, we need to prove we can speak the language of logic.

In this assignment, you will write a script that performs calculations and logic operations. You will verify your work by looking at the browser Console.

## Setup

1.  Continue in your `profile-card-project` folder.
2.  Add a `<script>` tag to your HTML file. You can choose to:
    - **Create an external file:** Create `script.js` and link it with `<script src="script.js"></script>`.
    - **Write inline:** Write your code directly inside `<script> ... </script>` tags.
3.  **Placement:** Whichever method you choose, place your script at the very bottom of the `<body>` tag (right before `</body>`) so it runs _after_ the HTML has loaded.

## Instructions

Open `script.js` and write code to solve the following challenges.

### 1. Variables & Concatenation

- Create a variable named `firstName` and another named `lastName`.
- Create a variable named `fullName` that combines them using concatenation.
- Log `fullName` to the console.

### 2. Control Flow & Scoping

- Create a function named `testScope`.
- Inside the function, create a `if (true)` block.
- Inside that `if` block, declare a variable `x` and set it to `10`.
- Still inside the `if` block, log `x`.
- Try to log `x` _outside_ the `if` block (but inside the function).
- Call the function. Check the console. Do you see an error? Add a comment explaining what happens here.

### 3. Arrays & Loops

- Create an array named `hobbies` containing at least 3 strings.
- Write a loop that iterates over the array.
- Inside the loop, log: `"I enjoy [hobby]"`.

### 4. Objects & JSON

- Create an object named `user` with keys: `name` (String), `age` (Number), and `isStudent` (Boolean).
- Use `JSON.stringify()` to convert this object into a JSON string and store it in a variable named `jsonString`.
- Log `jsonString` to the console.
  - **Pro Tip:** If you want your JSON to look pretty in the console (readable with newlines), use this format:
    `JSON.stringify(user, null, 2)`. The `2` represents the number of spaces for indentation.

## Reflection

Add these answers to your project `README.md`:

```markdown
# Module 4 Reflection

1. In your own words, what is the difference between `null` and `undefined`?

2. What does it mean that JavaScript is "Single Threaded"?

3. Explain your choice of using `const` or `let` for each variable in the `script.js` file.

4. Why do we avoid using `var` in modern JavaScript?

5. What is the difference between "Interpreted" and "Compiled" languages? What is one benefit of interpreted?

6. What is the difference between a `for` loop and a `for...of` loop? When would you use one over the other?

7. Explain your choice of using `for`, `for...of`, `for...in`, `while` for your looping through the hobbies.
```

## Deliverable: Source Control

1.  **Commit:**
    Commit your changes with the message: `"04 JavaScript Fundamentals"`

2.  **Push:**
    Push your branch to GitHub.

3.  **Check:**
    Go to your Pull Request on GitHub. You should see the new commit added to the list.
    **Do not merge this Pull Request**
