/**

home
..Desktop
....req.doc (200b)
....music.mp3 (3600b)
..Downloads
....game.apk (24000b)
....result.pdf (149b)
src


entity: {
  id: int,
  name: String,
  type: (directory|file),
  size: (file -> size, int),
  children: [id]
}


file System {
1: home, Directory, children [2, 3],
2: Desktop, Dir, children [4, 5], 
3: Downloads ...
4: req.doc, file, size 200
...
...
54: src, Directory, children, [....]
}


function: id -> return the size. 



*/

function findSize(id, fileSystem){
  // find if the id is in file system
  let startNode = fileSystem[id];
  
  let queue = [startNode];
  
  let size = 0;
  
  while(queue.length){
    let current = queue.shift();
    
    if (current.type === 'file'){
      size += current.size;
    } else {
      queue.push(...getChildren(current.children, fileSystem));
    }
  }
  
  return size;
}


function getChildren(children, fileSystem){
  
  return children.map(cur => fileSystem[cur]);  
}

 
// Rules
// 1. All directories/files must be under home
// 2. All children must exist in file system
function isFileSystemValid(fileSystem){
  // find if the id is in file system
  let startNode = fileSystem[0];
  
  let queue = [startNode];
  
  while(queue.length){
    let current = queue.shift();
    if(typeof(current) === undefined){
      return false;
    }
    
    if (current.type === 'file'){
      size += current.size;
    } else {
      queue.push(...getChildren(current.children, fileSystem));
    }
    
    delete fileSystem[current.id]
  }
  
  
  
  return !!Object.keys[fileSytem].length;
}


function getChildren(children, fileSystem){
  return children.map(cur => fileSystem[cur]);  
}

/**

file System {
1: home, Directory, children [2, 3],
2: Desktop, Dir, children [4, 5], 
3: Downloads ...
4: req.doc, file, size 200
...
...
54: src, Directory, children, [....]
}
*/
// music.mp3
function findPath(id, fileSystem, path = [], cur = 1){
  // find start
  let currentNode = fileSystem[cur];
  path = [...path, currentNode.name];
  
  if (cur === id){
    return path;
  }
  
  
  if (currentNode.type === 'directory' && currentNode.children.length){    
     for ( let node of currentNode.children){
      let value = findPath(id, fileSystem, [...path, currentNode.name], currentNode.id) 
       if (value)
         return value;
     }
  }
  
  return null;
}




