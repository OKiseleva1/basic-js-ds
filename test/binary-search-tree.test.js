const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  static insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        BinarySearchTree.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        BinarySearchTree.insertNode(node.right, newNode);
      }
    }
  }

  static searchTree(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchTree(node.left, data);
    } else if (data > node.data) {
      return this.searchTree(node.right, data);
    } else {
      return node;
    }
  }

  static searchMinNode(node) {
    if (node === null) {
      return null;
    } else if (node.left !== null) {
      return this.searchMinNode(node.left);
    }
    return node;
  }

  static searchMaxNode(node) {
    if (node === null) {
      return null;
    } else if (node.right !== null) {
      return this.searchMaxNode(node.right);
    }
    return node;
  }

  static removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = BinarySearchTree.searchMinNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      BinarySearchTree.insertNode(this.rootNode, newNode);
    }
  }

  has(data) {
    return BinarySearchTree.searchTree(this.rootNode, data) ? true : false;
  }

  find(data) {
    return BinarySearchTree.searchTree(this.rootNode, data);
  }

  remove(data) {
    return (this.root = BinarySearchTree.removeNode(this.rootNode, data));
  }

  min() {
    const minValue = BinarySearchTree.searchMinNode(this.rootNode);
    return minValue ? minValue.data : null;
  }

  max() {
    const maxValue = BinarySearchTree.searchMaxNode(this.rootNode);
    return maxValue ? maxValue.data : null;
  }
}

module.exports = {
  BinarySearchTree,
};
