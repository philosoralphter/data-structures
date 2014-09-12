var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this.keys = [];
};

HashTable.prototype.insert = function(key, value){
  var location = getIndexBelowMaxForKey(key, this._limit);
  var element = this._storage.get(location);\
  //If storage location occupied
  if(element) {
    //If occupied by an Array
    if(Array.isArray(element)) {
      //Is it an array we put there to handle collision
      var keyspointinghere = 0;
      for (var i=0; i< this.keys.lengths; i++) {
        if(location === getIndexBelowMaxForKey(this.keys[i], this._limit)) {
          keyspointinghere++;
        }
      }//END collision array check
      //If collision array, push new value
      if (keyspointinghere >= 2) {
        element.push(value);
        this.keys.push(key);
        return;
      }
    }//END if element is an array

    //SOMETHING IN LOCATION
    //Then we would need to implement a 2-d array
    //One array holds keys, Another array holds Values
    //If we want to retrieve a key, we would iterate over this array to find its value.p
  } else { //NOTHING IN LOCATION
  this._storage.set(location, value)
  }
};

HashTable.prototype.retrieve = function(key){
  var location = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(location);
};

HashTable.prototype.remove = function(key){
  var location = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(location, null);

  //Erases from our Key Array, the Key
  for (var i = 0; i< this.keys.length; i++) {
    if (key === this.keys[i]) {
      this.keys.splice(i,1);
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




