# 05. Interactive DOM (Manipulating the Page)

In this lesson we bridge JavaScript and the HTML you wrote earlier. You will learn how to **select** elements, **read** and **modify** their properties, and **react** to user actions with event listeners.

## 1. The HTMLelement Class & The DOM Tree

Every node you see in the Elements panel is an instance of `HTMLElement` (or a subclass). These objects expose properties and methods that let you inspect the live DOM tree:

- `element.children` – HTMLCollection of child elements.
- `element.parentElement` – The parent node.
- `element.firstElementChild` / `element.lastElementChild` – Direct children.
- `element.childElementCount` – Number of child elements.

> **Tip:** The DOM is a _live_ representation. Changing an element updates the page instantly.

## 2. Selecting Elements

You can grab elements using CSS‑style selectors:

```javascript
// By ID (fast, unique)
const card = document.getElementById("profile-card");

// By class (returns the first match)
const btn = document.querySelector(".follow-btn");

// All matches – returns a NodeList
const images = document.querySelectorAll(".profile-pic");
```

**Alternative inline attributes** (less recommended for maintainability):

```html
<button onclick="toggleFollow()">Follow</button>
```

These call a global function when clicked.

## 3. Reading & Manipulating Content

### Text & HTML

- `element.innerText` – Visible text (ignores hidden markup).
- `element.textContent` – All text, including hidden.
- `element.innerHTML` – Raw HTML string (use with caution – can introduce XSS).

```javascript
title.innerText = "Senior Designer"; // safe
profile.innerHTML = "<p>New <strong>bio</strong></p>"; // be careful!
```

### Attributes

- `element.getAttribute('src')`
- `element.setAttribute('alt', 'Profile picture')`
- `element.removeAttribute('disabled')`

### Classes & Styles

- `element.classList.add('active')`
- `element.classList.toggle('active')`
- `element.classList.remove('active')`
- `element.style.property = 'value'` (inline style, usually replace with a CSS class).

## 4. Event Listeners

The most common way to react to user actions is `addEventListener`:

```javascript
btn.addEventListener("click", function (e) {
  console.log("Button clicked");
  // toggle follow state
  if (btn.innerText === "Follow") {
    btn.innerText = "Following";
    btn.classList.add("following");
  } else {
    btn.innerText = "Follow";
    btn.classList.remove("following");
  }
});
```

### Common Event Types

- `click` – Mouse click or tap.
- `input` – Value change in `<input>`/`<textarea>`.
- `change` – When a form control loses focus after a change.
- `submit` – Form submission.
- `keydown` / `keyup` – Keyboard presses.
- `mouseenter` / `mouseleave` – Hover enter/exit.
- `focus` / `blur` – Element gains/loses focus.

### Event Object

The callback receives an `Event` object (`e`). Useful properties:

- `e.target` – The element that triggered the event.
- `e.currentTarget` – The element the listener is attached to.
- `e.preventDefault()` – Stop default browser behavior (e.g., form submit).
- `e.stopPropagation()` – Prevent bubbling to parent elements.

## 5. Other Useful DOM Manipulations

- **Creating elements:** `document.createElement('div')`.
- **Appending:** `parent.appendChild(child)` or `parent.append(child)`.
- **Removing:** `element.remove()`.
- **Cloning:** `element.cloneNode(true)` (deep clone).
- **Traversing:** `element.closest('section')` finds the nearest ancestor matching a selector.

## Assignment: Interactive Profile Card

A hands‑on project that builds on the previous lessons:

1. Add a **Follow** button to your profile card.
2. When the button is clicked, toggle the text between **Follow** and **Following** and change its background color using a CSS class.
3. Use `addEventListener` (not inline `onclick`).
4. Bonus: Add a second button that, when clicked, removes the profile picture from the DOM.
5. Document your code with comments explaining each step.

Full instructions are in the [assignment README](./assignment/README.md).
