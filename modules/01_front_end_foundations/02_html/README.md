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

<div style="display: grid; gap: 20px; margin: 20px 0;">
  <div style="border: 2px solid #d32f2f; padding: 15px; background: #ffebee; border-radius: 8px;">
    <strong style="color: #d32f2f;">❌ Bad (Generic)</strong>
    <div class="blog-post" style="background: white; padding: 12px; margin-top: 10px; border-radius: 4px;">
      <div class="title" style="font-size: 1.2em; margin-bottom: 8px;">My Day</div>
      <div class="content">It was good.</div>
    </div>
    <p style="margin-top: 10px; font-size: 0.9em; color: #666;">Screen readers can't differentiate these divs from layout containers.</p>
  </div>

**Good (Semantic):**
The browser understands: "This is an Article. It has a Heading and a Paragraph."

```html
<article>
  <h2>My Day</h2>
  <p>It was good.</p>
</article>
```

  <div style="border: 2px solid #4CAF50; padding: 15px; background: #e8f5e9; border-radius: 8px;">
    <strong style="color: #4CAF50;">✅ Good (Semantic)</strong>
    <article style="background: white; padding: 12px; margin-top: 10px; border-radius: 4px;">
      <h2 style="margin: 0 0 8px 0;">My Day</h2>
      <p style="margin: 0;">It was good.</p>
    </article>
    <p style="margin-top: 10px; font-size: 0.9em; color: #666;">Browser & screen readers understand this is a self-contained article with a heading.</p>
  </div>
</div>

### Try It Yourself: Explore with DevTools

Want to see how screen readers actually interpret these elements? Chrome DevTools has built-in accessibility tools that show you exactly what assistive technologies "see."

**Step-by-Step Guide:**

1. **Open DevTools**

   - Right-click anywhere on this page and select "Inspect"
   - Or press `F12` (Windows/Linux) or `Cmd+Option+I` (Mac)

2. **Open the Accessibility Panel**

   - In DevTools, click the **Elements** tab
   - Look at the bottom panel and find the **Accessibility** tab
   - If you don't see it, click the `>>` arrows and select "Accessibility" from the dropdown

3. **Inspect the Generic Div Example**

   - Use the element picker (top-left of DevTools) or scroll in the Elements panel
   - Find the `<div class="blog-post">` element above
   - Look at the Accessibility panel - you'll see it's labeled as a generic "div" with no semantic meaning
   - Screen readers would announce this as just a container, not as a blog post

4. **Inspect the Semantic Article Example**

   - Now select the `<article>` element from the green box
   - In the Accessibility panel, notice it has a proper **role: "article"**
   - The `<h2>` inside is recognized as a **heading level 2**
   - Screen readers can navigate directly to this article and understand its structure!

5. **View the Accessibility Tree**
   - In the Accessibility panel, you can see the "Accessibility Tree"
   - This is exactly what a screen reader uses to navigate the page
   - Compare how the generic divs appear vs. the semantic elements
   - Semantic elements have clear roles, labels, and hierarchy

**What to Notice:**

- Generic `<div>` elements have role: "generic" - they mean nothing to assistive tech
- Semantic elements like `<article>`, `<nav>`, `<main>` have meaningful roles
- Headings (`<h1>` - `<h6>`) create a navigable outline for screen reader users
- Proper structure lets users jump between sections instantly instead of listening to everything

## 4. Text Content

We categorize these tags together because they denote the hierarchy and flow of reading. Browsers usually have default styles for these (like bolding headings), but their primary purpose is **Structure**, not style.

- `<h1>` - `<h6>`: Headings. `<h1>` is the main page title. You should typically have only one `<h1>` per page. `<h2>` are sections, `<h3>` are subsections.
- `<p>`: Paragraphs. The basic block of text.
- `<ul>` & `<ol>`: Unordered (bullet) and Ordered (numbered) lists. These must contain `<li>` (List Item) children.
- `<blockquote>`: A section that is quoted from another source.
- `<strong>` & `<em>`: These indicate importance (bold) and emphasis (italic).

**Why not just use a `<b>` tag?**
The `<b>` tag implies visual boldness. The `<strong>` tag implies _semantic importance_. Screen readers might change their tone of voice for `<strong>`, but not for `<b>`.

**Heading hierarchy from `<h1>` to `<h6>`:**

<div style="padding: 20px; background: #f5f5f5; border-radius: 8px; margin: 20px 0;">
  <h1 style="margin: 10px 0;">h1: Main Page Title</h1>
  <h2 style="margin: 10px 0;">h2: Major Section</h2>
  <h3 style="margin: 10px 0;">h3: Subsection</h3>
  <h4 style="margin: 10px 0;">h4: Sub-subsection</h4>
  <h5 style="margin: 10px 0;">h5: Minor Heading</h5>
  <h6 style="margin: 10px 0;">h6: Smallest Heading</h6>
  <p style="margin: 10px 0;">p: Regular paragraph text for comparison</p>
</div>

Note how the sizes decrease hierarchically, helping users visually understand content structure.

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

**Example:**

