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
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
