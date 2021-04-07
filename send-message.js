/*

s x x x 
x x x x
x x x p
x x x x

*/

/*






*/

/*
xp [0,0][0,1]

ab -> 90 : 1 = 2^ 0
cd -> 45 : 2 = 2^1
ef -> 22.5: 4 = 2 ^ 2

[[0,0][0,1][1,1]]
[[0,0][1,0][1,1]]


*/

// check right if(!p) mark as checked and keep checking the rest of the sides (right) 
// xx / xxx / xxxx / xxx / xp§

//                           [0,3].  [3,1]
function sendNote(classArr, sender, receiver){
  // {name: 's', children: [ [], []]}
  let q = [classArr[sender[0]][sender[1]]];
  let path = [];
  
  while(q.length){
    let current = q.shift();
    
    q.push(...current.children);
    
    path.push(current.name);
    
    if(current.name === classArr[receiver[0]][receiver[1]].name){
      break;
    }
  }
  
  return path;
  
}

/** 
1 st row risk prob pass note: 90%
2 nd row 45%
3 rs 22.5%

risk prob col 1-2 50%
risk prob col 2-3 25%

task min prob pass not from sender to receiver
*/

.9 * .9 * .9 *.5 *.25
[0,1]
const paths = {};
const probabilities = {};
const checkedArr = []; //array fill 

function getProbability(arr, sender, receiver){
  if (arr.length === 1){
    return 0;
  }
  
  traverseMatrix(arr, sender[0], sender[1], receiver, [sender]);

}

function traverseMatrix(arr, x, y, receiver, path){ //N2
  if (receiver[0] === x && receiver[1] === y){
    paths.push(path);
    probabilities.push(lowestProbability(path))
    return [x,y];
  }

  if (checkedArr[x-1, y] && arr[x-1] !== 0 && arr[x-1][y]){
    checkedArr[x-1, y]  = true;
    traverseMatrix(arr, x-1, y, receiver, [...path, [x-1,y]]);
  }
  
  if (checkedArr[x+1, y] && arr[x+1] !== 0 && arr[x+1][y]){
    checkedArr[x+1, y] = true;
    traverseMatrix(arr, x+1, y, receiver, [...path, [x+1,y]]);
  }
  
  if (checkedArr[x, y-1]  && arr[y-1] !== 0 && arr[x][y-1]){
    checkedArr[x, y-1] = true;
    traverseMatrix(arr, x, y-1, receiver, [...path, [x,y-1]]);
  }
  
  if (checkedArr[x, y+1]  && arr[y+1] !== 0 && arr[x][y+1]){
    checkedArr[x, y+1] = true;
    traverseMatrix(arr, x, y+1, receiver, [...path, [x,y+1]]);
  }
}




function lowestProbability(path, row = 90, column = 50){ //M
//   [[0,0][0,1][1,1]]
  // rows - 90
  //column
  let value = 1;
  for (let i = 0; i < path.length - 1; i++){
    let row1 = path[i][0];
    let row2 = path[i+1][0];
    let col1 = path[i][1];
    let col2 = path[i+1][1];
        
    if (col2 !== col1)
     value *= 0.9* (2 ^ row1)
    
    if (row2 < row1)
     value *=  0.5 * (2 ^row1)
    else
     value *= 0.5 * (2 ^ row2)
  }
  
  return value;
}
/*
[[abcd]
 [efgh]
 [ijkl]]
 
 arr[row][col]

*/
/*
 <>
abcd -> 90  a -> b >c > d   || Y AXIS
50
efgh    45
25
ijkl    22.5
12.5
|
V

50 a > e > i




// [0, 0] -> {[0, 0][0, 1]}, {[0,0][1,0]}
// {[0, 0][0, 1]}, {[0,0][1,0]} -> {[0, 0][0, 1][1,1]}, {[0,0][1,0][1,1]}

paths.append({[0, 0][0, 1][1,1]})

*/