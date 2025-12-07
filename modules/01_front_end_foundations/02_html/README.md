# 02. HTML (The Structure)

HTML (HyperText Markup Language) is the backbone of every web page. While CSS handles the visuals and JavaScript handles the logic, HTML provides the **meaning**.

Writing good HTML is not just about making things appear on screen; it is about describing _what_ those things are to browsers, search engines, and assistive technologies (like screen readers).

## 1. The Document Skeleton

Every HTML page follows a standard structure that sets up the environment for the browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body></body>
</html>
```

- `<!DOCTYPE html>`: Tells the browser strictly to use the latest HTML5 standard.
- `<html>`: The root element. The `lang="en"` attribute is crucial for accessibility, telling screen readers which voice profile to use.
- `<head>`: The control center. It holds metadata, SEO descriptions, and links to CSS/JS files.
- `<body>`: The visible canvas.

## 2. Global Attributes

Before diving into specific tags, we need to understand **Attributes**. Attributes provide additional information about elements. They are written inside the opening tag as name-value pairs (`name="value"`).

While some attributes are specific to certain elements (like `src` for images), **Global Attributes** can be used on _any_ HTML element.

- `id`: A unique identifier for the element. No two elements on a page should have the same ID.
- `class`: Categorizes elements for styling (CSS) or selection (JavaScript). Multiple elements can share the same class.
- `style`: Applies inline CSS styles (generally avoided in professional engineering in favor of external CSS files).
- `hidden`: A boolean attribute that prevents the element from being displayed.
- `data-*`: Custom attributes used to store extra data for JavaScript (e.g., `data-user-id="123"`).

## 3. Semantic Structure

In the early days of the web, developers used generic `<div>` tags for everything. A header was just `<div class="header">`.

**Semantic HTML** means using tags that clearly describe their content. This is critical for **Accessibility**. A blind user navigating via a screen reader can jump directly to the `<main>` content or the `<nav>` menu, but they cannot jump to a specific `<div>`.

### The Hierarchy

- `<header>`: Introductory content, logos, or navigation aids.
- `<nav>`: The section of the page containing major navigation links.
- `<main>`: The dominant content of the `<body>`. There should be only one per page.
- `<article>`: A self-contained composition that makes sense on its own (e.g., a blog post, a product card, a comment).
- `<section>`: A thematic grouping of content, typically with a heading.
- `<aside>`: Content tangentially related to the main content (sidebars, callouts).
- `<footer>`: Copyright, contact info, and sitemap links.

### Comparison: Generic vs. Semantic

**Bad (Generic):**
The browser sees this as "Box inside a Box inside a Box."

```html
<div class="blog-post">
  <div class="title">My Day</div>
  <div class="content">It was good.</div>
</div>
```

**Good (Semantic):**
The browser understands: "This is an Article. It has a Heading and a Paragraph."

```html
<article>
  <h2>My Day</h2>
  <p>It was good.</p>
</article>
```

## 4. Text Content

We categorize these tags together because they denote the hierarchy and flow of reading. Browsers usually have default styles for these (like bolding headings), but their primary purpose is **Structure**, not style.

- `<h1>` - `<h6>`: Headings. `<h1>` is the main page title. You should typically have only one `<h1>` per page. `<h2>` are sections, `<h3>` are subsections.
- `<p>`: Paragraphs. The basic block of text.
- `<ul>` & `<ol>`: Unordered (bullet) and Ordered (numbered) lists. These must contain `<li>` (List Item) children.
- `<blockquote>`: A section that is quoted from another source.
- `<strong>` & `<em>`: These indicate importance (bold) and emphasis (italic).

**Why not just use a `<b>` tag?**
The `<b>` tag implies visual boldness. The `<strong>` tag implies _semantic importance_. Screen readers might change their tone of voice for `<strong>`, but not for `<b>`.

## 5. Media

The web is multimedia. These elements embed rich content into the document.

- `<img src="..." alt="...">`: Embeds an image.
  - **Crucial:** The `alt` (alternative text) attribute is mandatory for valid HTML. It describes the image if it fails to load or if the user cannot see it.
- `<figure>` & `<figcaption>`: Used to group an image (or chart/code snippet) with a caption that describes it.
- `<video>` & `<audio>`: Native players for media files.
  - They often require the `controls` attribute to give the user Play/Pause buttons.
  - They allow multiple `<source>` children to provide different file formats for different browsers.

```html
<video controls width="250">
  <source src="/media/movie.webm" type="video/webm" />
  <source src="/media/movie.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

