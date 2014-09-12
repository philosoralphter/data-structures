var makeBinarySearchTree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  newTree.insert = function(value){
    //value already exists
    if(this.value === value) {return;}

    //value goes right
    if (value > this.value){
      if (this.right == null){
        this.right = makeBinarySearchTree(value);
        return;
      }else{
        //recurse
        this.right.insert(value);
      }

    //value goes left
    }else{
      if (this.left === null){
        this.left = makeBinarySearchTree(value);
        return;
      }else{
        //recurse
        this.left.insert(value);
      }
    }
  };


  newTree.contains = function(value){
    if (this.value === value){return true;}

    if (value > this.value){
      if (this.right !== null){
        if(this.right.contains (value)) {
          return true;
        }
      }
    } else{
      if(this.left !== null){
        if(this.left.contains (value)){
          return true;
        }
      }
    }

    return false;
  };

  newTree.depthFirstLog = function (callback){

     /* callback(this.value);
    if (this.left !== null) {this.left.depthFirstLog(callback);}
    if (this.right !== null) {this.right.depthFirstLog(callback);}
    */

    var recurse = function(tree){
      callback(tree.value);
      if(tree.left != null) recurse(tree.left);
      if(tree.right != null) recurse(tree.right);
      return;
    };
    recurse(this);
  };


  return newTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
