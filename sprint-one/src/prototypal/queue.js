var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.queueSize = 0;
  queueInstance.storage = {};

  return queueInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    var result = this.storage[0];
    for (var i = 0; i < this.queueSize; i++) {
      this.storage[i] = this.storage[i+1];
    }
    this.queueSize--;
    return result;
  }
};
