# Assignment: The Inspector

In this assignment, you will modify a live website by interacting directly with the DOM tree.

## Goal

Understand that the rendered web is a mutable tree of objects that can be manipulated independently of the source files.

## Instructions

1.  Open [Google.com](https://www.google.com) in Chrome.
2.  Right-click the "Google Search" button and select **Inspect**.
3.  In the **Elements** panel, locate the text value inside the button element.
4.  Double-click the text and change it to something else (e.g., "DO NOT CLICK").
5.  Find the Google Logo `<img>` tag in the tree. Select it and press `Delete` on your keyboard.
6.  Locate the `<body>` tag. Use the **Styles** pane on the right to change the `background-color` to `black`.

## Observation

Note that the website functions as usual, but your local representation has changed. This demonstrates the power of the DOM as a runtime interface.
