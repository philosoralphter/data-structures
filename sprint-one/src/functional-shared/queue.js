var makeQueue = function(){
  var queueInstance = {};
  queueInstance.queueSize = 0;
  queueInstance.storage = {};

  extend(queueInstance,queueMethods);

  return queueInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
}

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
}

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    var result = this.storage[0];
    for (var i = 0; i < this.queueSize; i++) {
      this.storage[i] = this.storage[i+1];
    }
    this.queueSize--;
    return result;
  }
}

function extend(to,from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
