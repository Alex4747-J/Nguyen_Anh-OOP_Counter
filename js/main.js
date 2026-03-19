import { Counter } from './modules/counter.js';
import { initSplitText } from './modules/splittext.js';
import { scrollAnimation } from './modules/scroll-ani.js';

const counter1 = new Counter('#counter-container1');
const counter2 = new Counter('#counter-container2', 4);
const counter3 = new Counter('#counter-container3', 10);
const counter4 = new Counter('#counter-container4', 20);

initSplitText();
scrollAnimation();