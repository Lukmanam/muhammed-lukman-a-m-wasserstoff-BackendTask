class RoundRobinQueue {
    constructor() {
      this.items = [];
      this.currentIndex = 0;
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return 'Underflow';
      }
      const item = this.items[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      return item;
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
      return this.items[this.currentIndex];
    }
  }
  
  export default RoundRobinQueue;
  