```html
<a href="https://timsexperiments.foo">TimsExperiments</a>
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; border-left: 4px solid #2196F3;">
  <a href="https://timsexperiments.foo" style="color: #2196F3; text-decoration: underline;">TimsExperiments</a>
</div>

### Inputs

Forms are the primary way users send data to us.

**Text Input:**

```html
<label for="username">Username:</label>
<input type="text" id="username" placeholder="Enter your username" />
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; margin-bottom: 20px;">
  <label for="demo-username" style="display: block; margin-bottom: 8px; font-weight: 500;">Username:</label>
  <input type="text" id="demo-username" placeholder="Enter your username" style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
</div>

**Password Input:**

```html
<label for="password">Password:</label>
<input type="password" id="password" placeholder="Enter password" />
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; margin-bottom: 20px;">
  <label for="demo-password" style="display: block; margin-bottom: 8px; font-weight: 500;">Password:</label>
  <input type="password" id="demo-password" placeholder="Enter password" style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
</div>

**Textarea (Multi-line):**

```html
<label for="bio">Bio:</label>
<textarea id="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; margin-bottom: 20px;">
  <label for="demo-bio" style="display: block; margin-bottom: 8px; font-weight: 500;">Bio:</label>
  <textarea id="demo-bio" rows="3" placeholder="Tell us about yourself..." style="width: 100%; max-width: 400px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
</div>

**Select (Dropdown):**

```html
<label for="role">Role:</label>
<select id="role">
  <option value="">Choose a role</option>
  <option value="student">Student</option>
  <option value="teacher">Teacher</option>
  <option value="admin">Admin</option>
</select>
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; margin-bottom: 20px;">
  <label for="demo-role" style="display: block; margin-bottom: 8px; font-weight: 500;">Role:</label>
  <select id="demo-role" style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
    <option value="">Choose a role</option>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
    <option value="admin">Admin</option>
  </select>
</div>

**Checkboxes:**

```html
<label> <input type="checkbox" /> I agree to the terms </label>
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px; margin-bottom: 20px;">
  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
    <input type="checkbox" /> I agree to the terms
  </label>
</div>

**Radio Buttons:**

```html
<label><input type="radio" name="plan" value="free" /> Free Plan</label>
<label><input type="radio" name="plan" value="pro" /> Pro Plan</label>
```

<div style="padding: 15px; background: #f5f5f5; border-radius: 4px;">
  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">
    <input type="radio" name="demo-plan" value="free" /> Free Plan
  </label>
  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
    <input type="radio" name="demo-plan" value="pro" /> Pro Plan
  </label>
</div>

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

<div style="padding: 20px; background: #f9f9f9; border-radius: 8px; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; background: white;">
    <thead>
      <tr style="background: #e0e0e0;">
        <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Item</th>
        <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px; border: 1px solid #ccc;">Apple</td>
        <td style="padding: 12px; border: 1px solid #ccc;">$1.00</td>
      </tr>
      <tr style="background: #f5f5f5;">
        <td style="padding: 12px; border: 1px solid #ccc;">Orange</td>
        <td style="padding: 12px; border: 1px solid #ccc;">$1.50</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background: #e8f5e9; font-weight: bold;">
        <td style="padding: 12px; border: 1px solid #ccc;">Total</td>
        <td style="padding: 12px; border: 1px solid #ccc;">$2.50</td>
      </tr>
    </tfoot>
  </table>
</div>

**A Note on History:**
In the early 2000s, before modern CSS existed, developers used `<table>` tags to layout entire websites (e.g., a row for the header, a column for the sidebar). **Do not do this.** Tables are strictly for data. Using them for layout is bad for accessibility and makes the code a nightmare to maintain.

## 8. The Generic Containers (Div & Span)

Sometimes, no semantic tag fits. You might just need a box to group elements for styling (e.g., a flexbox container) or to color a specific word red.

- `<div>` (Division): A block-level generic container. It stacks vertically.
- `<span>`: An inline generic container. It flows within text.

Use these only when a more specific semantic element (like `<section>` or `<button>`) doesn't apply.

### Example: Block vs. Inline

<div style="padding: 20px; background: #fff3e0; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0;">Div (Block-level) - Stacks Vertically</h4>
  <div style="background: #ff9800; color: white; padding: 10px; margin: 5px 0;">First Div</div>
  <div style="background: #ff9800; color: white; padding: 10px; margin: 5px 0;">Second Div</div>
  <div style="background: #ff9800; color: white; padding: 10px; margin: 5px 0;">Third Div</div>
  
  <h4 style="margin-top: 20px;">Span (Inline) - Flows with Text</h4>
  <p>
    This is a paragraph with 
    <span style="background: #4CAF50; color: white; padding: 4px 8px;">inline span</span> and 
    <span style="background: #2196F3; color: white; padding: 4px 8px;">another span</span> that flow within the text.
  </p>
</div>

## Assignment: Profile Structure

You will now build the raw HTML skeleton for a **User Profile Card** using the semantic elements we just discussed.

[-> Go to the Assignment](./assignment/README.md)
