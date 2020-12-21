/**
[poor, borderline, solid, outstanding]
1. Coding
2. Data structures and algorithm 
3. Design 
4. Communication 
5. Efficasy
6. System Design (optional) - Testability

n points
point = (x, y)
do we have an equilateral triangle
distance -> euclidean formulae
*/


function isEquilateralPresent(arr){ // [[0,0][3,0][0,3][4,5]]
  // n2 loop to calculate distance to each point -> call a function to calc distance
  // create a graph
  
 // traverse graph 
    // For each point check edge , if distance is eqaul to last distance continue
  
  
  for (let i = 0; i < arr.length; i++){
    let pointOne  = arr[i];
    let distances = {};
    
    for (let j = i + 1; j < arr.length; j++){
      let pointTwo = arr[j];
      distance = getEuclidean(pointOne, pointTwo);
      
       if (distances[distance]) {
         distanceThree = getEuclidean(pointTwo, distances[distance]);
          if (distance === distanceThree){
            return true;
          }
       }
      
      distances[distance] = pointTwo;
    }
  }
  
  return false;
}

// arr [int, int, int]
// nodes [node, node, node]
// entryNode nodes[0]
// loop through nodes : nodeI
//    loop through nodes insert all elements except nodeI
//    exit at this point

// traverse graph start from entryNode


