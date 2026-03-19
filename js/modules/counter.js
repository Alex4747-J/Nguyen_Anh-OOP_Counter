export class Counter {
    constructor(selector) {
        this.count = 0;
        this.selector = selector;
        this.mount();
    }

    mount() {
        // Create the counter display and button elements
        const container = document.querySelector(this.selector);
        
        this.display = document.createElement('div');
        this.button = document.createElement('button');
        
        // Set button text
        this.button.textContent = 'Increment';
        
        // Append display and button to the div
        container.appendChild(this.display);
        container.appendChild(this.button);
        
        // Add event listener to the button
        this.button.addEventListener('click', () => this.increment());

        this.update();
    }

    //state methods
    increment() {
        this.count++;
        this.update();
    }

    //update UI
    update() {
    // Set initial display content
    this.display.textContent = `Count: ${this.count}`;

    
  }
}


// You can't just call increment() directly in addEventListener because it would lose the proper context for this. The event listener needs a function to be executed when the event happens, and that function is where you handle the event and call methods like increment().

// Using an arrow function inside the event listener helps ensure that the this inside increment() points to the Counter instance, not the button.

//It would call the increment() method, but it wouldn’t have the correct context for this