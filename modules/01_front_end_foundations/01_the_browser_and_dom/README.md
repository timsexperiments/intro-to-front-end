# 01. The Browser & The DOM

Before we write code, we must understand where it lives.

## The Browser as a Runtime

The browser is not just a document viewer; it is a powerful application platform. It parses HTML, applies styling (CSS), and executes JavaScript. **Why use the Developer Console?**

- Debug JavaScript errors instantly.
- Inspect and modify the live DOM without changing source files.
- Profile performance and network activity.
- Experiment with CSS tweaks in real time.

### The Elements Panel

The Elements tab is the heart of the DevTools. It shows the live DOM tree, lets you edit HTML attributes, change CSS styles, and see the results instantly. You can:

- Edit text nodes directly.
- Add, remove, or reorder elements.
- Toggle CSS classes to see visual changes.
- View computed styles and box model details.

> _Tip:_ Use the **Search** (`Ctrl+F` — `Cmd+F` on macOS) in the Elements panel to find elements by tag, class, or ID.

## The DOM (Document Object Model)

When the browser loads a page, it converts your HTML into a tree of objects called the DOM.

- **HTML** is the instruction booklet (list of bricks and steps).
- **DOM** is the built Lego model (the live structure you can pick up, modify, or rebuild).

### Inspecting the DOM

1. Open Google Chrome.
2. Right‑click any element on a page.
3. Select **Inspect**.

You will see the **Elements Panel** displaying the live DOM. Changes you make here are temporary and exist only in the browser's memory.

## Assignment: The Inspector

A quick hands‑on exercise where you explore the Elements panel, edit text, remove an image, and capture a screenshot. See the full instructions in the [assignment README](./assignment/README.md).
