var Graph = function(){
  this._vertices = makeSet();
  this._edges = makeSet();
};

Graph.prototype.addNode = function(newNode, toNode){

  this._vertices.add(newNode);

  if (arguments.length > 1){
    this.addEdge(newNode, toNode);
  }else if (this._vertices.size() === 2){
    var soleNode = this._vertices.retrieveFirstItem();
    this.addEdge(newNode, soleNode);
  }

};

Graph.prototype.contains = function(node){
  return this._vertices.contains(node);
};

Graph.prototype.removeNode = function(node){
  this._vertices.remove(node);
  this.removeEdge(node);
};

Graph.prototype.getEdge = function(fromNode, toNode){

  if (this._edges.confirmEdge(fromNode, toNode)) {
    return true;
  } else {
    return false;
  }

};

Graph.prototype.addEdge = function(fromNode, toNode){
  var pair = makeSet();
  pair.add(fromNode);
  pair.add(toNode);

  this._edges.add(pair);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  var removeAllEdgesOnNode = function(elem){
    if (elem.contains(fromNode)){
      this._edges.remove(elem);
    }
  };

  var removeEdge = function(elem){
    if (elem.contains(fromNode) && elem.contains(toNode)){
      this._edges.remove(elem);
    }
  };

  if (arguments.length === 1){
    this._edges.each(removeAllEdgesOnNode.bind(this));
  }else{
    this._edges.each(removeEdge.bind(this));
    this.cleanUpNode(toNode);
    this.cleanUpNode(fromNode)
  }
};

Graph.prototype.cleanUpNode = function(node) {

  var adrift = true;

  //Loop through each Edge Pair
  this._edges.each(function(pair){
  //See if either edge pair contains that node
    if(pair.contains(node)){
      adrift = false;
    }
  }.bind(this));

    //At end of looping through all edge pairs, if no match, then delete that node
  if(adrift){
    this.removeNode(node);
  }
}


setPrototype.confirmEdge = function(fromNode,toNode) {
  for (var i=0; i<this._storage.length; i++) {
    if (this._storage[i].contains(fromNode) && this._storage[i].contains(toNode)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
