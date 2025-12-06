# 03. CSS (The Presentation)

CSS (Cascading Style Sheets) is the language that **styles** your HTML. It tells the browser _how_ elements should look: colors, spacing, layout, animation, and more. CSS lives in three places:

- **External stylesheet** linked via `<link>`
- **Embedded `<style>` tag** inside the HTML `<head>`
- **Inline `style` attribute** on an element (rarely used for production).

> **Why use CSS?** It separates _presentation_ from _structure_, making code easier to maintain, reuse, and collaborate on.

## Adding CSS to Your Project

Create a `style.css` file and link it in your HTML:

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

Alternatively, you can embed styles directly:

```html
<head>
  <style>
    /* CSS goes here */
  </style>
</head>
```

## Selectors & Specificity

Selectors target elements to apply styles.

- **Type selector** – `p {}` targets all `<p>` tags.
- **Class selector** – `.card {}` targets elements with `class="card"`.
- **ID selector** – `#header {}` targets the unique element with `id="header"`.
- **Attribute selector** – `input[type="text"] {}`.
- **Descendant selector** – `nav ul li {}` targets `<li>` inside `<ul>` inside `<nav>`.
- **Pseudo‑classes** – `a:hover`, `button:focus`, `li:first-child`.
- **Pseudo‑elements** – `p::first-line`, `div::after`.

### Specificity hierarchy (high → low):

1. Inline style (`style="..."`)
2. ID selector (`#id`)
3. Class / attribute / pseudo‑class (`.class`, `[type="text"]`, `:hover`)
4. Type selector (`div`)

## Core CSS Properties (expanded)

| Property                          | What it does                                                             | Example                                  |
| --------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| `color`                           | Text color                                                               | `color: #333;`                           |
| `background` / `background-color` | Background fill                                                          | `background-color: #f0f0f0;`             |
| `font-size`                       | Size of text                                                             | `font-size: 1rem;`                       |
| `font-weight`                     | Thickness of text                                                        | `font-weight: bold;`                     |
| `font-family`                     | Font family                                                              | `font-family: "Inter", sans-serif;`      |
| `text-align`                      | Horizontal alignment of inline text                                      | `text-align: center;`                    |
| `margin`                          | Space **outside** the element                                            | `margin: 16px;`                          |
| `padding`                         | Space **inside** the element                                             | `padding: 8px;`                          |
| `border`                          | Outline of the element                                                   | `border: 1px solid #ccc;`                |
| `border-radius`                   | Rounded corners                                                          | `border-radius: 8px;`                    |
| `width` / `height`                | Dimensions (can use `px`, `%`, `rem`, `vh/vw`)                           | `width: 300px; height: auto;`            |
| `display`                         | Layout mode (`block`, `inline`, `inline-block`, `flex`, `grid`, `none`)  | `display: flex;`                         |
| `position`                        | Positioning scheme (`static`, `relative`, `absolute`, `fixed`, `sticky`) | `position: absolute; top: 0;`            |
| `top`, `right`, `bottom`, `left`  | Offsets for positioned elements                                          | `top: 10px; left: 20px;`                 |
| `cursor`                          | Mouse cursor style                                                       | `cursor: pointer;`                       |
| `box-shadow`                      | Drop shadow effect                                                       | `box-shadow: 0 2px 4px rgba(0,0,0,0.1);` |
| `overflow`                        | Content clipping (`visible`, `hidden`, `scroll`, `auto`)                 | `overflow: hidden;`                      |

## Layout Systems (Flexbox & Grid)

### Flexbox (1‑dimensional)

```css
.container {
  display: flex; /* activate flex layout */
  flex-direction: row; /* row (default) or column */
  justify-content: center; /* main‑axis alignment */
  align-items: center; /* cross‑axis alignment */
  gap: 1rem; /* space between items */
}
```

### Grid (2‑dimensional)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

## Pseudo‑Classes & Interactivity

- `:hover` – when the mouse is over an element.
- `:focus` – when an element receives keyboard focus.
- `:active` – while an element is being activated (e.g., mouse down).
- `:disabled` – for disabled form controls.

## Assignment: The Skin

A quick hands‑on exercise where you take the HTML from the previous lesson and style it into a professional‑looking profile card. See the full instructions in the [assignment README](./assignment/README.md).
