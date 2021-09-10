var directed = false;
let matrix2;
function checkDirection() {
  var switchE = document.getElementById("directedSwitch");
  if (switchE.checked) {
    directed = true;
    console.log("Usng Directed Edges");
  } else {
    directed = false;
    console.log("Using Undirected Edges");
  }
}
var directedSwitch = document.getElementById("directedSwitch");
directedSwitch.addEventListener('change', function() {
  checkDirection();
});
function addConnections(elem, index) {
  elem.connections = network.getConnectedNodes(index);
}
var container = document.getElementById("mynetwork");
var nodes = new vis.DataSet([
  { id: 'A', label: "A" },
  { id: 'B', label: "B" },
  { id: 'C', label: "C" },
  { id: 'D', label: "D" },
  { id: 'E', label: "E" },
  { id: 'F', label: "F" }
]);
var edges = new vis.DataSet([
  { from: 'A', to: 'F', arrows: 'to: {enabled: true}}', id:'A->F'},
  { from: 'A', to: 'E', arrows: 'to: {enabled: true}}', id:'A->E'},
  { from: 'B', to: 'A', arrows: 'to: {enabled: true}}', id:'B->A'},
  { from: 'B', to: 'E', arrows: 'to: {enabled: true}}', id:'B->E'},
  { from: 'B', to: 'D', arrows: 'to: {enabled: true}}', id:'B->D'},
  { from: 'C', to: 'B', arrows: 'to: {enabled: true}}', id:'C->B'},
  { from: 'D', to: 'C', arrows: 'to: {enabled: true}}', id:'D->C'},
  { from: 'E', to: 'C', arrows: 'to: {enabled: true}}', id:'E->C'},
  { from: 'F', to: 'B', arrows: 'to: {enabled: true}}', id:'F->B'}
]);
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  physics: {
    enabled: false,
  },
  manipulation: {
    enabled: true,
    initiallyActive: true,
    addNode: function(nodeData,callback){
      let nodeName = prompt("Name this node:");
      if(nodeName == null || nodeName == "") {return ;} 
      else{
        if(alreadyPresent(nodeName)){alert("A node labeled "+nodeName+" already exists. Choose a different name."); return;}
        nodeData.label = nodeName;
        nodeData.id = nodeName;
      }
      callback(nodeData);
    },
    addEdge: function(edgeData,callback){
      if(directed==true){
        edgeData.arrows= "to: {enabled: true}";
        edgeData.id = edgeData.from+"->"+edgeData.to;
      }
      else{
        edgeData.id = edgeData.from+"--"+edgeData.to;
      }
      console.log(edgeData);
      if (edgeData.from === edgeData.to) {
        var r = confirm("Do you want to connect the node to itself?");
        if (r === true) {
          callback(edgeData);
        }
      }
      else {
        callback(edgeData);      
      }
    },
    editNode: function(nodeData,callback){
      let nodeName = prompt("Rename this node:", nodeData.label);
      if(nodeName == null || nodeName == "") { } 
      else {
      if(alreadyPresent(nodeName)){alert("A node labeled "+nodeName+" already exists. Choose a different name."); return;}
      nodeData.label = nodeName;
      nodeData.id = nodeName;
      }
      callback(nodeData);
    },
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle:{
    }
  }
};
var network = new vis.Network(container, data, options);

function alreadyPresent(str){
  var nodes = network.getPositions();
  var node_names = Object.keys(nodes);
  return node_names.includes(str);
}

function exportGraph(){
  var nodes = network.getPositions();
  var node_names = Object.keys(nodes);
  var num_nodes = node_names.length;
  var matrix = [...Array(num_nodes)].map(x=>Array(num_nodes).fill(0));
  let edges=[];
  for(let i=0;i<node_names.length;++i){
    edges=edges.concat(network.getConnectedEdges(node_names[i]));
  }
  let pos=0;
  let beg="";
  let end="";
  for(let i=0;i<edges.length;++i){
    pos=edges[i].search('->');
    if(pos>0){
      beg=edges[i].slice(0,pos);
      end=edges[i].slice(pos+2);
      matrix[node_names.indexOf(beg)][node_names.indexOf(end)]=1;
    }
    else{
      pos=edges[i].search('--');
      if(pos>0){
        beg=edges[i].slice(0,pos);
        end=edges[i].slice(pos+2);
        matrix[node_names.indexOf(beg)][node_names.indexOf(end)]=1;
        matrix[node_names.indexOf(end)][node_names.indexOf(beg)]=1;
      }
      else{
        console.log("Error");
      }
    }
  }
  var data = {
    'num_nodes': num_nodes,
    'node_names': node_names,
    'matrix': matrix
  };
  matrix2=data;
  console.log(matrix2);
}

