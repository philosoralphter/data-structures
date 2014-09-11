var Queue = function() {
  this.queueSize=0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.queueSize;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  if(this.queueSize >0){
  var result = this.storage[0];
  this.queueSize--;
  for (var i=0; i<this.queueSize; i++){
    this.storage[i] = this.storage[i+1];
  }
  return result;
  }
};