## 6. Interaction & Forms

These elements create the interactive surface of the application.

### Anchors (Links)

- `<a>`: The Anchor tag creates hyperlinks. It requires the `href` attribute.

**Relative vs. Absolute Paths:**
When linking resources (like images or other pages), you have two options:

1.  **Absolute Path:** The full internet address. Used for external sites.
    - `href="https://google.com"`
2.  **Relative Path:** The path _relative_ to the current file. Used for internal files.
    - `href="./about.html"` (Look in the current folder for `about.html`)
    - `href="../images/logo.png"` (Go up one folder, then into images)

### Inputs

Forms are the primary way users send data to us.

- `<input>`: A self-closing tag. Its behavior changes drastically based on the `type` attribute:
  - `type="text"`: Standard one-line text.
  - `type="password"`: Hides characters.
  - `type="checkbox"`: Toggle selection.
  - `type="radio"`: Select one from a group.
- `<textarea>`: A multi-line text input (useful for bios or comments). Unlike `<input>`, it has a closing tag.
- `<select>`: A dropdown menu. It contains `<option>` children.

### Buttons

Buttons are used to trigger actions on the page.

- <button>: The standard clickable trigger for actions (like submitting forms or opening menus).
  - `type="submit"`: Submits the form (default inside a `<form>`).
  - `type="reset"`: Clears the form.
  - `type="button"`: Does nothing by default; usually connected to JavaScript.

**Button vs. Anchor:**

- Use `<a>` when navigating to a different URL.
- Use `<button>` when performing an action (like submitting, deleting, or opening a menu).

### The Label Relationship

The most common mistake beginners make is failing to label their inputs.

**Accessibility Requirement:**
You must link a label to its input using the `for` attribute and the input's `id`.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />

<label for="role">Role:</label>
<select id="role" name="role">
  <option value="student">Student</option>
  <option value="teacher">Teacher</option>
</select>
```

**Why do this?**

1.  **Hit Area:** Clicking the text "Username" will automatically focus the input box, helping users with motor impairments.
2.  **Screen Readers:** When the user focuses the input, the reader announces "Username," so they know what to type. Without this, it might just say "Text Edit."

## 7. Tables

Tables are used to display tabular data (rows and columns).

- `<table>`: The container for the table.
- `<tr>` (Table Row): Defines a row of cells (should be used in `<thead>`, `<tbody>`, and `<tfoot>`).
- `<th>` (Table Header): A header cell (bold and centered by default).
- `<td>` (Table Data): A standard data cell.
- `<thead>`: Groups the header content in a table.
- `<tbody>`: Groups the body content in a table.
- `<tfoot>`: Groups the footer content in a table.

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
    </tr>
    <tr>
      <td>Orange</td>
      <td>$1.50</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$2.50</td>
    </tr>
  </tfoot>
</table>
```

**A Note on History:**
In the early 2000s, before modern CSS existed, developers used `<table>` tags to layout entire websites (e.g., a row for the header, a column for the sidebar). **Do not do this.** Tables are strictly for data. Using them for layout is bad for accessibility and makes the code a nightmare to maintain.

## 8. The Generic Containers (Div & Span)

Sometimes, no semantic tag fits. You might just need a box to group elements for styling (e.g., a flexbox container) or to color a specific word red.

- `<div>` (Division): A block-level generic container. It stacks vertically.
- `<span>`: An inline generic container. It flows within text.

Use these only when a more specific semantic element (like `<section>` or `<button>`) doesn't apply.

## Assignment: Profile Structure

You will now build the raw HTML skeleton for a **User Profile Card** using the semantic elements we just discussed.

[-> Go to the Assignment](./assignment/README.md)
