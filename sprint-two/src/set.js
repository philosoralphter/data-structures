var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for (var i=0; i<this._storage.length; i++){
    if (this._storage[i] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for (var i=0; i<this._storage.length; i++){
    if (this._storage[i] === item){
      this._storage.splice(i,1);
    }
  }
};

setPrototype.size = function(){
  return this._storage.length;
};

setPrototype.each = function(callback){
  for (var i=0; i<this._storage.length; i++){
    callback(this._storage[i]);
  }
}

setPrototype.retrieve = function() {
  return this._storage[0];
};

setPrototype.confirmEdge = function(fromNode,toNode) {
  for (var i=0; i<this._storage.length; i++) {
    if (this._storage[i].contains(fromNode) && this._storage[i].contains(toNode)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
