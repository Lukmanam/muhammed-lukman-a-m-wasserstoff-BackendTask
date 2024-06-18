class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      const queueElement = { item, priority };
      let added = false;
  
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.items.push(queueElement);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return 'Underflow';
      }
      return this.items.shift().item;
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
      return this.items[0].item;
    }
  }
  
  export default PriorityQueue;
  