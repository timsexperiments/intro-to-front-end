# Assignment: The Interaction

Finally, we bring the card to life.

In this assignment, you will connect your JavaScript logic to your HTML structure to create an interactive experience.

## Setup

1.  Open your `profile-card-project`.
2.  Modify your script from the previous assignment.
3.  Ensure your CSS has classes ready for any state changes you might need.

## Behavioral Requirements

You are the engineer. We are not going to tell you exactly which variables to create or which specific event listeners to use. Instead, we will describe the **Behavior** we expect the application to have.

Implement the following features:

### 1. The Follow Toggle

When the user clicks the primary "Contact/Follow" button:

- The text of the button should toggle between "Follow" and "Following".
- The visual style of the button should change to indicate the state (e.g., green for following, blue for follow).
- **Constraint:** You must use `classList` to manage the visual change, not direct `.style` manipulation.

### 2. The Counter Logic

Add a "Followers" count to your card (start it at a random number between 100 and 1000 — **_hint:_** `Math.floor(Math.random() * 9)` gives you a random whole number between 0 and 9).

- When the user follows, the count should increase by 1.
- When the user unfollows, the count should decrease by 1.

### 3. The "Edit Name" Feature

Add a new button (or icon) next to the user's name that says "Edit".

**Behavior A (Edit Mode):**

- When "Edit" is clicked, the user's name (text) should be replaced by an `<input>` field.
- The input field should automatically contain the current name.
- The "Edit" button text should change to "Save".

**Behavior B (Save Mode):**

- When "Save" is clicked, the `<input>` field should be replaced back by the Name text.
- The Name text must reflect whatever the user typed into the input.
- The button text should change back to "Edit".

### 4. Dark Mode Toggle

Add a button (somewhere on the card or page) that toggles the site between Light Mode and Dark Mode.

- **Behavior:** Clicking the button should toggle dark mode on the whole document
  - When the dark mode is enabled, the background colors and text colors of the card should invert or change to a dark theme.
  - If clicked when dark mode is enabled, the dark mode should be disabled.

## Reflection

Add these answers to your project `README.md`:

```markdown
# Module 5 Reflection

1. In the "Edit Name" feature, how did you get the text _out_ of the input field?

2. Describe the difference between `e.target` and `e.currentTarget`. (You might need to use Google/MDN for this one!)

3. Explain what "Event Bubbling" is in your own words. Why might it be useful?
```

## Deliverable: Source Control

1.  **Commit:**
    `"05 Interactive DOM"`

2.  **Push:**
    Push to GitHub.

3.  **Pull Request:**
    - Go to GitHub.
    - Open a **Pull Request** from your `module-01-foundations` branch into `main`.
    - Title it: **"Module 1 Complete: Front End Foundations"**.
    - In the description, write a brief summary of what you learned in this entire module.
    - **Wait for Review:** Do not merge yet. Wait for an instructor or peer to review your code.
    - **Merge:** Once approved, merge your Pull Request into the `main` branch.
