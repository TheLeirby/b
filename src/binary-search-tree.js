const { NotImplementedError } = require('../extensions/index.js'),

 { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {

  // return root node of the tree



  root() { 

    return this.treeRoot; 

  }



  // add node with data to the tree

  add(data) {    

    if (this.treeRoot == null) {

      this.treeRoot = new Node(data);

    } else {

      addData(this.treeRoot, new Node(data));

    } 

  }



  //* returns true if node with the data exists in the tree and false otherwise

  has(data) {

    let node = this.find(data);    

    return ! (node == null);

  }



  //*returns node with the data if node with the data exists in the tree and null otherwise

  find(data) {

    return findNodeData(this.treeRoot, data) 

  }



  //*removes node with the data from the tree if node with the data exists

  remove(data) {

    this.treeRoot = removeDate(this.treeRoot, data);    

  }

  

  //*returns minimal value stored in the tree (or null if tree has no nodes)

  min() {    

    return minNode(this.treeRoot).data;   

  }

  

  //*max — returns maximal value stored in the tree (or null if tree has no nodes)

  max() {             

    return maxNode(this.treeRoot).data;

  }



  constructor() { 

    this.treeRoot = null; 

  }

}



function findNodeData(node, data) {           

  if(node == null) return null;

    else if(data < node.data) {

      return findNodeData(node.left, data);

    } else if(data > node.data) {

      return findNodeData(node.right, data);

    } else {

      return node;

    }

}



function addData(parentNode, newNode) {

  if (newNode.data < parentNode.data){

    if (parentNode.left == null) {

      parentNode.left = newNode;

    } else {

      addData(parentNode.left, newNode);

    }

  } else if (parentNode.right == null) {

    parentNode.right = newNode;

  } else addData(parentNode.right, newNode)

  

}



function removeDate(node, key) {  

  if (node == null) {

    return null;

  } else if (key > node.data) {

    node.right = removeDate(node.right, key);

    return node;

  } else if (key < node.data) {

    node.left = removeDate(node.left, key);

    return node;

  } else {

    if (node.right == null && node.left === null) {

      node = null;

      return node;

    } else if (node.right == null) {

      node = node.left;

      return node;

    } else if (node.left == null) {

        node = node.right;

        return node;

      }  

  }

  node.data = minNode(node.right).data; 

  node.right = removeDate(node.right, minNode(node.right).data);

  return node;

}



function minNode(node) {

  if(node.left == null) {

    return node;

  } else {

    return minNode(node.left);

  }

}



function maxNode(node) {

  if(node.right == null) {

    return node;

  } else {

    return maxNode(node.right);

  }

} 

