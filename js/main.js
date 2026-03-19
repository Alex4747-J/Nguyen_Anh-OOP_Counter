<<<<<<< Updated upstream
import { Counter } from './modules/counter.js';
import { initSplitText } from './modules/splittext.js';

const counter1 = new Counter('#counter-container1');
=======
<<<<<<< Updated upstream
import { Counter } from './counter.js';

const counter1 = new Counter('#counter-container1');
const counter2 = new Counter('#counter-container2');
const counter3 = new Counter('#counter-container3');
const counter4 = new Counter('#counter-container4');
=======
import { Counter } from './modules/counter.js';
import { scrollAnimation } from './modules/scroll-ani.js';
import { initSplitText } from './modules/splittext.js';

const counter1 = new Counter('#counter-container1');
>>>>>>> Stashed changes
const counter2 = new Counter('#counter-container2', 4);
const counter3 = new Counter('#counter-container3', 10);
const counter4 = new Counter('#counter-container4', 20);

initSplitText();
<<<<<<< Updated upstream

=======
scrollAnimation();
>>>>>>> Stashed changes
>>>>>>> Stashed changes
