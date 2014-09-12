var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var location = getIndexBelowMaxForKey(key, this._limit);
  var pair = [key, value];
  var element = this._storage.get(location);

  if (element === undefined){
    this._storage.set(location, [pair]);
  }else{
    element.push(pair);
    this._storage.set(location, element);
  }
};

HashTable.prototype.retrieve = function(key){
  var location = getIndexBelowMaxForKey(key, this._limit);
  var element = this._storage.get(location);

  for (var i=0; i<element.length; i++){
    if (element[i][0] === key){
      return element[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var location = getIndexBelowMaxForKey(key, this._limit);
  var element = this._storage.get(location);

  for (var i=0; i<element.length; i++){
    if (element[i][0] === key){
      element[i][1] = null;
      this._storage.set(location, element)
    }
  }
};

/*HashTable.prototype.double = function() {
  this._limit = this._limit*2;
  var tempstorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  tempstoraged.each(callback involves grabbing tempstorage and putting it into each)
}*/


/*
 * Complexity: What is the time complexity of the above functions?
 */




