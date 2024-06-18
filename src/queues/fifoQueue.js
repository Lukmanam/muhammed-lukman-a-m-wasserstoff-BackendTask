class FIFOQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return 'Underflow';
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      if (this.isEmpty()) {
        return 'No elements in Queue';
      }
      return this.items[0];
    }
  }
  
  export default FIFOQueue;
  