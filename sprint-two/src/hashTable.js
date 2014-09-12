var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};


HashTable.prototype.insert = function(key, value){

  var location = getIndexBelowMaxForKey(key, this._limit);
  var pair = [key, value];
  var element = this._storage.get(location);

  if (element === undefined){
    this._storage.set(location, [pair]);
    this._size++;
  }else{
    element.push(pair);
    this._storage.set(location, element);
    this._size++;
  }


  this.sizeCheck();

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
      this.size--;
    }
  }
};

HashTable.prototype.changeSize = function(todo) {

  if (todo === 'double') {
    var tempStorage = this._storage;
    this._limit *= 2;
    this._storage = makeLimitedArray(this._limit);

  }else if (todo ==='halve'){
    var tempStorage = this._storage;
    this._limit /= 2;
    this._storage = makeLimitedArray(this._limit);
  }

  var transfer = function(element, index, storage) {
    for (var i=0; i<element.length; i++){
      var currentPair = element[i];
      this.insert(currentPair[0], currentPair[1]);
    }
  }

  tempStorage.each(transfer);
};


HashTable.prototype.sizeCheck = function(){
  console.log(this._size)

  if (this._size > this._limit) {
   console.log("doubling table size");
   this.changeSize('double');

  }else if (this._size < this._limit/2 && this._limit > 8){
    console.log("halving size");
    this.changeSize('halve');
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */




