# Lewis Furniture Store Welcome Page

## 📖 Project Overview

This project is a simple interactive webpage built using **HTML, CSS, and JavaScript**.

The webpage displays a welcome message and includes a button that uses JavaScript to change the text on the page **without reloading the browser**.

---

## 🛠️ Technologies Used

- **HTML5** – Creates the structure and content of the webpage.
- **CSS3** – Controls the layout, colours, spacing, fonts, and button styling.
- **JavaScript** – Adds interactivity to the webpage.

---

## 📁 Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the webpage, including:

- Page heading
- Paragraphs
- Welcome button
- Links to the CSS and JavaScript files

The button has the ID:

```html
id="welcomeButton"
```

The paragraph that JavaScript changes has the ID:

```html
id="message"
```

---

### `style.css`

Contains the visual styling for the webpage.

It controls:

- Page background colour
- Font
- Main content card
- Heading colour
- Button appearance
- Button hover effect
- Spacing and layout
- Card shadow and rounded corners

The button changes colour when the mouse moves over it using:

```css
button:hover {
    background-color: #8f1a1f;
}
```

---

### `script.js`

Contains the JavaScript that makes the page interactive.

First, JavaScript finds the button:

```javascript
const welcomeButton = document.getElementById("welcomeButton");
```

It then finds the paragraph that needs to be changed:

```javascript
const message = document.getElementById("message");
```

An event listener waits for the user to click the button:

```javascript
welcomeButton.addEventListener("click", function () {
```

When the button is clicked, the paragraph is updated using:

```javascript
message.textContent =
    "JavaScript changed this message without reloading the page.";
```

A message is also written to the browser console:

```javascript
console.log("The page message was updated.");
```

---

## ▶️ How to Run the Project

1. Download or clone the project.
2. Make sure the following files are in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in a web browser.
4. Click **Show Welcome Message**.
5. The paragraph should change without the page reloading.

---

## 🧪 Expected Result

When the page first loads, it displays:

> Click the button to display a message.

After clicking **Show Welcome Message**, the text changes to:

> JavaScript changed this message without reloading the page.

The browser console will also display:

```text
The interactive page has loaded.
The page message was updated.
```

---

## 🎯 Learning Objectives

This project demonstrates the following beginner JavaScript concepts:

- Selecting HTML elements using `getElementById()`
- Using `const` variables
- Adding event listeners
- Responding to a button click
- Changing HTML content using `textContent`
- Using `console.log()` for debugging
- Connecting JavaScript to an HTML page
- Connecting CSS to an HTML page
- Creating a simple responsive webpage

---
