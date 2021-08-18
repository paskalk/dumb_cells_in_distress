/*

              a
           b      c
        d.   e.     f
 
key b, c
return path from b - c
up, left, right

up, right


*/

function findPath(root, start, end){  
    let pathToStart = traverseDepthFirst(root, start);
     
    let pathToEnd = traverseDepthFirst(root, end); // [left, right, ...]
    
    
    // Compare the paths
    let length = pathToStart.length > pathToEnd.length ? pathToEnd.length : athToStart.length ;
    
    for (let i = 0; i < length; i++){
      let pointInStart = pathToStart[i];
      let pointInEnd = pathToEnd[i];
      
      if (pointInStart === pointInEnd)
        continue;
      
      pathToStart = pointToStart.splice(i);
      pathToEnd = pointToEnd.splice(i);
      break;
    }
    
    pathToStart.reverse().map(cur => 'UP');
    
    
  return  [...pointToStart, ...pointToEnd];
    
  
    
  }
  
  function traverseDepthFirst(node, value, path = []){  // [left]
  
    if(node.value === value){
      // base case
      return path;
    }
    
    let leftPath;
    let rightPath;
    
    if (node.left)
      leftPath = traverseDepthFirst(node.left, value, [...path, 'left']);
    
    if (node.right)
      rightPath = traverseDepthFirst(node.right, value, [...path, 'right']);
  
    return  leftPath || rightPath;
  }
  