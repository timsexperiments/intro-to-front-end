# 02. HTML (The Structure)

HTML (HyperText Markup Language) is the backbone of every web page. It gives meaning to content and defines the **structure** that browsers render. Understanding _why_ we use particular elements is as important as knowing _how_ to write them.

## Why Care About the Right Elements?

- **Accessibility:** Screen readers rely on semantic tags to convey meaning to users with visual impairments.
- **SEO:** Search engines give higher weight to proper headings and sectioning elements.
- **Maintainability:** Clear structure makes it easier for developers (and designers) to understand and modify code.

## Document Skeleton

- `<html>` – The root element that wraps the entire document.
- `<head>` – Contains metadata such as the page title, linked scripts, stylesheet references, and SEO tags.
- `<body>` – Holds all the visible content presented to the user.

## Attributes – Adding Detail to Elements

Attributes are name‑value pairs that configure elements. Some are **global** (available on any element) like `id`, `class`, `style`, `title`, and `data-*`. Others are **specific** to certain tags:

- `href` for `<a>` links.
- `src` and `alt` for `<img>`.
- `type`, `placeholder`, `required` for `<input>`.
- `aria-*` attributes to enhance accessibility (e.g., `aria-label`).

## Semantic Structure – Use Meaningful Tags

Instead of generic `<div>` containers, choose elements that describe the purpose of the content. This improves accessibility and SEO.

- `<header>` – Introductory content, often a logo or site navigation.
- `<nav>` – Primary navigation links.
- `<main>` – The main content of the page (only one per page).
- `<section>` – Thematic grouping of content.
- `<article>` – Self‑contained composition (e.g., a blog post).
- `<aside>` – Tangential content like sidebars or pull quotes.
- `<footer>` – Footer information, copyright, links.
- `<div>` – Generic block‑level container when no semantic element fits.

> **Accessibility tip:** Prefer the semantic elements above over `<div>` whenever they describe the purpose of the content.

## Textual Content

- `<h1>`‑`<h6>` – Heading hierarchy; `<h1>` should appear once per page as the primary title.
- `<p>` – Paragraph of text.
- `<ul>` / `<ol>` + `<li>` – Unordered (bulleted) or ordered (numbered) lists.
- `<blockquote>` – Quoted text.
- `<strong>` – Strong importance (often rendered bold).
- `<em>` – Emphasis (often rendered italic).

**Why group them?** These tags convey _rich text_ semantics, allowing assistive technologies to announce the structure (e.g., headings, list items) correctly.

## Media

- `<img src="..." alt="...">` – Embeds an image; `alt` provides a text alternative for screen readers.
- `<video>` and `<audio>` – Embed video or audio; include `controls` attribute for user interaction.
- `<picture>` – Responsive image selection based on viewport or pixel density.

### Interaction & Forms

- `<button>` – Clickable button; can be styled and attached to JavaScript events.
- `<a href="...">` – Hyperlink; `href` is required to define the destination.
- `<input>` – Form control (text, checkbox, radio, etc.). Pair with `<label>` for accessibility:
  ```html
  <label for="email">Email:</label> <input id="email" type="email" />
  ```
- `<form>` – Groups form controls and defines submission behavior.

## Attributes – Adding Detail to Elements

Attributes are name‑value pairs that modify element behavior or provide extra information.

- Global attributes (available on all elements): `id`, `class`, `style`, `title`, `data-*`.
- Element‑specific attributes:
  - `href` for `<a>` links.
  - `src` and `alt` for `<img>`.
  - `type`, `placeholder`, `required` for `<input>`.
  - `aria-*` attributes to enhance accessibility (e.g., `aria-label`).

### Example Layout

Below is a simple page skeleton that demonstrates when to use semantic tags versus a generic `<div>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Profile Card</title>
  </head>
  <body>
    <header>
      <h1>My Portfolio</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Short bio...</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <article>
          <h3>Profile Card</h3>
          <!-- content goes here -->
        </article>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 My Name</p>
    </footer>
  </body>
</html>
```

In this example, `<header>`, `<nav>`, `<section>`, and `<article>` replace generic `<div>` elements, giving meaning to each region.

## Assignment: Profile Structure

A quick hands‑on exercise where you build the raw HTML skeleton for a **User Profile Card** using semantic elements. See the full instructions in the [assignment README](./assignment/README.md).
