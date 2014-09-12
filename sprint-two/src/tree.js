var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
  }
  else {
    for (var i=0; i<this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};