function deleteGraph(){
  var nodes = network.getPositions();
  var node_names = Object.keys(nodes);
  let edges=[];
  for(let i=0;i<node_names.length;++i){
    edges=edges.concat(network.getConnectedEdges(node_names[i]));
  }
  network.selectNodes(node_names);
  network.deleteSelected();
  network.unselectAll();
  network.selectEdges(edges);
  network.deleteSelected();
  network.unselectAll();
  network.redraw();
}

var submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener('click', function() {
  exportGraph();
  processMatrix(matrix2);
});
var clearBtn = document.getElementById("clearbtn");
clearBtn.addEventListener('click', function() {
  deleteGraph();
});







class Stack{
  constructor(){this.items=[];}
  push(element){this.items.push(element);}
  pop(){
    if(this.items.length==0)
      return "Underflow";
    return this.items.pop();
  }
  peek(){return this.items[this.items.length - 1];}
  inStack(element){
    for(let i=0;i<this.items.length;++i){
      if(this.items[i]==element)
        return i;
    }
    return -1;
  }
  isEmpty(){return this.items.length == 0;}
}

class Queue{
  constructor(){this.items=[];}
  enqueue(element){this.items.push(element);}
  dequeue(){
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
  }
  front(){
    if(this.isEmpty())
        return "Underflow";
    return this.items[0];
  }
  isEmpty(){return this.items.length == 0;}
}

function minDistance(matrix,dist,sptSet){
  let min = 99999;
  let min_index = -1;
  for(let v=0;v<matrix.num_nodes;++v){
    if(sptSet[v]==false&&dist[v]<=min){
      min=dist[v];
      min_index=v;
    }
  }
  return min_index;
}

function printPath(currentVertex,parents){
  console.log("printPath called for "+currentVertex);
  if(currentVertex==-1 || currentVertex===undefined) return;
  printPath(parents[currentVertex], parents);
  //console.log("path "+currentVertex+" ");
  path+=matrix2.node_names[currentVertex]+" -> ";
}

function djistra(matrix,start,end){
  let dist=new Array(matrix.num_nodes);
  let sptSet=new Array(matrix.num_nodes);
  for(let i=0;i<matrix.num_nodes;++i){
    dist[i]=99999;
    sptSet[i]=false;
  }
  dist[start]=0;
  let parents = new Array(matrix.num_nodes);
  parents[start]=-1;
  for(let count=0;count<matrix.num_nodes-1;++count){
    let u=minDistance(matrix,dist,sptSet);
    sptSet[u]=true;
    for(let v=0;v<matrix.num_nodes;++v){
      if(!sptSet[v] && matrix.matrix[u][v]!=0 && dist[u]!=99999 && dist[u]+matrix.matrix[u][v]<dist[v]){
        dist[v]=dist[u]+matrix.matrix[u][v];
        parents[v]=u;
      }
    }
  }
  path="";
  printPath(end, parents);
  //for(let i=0;i<matrix.num_nodes;++i)
    //console.log(matrix.node_names[i]+' '+dist[i]);
  return dist[end];
}

function djistracaller(){
  var t0 = performance.now();
  let snode=document.getElementById("snode").value.toUpperCase();
  let enode=document.getElementById("enode").value.toUpperCase();
  for(let i=0;i<matrix2.num_nodes;++i){
    if(matrix2.node_names[i]==snode) snode=i;
    if(matrix2.node_names[i]==enode) enode=i;
  }
  console.log("Finding paths between "+snode+" "+enode);
  let ret = djistra(matrix2,snode,enode);
  var t1 = performance.now();
  let space=document.getElementById("mindistresult");
  if(ret!=99999){
    string='<p>Shortest Path from '+matrix2.node_names[snode]+' to '+matrix2.node_names[enode]+' has length <u>'+ret+'</u>: (Took ' + (t1-t0) +' milliseconds to compute)</p><br>';
    path=path.substring(0,path.length-4);
    string+=path+'<br>';
  }
  else{
    string="<p>No path exists between "+matrix2.node_names[snode]+" and "+matrix2.node_names[enode]+"</p>";
  }
  path="";
  space.innerHTML=string;
}

