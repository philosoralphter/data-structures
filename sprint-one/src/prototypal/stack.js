var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(makeStack.prototype);
  stackInstance.sizzle = 0;
  stackInstance.storage ={};

  return stackInstance;
};

makeStack.prototype.push = function(value){
  this.storage[this.sizzle] = value;
  this.sizzle++;
};

makeStack.prototype.pop = function(){
  if (this.sizzle>0){
    var result = this.storage[this.sizzle-1];
    this.sizzle--;
    return result;
  }else{
    return null;
  }
};

makeStack.prototype.size = function(){
  return this.sizzle;
};




