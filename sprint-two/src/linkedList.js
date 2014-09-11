var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var aNode = makeNode(value);

    if (!this.head) {
      this.head = aNode;
      this.tail = aNode;
    } else {
      this.tail.next = aNode;
      this.tail = aNode;
    }
  };

  list.removeHead = function(){
    var result = this.head;
    this.head = this.head.next;
    return result.value;
  };

  list.contains = function(target){
    var current = this.head;

    while (current != null) {
      if (current.value == target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  return list;

};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