function bfcaller(){
  let snode=document.getElementById("bfsnode").value.toUpperCase();
  let enode=document.getElementById("bfenode").value.toUpperCase();
  for(let i=0;i<matrix2.num_nodes;++i){
    if(matrix2.node_names[i]==snode) snode=i;
    if(matrix2.node_names[i]==enode) enode=i;
  }
  console.log("Finding paths between "+snode+" "+enode);
  var t0=performance.now();
  let numWeights=0;
  let weights=[];
  let sources=[];
  let destinations=[];
  for(let i=0;i<matrix2.num_nodes;++i){
    for(let j=0;j<matrix2.num_nodes;++j){
      if(matrix2.matrix[i][j]!=0){
        weights[numWeights]=matrix2.matrix[i][j];
        sources[numWeights]=i;
        destinations[numWeights]=j;
        ++numWeights;
      }
    }
  }
  let dist=new Array(matrix2.num_nodes);
  for(let i=0;i<matrix2.num_nodes;++i) dist[i]=99999;
  dist[snode]=0;
  for(let i=1;i<=matrix2.num_nodes-1;++i){
    for(let j=0;j<numWeights;++j){
      let u=sources[j];
      let v=destinations[j];
      let weight=weights[j];
      if(dist[u]!=99999 && dist[u]+weight<dist[v])
        dist[v]=dist[u]+weight;
    }
  }
  for(let i=0;i<numWeights;++i){
    let u=sources[i];
    let v=destinations[i];
    let weight=weights[i];
    if(dist[u]!=99999 && dist[u]+weight<dist[v]) {
      console.log("Graph contains negative weight cycle");
      return;
    }
  }
  t1=performance.now();
  djistra(matrix2,snode,enode);
  console.log(dist[enode]);
  let space=document.getElementById("bfmindistresult");
  if(dist[enode]!=99999){
    string='<p>Shortest Path from '+matrix2.node_names[snode]+' to '+matrix2.node_names[enode]+' has length <u>'+dist[enode]+'</u>: (Took ' + (t1-t0) +' milliseconds to compute)</p><br>';
    path=path.substring(0,path.length-4);
    string+=path+'<br>';
  }
  else{
    string="<p>No path exists between "+matrix2.node_names[snode]+" and "+matrix2.node_names[enode]+"</p>";
  }
  path="";
  space.innerHTML=string;
  return;
}

function bfscaller(){
  let bfsnode=document.getElementById("bfssnode").value.toUpperCase();
  console.log(bfsnode);
  for(let i=0;i<matrix2.num_nodes;++i){
    if(matrix2.node_names[i]==bfsnode) bfsnode=i;
  }
  console.log("Finding BFS from "+bfsnode+" "+matrix2.node_names[bfsnode]);
  let queue=new Queue();
  let visited=new Array(matrix2.num_nodes);
  for(let i=0;i<visited.length;++i){visited[i]=false;}
  path="";
  visited[bfsnode]=true;
  queue.enqueue(bfsnode); 
  while(!queue.isEmpty()){
    let visiting=queue.dequeue();
    path+=matrix2.node_names[visiting]+' -> ';
    for(let j=0;j<matrix2.matrix[visiting].length;++j){
      if((matrix2.matrix[visiting][j]==1)&&(visited[j]==false)){  
        visited[j] = true;
        queue.enqueue(j);
      }
    }
  }
  space=document.getElementById("bfsresult");
  path=path.substring(0,path.length-4);
  string='<p>BFS Traversal: '+path+'</p>';
  path="";
  space.innerHTML=string;
}

function dfscaller(){
  let dfsnode=document.getElementById("dfsnode").value.toUpperCase();
  for(let i=0;i<matrix2.num_nodes;++i){
    if(matrix2.node_names[i]==dfsnode) dfsnode=i;
  }
  console.log("Finding DFS from "+matrix2.node_names[dfsnode]);
  let stack = new Stack;
  let visited=new Array(matrix2.num_nodes);
  for(let i=0;i<visited.length;++i){visited[i]=false;}
  path="";
  stack.push(dfsnode);
    while(!stack.isEmpty()){
        dfsnode=stack.pop();
        if(visited[dfsnode]==false){
           visited[dfsnode]=true;
           path+=matrix2.node_names[dfsnode]+' -> ';
           for (let j=0;j<matrix2.matrix[dfsnode].length;++j){
              if(matrix2.matrix[dfsnode][j]==1){stack.push(j);}
           }
        }
    }
  space=document.getElementById("dfsresult");
  path=path.substring(0,path.length-4);
  string='<p>DFS Traversal: '+path+'</p>';
  path="";
  space.innerHTML=string;
}

