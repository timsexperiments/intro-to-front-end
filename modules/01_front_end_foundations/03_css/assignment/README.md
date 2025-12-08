# Assignment: The Skin

Now we make it look good.

In this assignment, you are acting as both the **Designer** and the **Engineer**. You have a raw HTML skeleton, and you need to transform it into a polished component based on a visual specification.

## Setup

1.  Continue in your `profile-card-project` folder.
2.  Add your styles to the `index.html` file.

## Bonus: Recommended Resources

If you want to dive deeper or need a reference while working, we highly recommend checking out **W3Schools**. It's a fantastic resource for beginners.

- [W3Schools CSS Tutorial](https://www.w3schools.com/css/) - Great for basic properties.
- [W3Schools Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) - Visual guide to Flexbox.
- [W3Schools Grid](https://www.w3schools.com/css/css_grid.asp) - Visual guide to CSS Grid.

## The Design Spec

You are free to write the CSS however you like, but the final result should attempt to meet the following visual goals:

### 1. The Layout

- The card should be **centered** on the screen.
- The background of the page should be a color other than white (e.g., a light gray) so the card stands out.

### 2. The Card Component

- **Background:** _White_.
- **Shape:** _Rounded corners_ and a _shadow_ to give it depth.
- **Spacing:** The text should _not_ touch the edges of the card.
- **Alignment:** Content inside the card should be _center-aligned_.
- **Width:** It should look like an ID card, _not_ a full-width banner.

### 3. Visual Hierarchy

- **The Avatar:** Should be a _circle_.
- **The Name:** Should be the _largest_ text element.
- **The Role:** Should be distinct from the name (smaller or lighter color).
- **The Button:** The "Contact Me" link must **_not_** look like a standard blue hyperlink. It should look like a button (Background color, padding, no underline).

## Engineering Constraints

You are allowed to change the HTML and write whatever CSS you want. We want to see your creativity and problem-solving skills, but there is one rule:

1.  **Class Selectors:** You must use at least **one** class selector in your CSS (meaning you will need to add a `class` attribute to your HTML).

## Reflection

Add these answers to your project `README.md`:

```markdown
# Module 3 Reflection

1. How did you connect your CSS to your HTML (External, Internal, or Inline)? Why did you choose this method?

2. Explain the "Box Model" in your own words.

3. In the `body` styles, did you use `vh` (viewport height) or `%`? Why?

4. Why did we need to change the `display` property of the link (`<a>`) to make it look like a button?

5. Identify what the following CSS selectors target:

   - `h1`
   - `.card`
   - `#submit-button`
   - `div > p`
   - `ul li a`

6. Write a CSS selector to target all `<img>` elements that are inside a `div` with the class `gallery`.

7. Write a CSS selector to target all `<li>` elements inside a `<ul>` with the class `menu`.

8. Write a CSS selector to target all `h3` elements that are inside a `footer`.

9. Write a CSS selector to target all elements with both the class `alert` and the class `warning`.

10. Write a CSS selector to target _every_ element on the page.

11. Explain what the `:hover` pseudo-class does. Give an example of how you might use it on a button.

12. If you have a CSS rule for `p { color: red; }` and another for `.text { color: blue; }`, and your HTML is `<p class="text">Hello</p>`, what color will the text be? Why?

13. What is the difference between `justify-content` and `align-items` in Flexbox?

14. Describe the difference between `position: relative` and `position: absolute`.

15. Why do engineers often set `box-sizing: border-box` on all elements? What problem does it solve?

16. Write a complete CSS rule for a class named `button`. It should have a `background-color` of `blue`, `color` of `white`, and `padding` of `10px 20px`.

17. Write a complete CSS rule that targets all `h2` elements. Set their `font-size` to `24px` and remove their default margin (set `margin` to `0`).

18. Write a complete CSS rule for a `div` with the ID `container`. Set its `display` to `flex` and ensure its children are centered horizontally using `justify-content`.
```

## Deliverable: Source Control

1.  **Commit:**
    Run your git commands to add and commit your changes with the message:
    `"03 CSS (The Presentation)"`

2.  **Push:**
    Push your branch to GitHub.

3.  **Check:**
    Go to your Pull Request on GitHub. You should see the new commit added to the list. **Do not merge it yet.**
