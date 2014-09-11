var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.storage = {};
  stackInstance.stackSize = 0;

  extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {};

stackMethods.pop = function() {
  if (this.stackSize>0){
    var result = this.storage[this.stackSize-1];
    this.stackSize--;
    return result;
  }else{
    return null;
  }
};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.size = function() {
  return this.stackSize;
};

function extend(to, from){
  for (var key in from){
    to[key] = from[key];
  }
}