function isCyclicUtil(v, visited, recStack){
  if(visited[v]==-1){
    visited[v]=1;
    recStack[v]=1;
      for(let j=0;j<matrix2.num_nodes;++j){
        if(matrix2.matrix[v][j]!=0 && v!=j){
            if(visited[j]==-1 && isCyclicUtil(j,visited,recStack))
              return true;
            else if (recStack[j]==1)
              return true;
        }
      }
    
    recStack[v] = -1;
    return false;
  }
}

function cyclecaller(){
  space=document.getElementById("cycleresult");
  let visited=new Array(matrix2.num_nodes);
  let recStack=new Array(matrix2.num_nodes);
  for(let i=0;i<matrix2.num_nodes;++i){
    visited[i]=-1;
    recStack[i]=-1;
  }
  for(let i=0;i<matrix2.num_nodes;++i){
    if(isCyclicUtil(i,visited,recStack)){
      space.innerHTML="<p>Cycle Detected</p>";
      return true;
    }
  }
  space.innerHTML="<p>No cycles are present</p>";
  return false;
}

function processMatrix(matrix){
  console.log("Entered processMatrix");
  matrix2=matrix;
  nodeArray = matrix.node_names;
  let area = document.getElementById("analysis");
  let string = '<h2>Adjacency Matrix</h2><table><tr><th>Nodes</th>';
  for(let i=0;i<matrix.num_nodes;++i)
    string += '<th>'+nodeArray[i]+'</th>';
  string += '</tr>';
  for(let i=0;i<matrix.num_nodes;++i){
    string += '<tr><td>'+nodeArray[i]+'</td>';
    for(let j=0;j<matrix.num_nodes;++j){
       string += '<td>'+matrix.matrix[i][j]+'</td>';
    }
    string += '</tr>';
  } string += '</table><h2>Adjacency List</h2><div id="alist">'
  for(let i=0;i<matrix.num_nodes;++i){
    string += nodeArray[i]+' -> ';
    for(let j=0;j<matrix.num_nodes;++j){
      if(matrix.matrix[i][j]==1)
          string += nodeArray[j]+', ';
    }
    string += '<br>';
  }
  
  string+='</div><div class="surround"><h2>Find shortest path between two Nodes using Dijkstras Algorithm:</h2>';
  string+='<br><div id="mindistance">'
  string+='<label for="snode">From Node:  </label>'
  string+='<input type="text" id="snode">'
  string+='<label for="enode">  to node:  </label>'
  string+='<input type="text" id="enode">'
  string+='<button id="mindistancebtn" onclick="djistracaller()">Find Path</button></div>';
  string+='<div id="mindistresult"></div></div>';
  string+='<div class="surround"><h2>Find shortest path between two Nodes using Bellman Ford Algorithm:</h2>';
  string+='<br><div id="bfmindistance">'
  string+='<label for="bfsnode">From Node:  </label>'
  string+='<input type="text" id="bfsnode">'
  string+='<label for="bfenode">  to node:  </label>'
  string+='<input type="text" id="bfenode">'
  string+='<button id="bfmindistancebtn" onclick="bfcaller()">Find Path</button>';
  string+='</div><div id="bfmindistresult"></div></div>';
  string+='<div class="surround"><h2>Breadth First Search (BFS)</h2><div id="bfs">';
  string+='<label for="bfssnode">From Node:  </label>';
  string+='<input type="text" id="bfssnode">';
  string+='<button id="bfsbtn" onclick="bfscaller()">Search</button></div><div id="bfsresult"></div></div>';
  string+='<div class="surround"><h2>Depth First Search (DFS)</h2><div id="dfs">';
  string+='<label for="dfsnode">From Node:  </label>';
  string+='<input type="text" id="dfsnode">';
  string+='<button id="dfsbtn" onclick="dfscaller()">Search</button></div><div id="dfsresult"></div></div>';
  string+='<div class="surround"><h2>Detect Cycles in Graph</h2><div id="cycle">';
  string+='<button id="cyclebtn" onclick="cyclecaller()">Search</button></div><div id="cycleresult"></div></div>';
  area.innerHTML = string;
}