export class Counter {
    constructor(selector, step = 1) {
        this.count = 0;
        this.selector = selector;
        this.step = step;
        this.mount();
    }

    mount() {
        // Create the counter display and button elements
        const container = document.querySelector(this.selector);
        
        this.display = document.createElement('div');
        this.incrementBtn = document.createElement('button');
        this.decrementBtn = document.createElement('button');
        this.resetBtn = document.createElement('button');
        
        // Set button text
        this.incrementBtn.textContent = 'Increment';
        this.decrementBtn.textContent = 'Decrement';
        this.resetBtn.textContent = 'Reset';
        
        // Append display and button to the div
        container.appendChild(this.display);
        container.appendChild(this.incrementBtn);
        container.appendChild(this.decrementBtn);
        container.appendChild(this.resetBtn);
        
        // Add event listener to the button
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());
        this.resetBtn.addEventListener('click', () => this.reset());

        this.update();
    }

    //state methods
    increment() {
        this.count += this.step;
        this.update();
    }

    decrement() {
        if (this.count > 0) {           
        this.count -= this.step;
        this.update();
        }
    }

    reset() {
        this.count = 0;
        this.update();
    }

    //update UI
    update() {
    // Set initial display content
    this.display.textContent = `Count: ${this.count}`;
    this.decrementBtn.disabled = this.count === 0; // Disable decrement button if count is 0
    this.resetBtn.disabled = this.count === 0; // Disable reset button if count is 0
    
  }
}
