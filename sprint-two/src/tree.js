var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else{
    //for loop on children
      //return eachChild.contains(target)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
