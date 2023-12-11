# Bootstrap Form Project

A simple web project template using Bootstrap 5, SASS, and Vanilla JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Customization](#customization)

---

## Introduction

This project provides a basic template for a web form using Bootstrap 5, styled with SASS, and enhanced with Vanilla JavaScript. It is designed to be a starting point for web development projects that require a responsive and visually appealing form.

---

## Project Structure

```plaintext
bootstrap-form-project
|-- src
|   |-- js
|   |   |-- main.js
|   |-- sass
|   |   |-- styles.scss
|   |-- index.html
|-- dist
|   |-- styles.css
|-- node_modules
|-- package.json
```

- src/js/main.js: Contains the main JavaScript file for form interactions.
- src/sass/styles.scss: Contains custom styles and SASS configuration.
- index.html: The main HTML file with the form structure.
- dist/styles.css: Compiled CSS file.
- node_modules: Dependencies folder.
- package.json: Configuration file for npm.


## Dependencies
- Bootstrap 5: Front-end framework for building responsive and mobile-first web pages.
- SASS: CSS preprocessor to enhance and organize your styles.
- Alpine.js: Lightweight JavaScript framework for DOM manipulation.

---

## Getting Started

Clone the repository:
```
git clone https://github.com/anminh113/DecagonTechnicalTest.git
```
Navigate to the project directory:
```
cd DecagonTechnicalTest
```
Install dependencies:
```
npm install
```
Build SASS:
```
npm run sass
```
Run the project:
```
npm start
```

Open your browser and go to http://localhost:8080 to view the form.

---

## Customization

- Modify src/sass/styles.scss for custom styling.
- Add form submission logic in src/js/main.js.
- Extend or modify the HTML structure in index.html as needed.
