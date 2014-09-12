var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item.toString()] = item;
};

setPrototype.contains = function(item){
  for (var key in this){
    if (key.toString() === item.toString()){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  delete this[item.toString()];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
