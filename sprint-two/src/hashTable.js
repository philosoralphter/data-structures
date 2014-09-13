var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};


HashTable.prototype.insert = function(key, value, ignore){

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
  if(ignore !== "ignore") {
    this.sizeCheck();
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
  return null;
};

HashTable.prototype.remove = function(key){
  var location = getIndexBelowMaxForKey(key, this._limit);
  var element = this._storage.get(location);

  if(element !== undefined) {
    for (var i=0; i<element.length; i++){
      if (element[i][0] === key){
        element.splice(i,1);
        this._storage.set(location, element)
        this._size--;
      }
    }
  }

  this.sizeCheck();
};

HashTable.prototype.changeSize = function(todo) {

  var tempStorage = this._storage;

  if (todo === 'double') {
    this._limit *= 2;
    this._storage = makeLimitedArray(this._limit);

  }else if (todo ==='halve'){
    this._limit /= 2;
    this._storage = makeLimitedArray(this._limit);
  }
    var that = this;

  var transfer = function(element, index, storage) {

      if (element !== undefined) {
        for (var i=0; i<element.length; i++) {
          var currentPair = element[i];
          that.insert(currentPair[0], currentPair[1], "ignore");
          that._size--;
      }
    }
  }
  tempStorage.each(transfer);
};

HashTable.prototype.sizeCheck = function(){

  if (this._size > this._limit-2) {
   this.changeSize('double');

  }else if (this._size < 4 && this._limit > 8){
    this.changeSize('halve');
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




