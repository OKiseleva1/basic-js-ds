const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
    this.array = [];
  }

  static createQueue(array) {
    return array.reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    this.array.unshift(value);
    this.queue = Queue.createQueue(this.array);
  }

  dequeue() {
    const elem = this.array.pop();
    this.queue = Queue.createQueue(this.array);
    return elem;
  }
}

module.exports = {
  Queue,
};
