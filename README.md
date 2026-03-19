# OOP Counter

A class assignment for Multi Authoring 4. This project demonstrates object-oriented programming principles by building a reusable `Counter` JavaScript class.

## Overview

The `Counter` class is a self-contained component that mounts an interactive counter into any HTML container. It generates a count display and three buttons (Increment, Decrement, Reset), manages its own state, and disables Decrement and Reset when the count reaches zero.

Multiple counter instances can run on the same page independently, each with its own step value.

## Usage

### 1. Add a container in your HTML

```html
<div id="counter-container"></div>
```

### 2. Import and instantiate the class

```js
import { Counter } from './modules/counter.js';

const counter1 = new Counter('#counter-container1');       // default step: 1
const counter2 = new Counter('#counter-container2', 4);    // step: 4
const counter3 = new Counter('#counter-container3', 10);   // step: 10
const counter4 = new Counter('#counter-container4', 20);   // step: 20
```

## Dependencies

- [GSAP 3](https://gsap.com/) — animation library (loaded via CDN)
- [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/) — text animation plugin (loaded via CDN)
- [Google Fonts](https://fonts.google.com/) — Audiowide, Poppins

## Installation

 - Step 1: Download the zip or fork it on Github

 - Step 2: Drag it to your preferred code editor

 - Step 3: Marvel at the code