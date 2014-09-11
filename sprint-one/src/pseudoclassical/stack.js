var Stack = function() {
  this.sizzle = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.sizzle++;
  this.storage[this.sizzle] = value;
}

Stack.prototype.pop = function() {
  if (this.sizzle >0) {
  var result = this.storage[this.sizzle];
  this.sizzle--;
  return result;
}
}

Stack.prototype.size = function() {
  return this.sizzle;
}



