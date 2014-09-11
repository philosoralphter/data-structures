var makeStack = function() {

  var stackInstance = Object.create(stackMethods);
  stackInstance.sizzle = 0;
  stackInstance.storage = {};

  return stackInstance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.sizzle] = value;
    this.sizzle++; },

    pop: function(){
      if (this.sizzle>0){
        var result = this.storage[this.sizzle-1];
        this.sizzle--;
        return result;
      }else{
        return null;
      }
    },

    size: function(){
      return this.sizzle;

    }
  }






