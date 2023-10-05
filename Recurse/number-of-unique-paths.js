/*
    Very Common
    Function to take 2 inputs(row & col) and give number of unique paths from top left to bottom right.
    Can only go through  a box once per path and only travels right and down
    e.g.
        uniquePaths([2,4]) -> 4
        uniquePaths([3,3]) -> 6


*/


function uniquePaths(row, col) {
  if (col === 1 || row === 1) {
    return 1;
  } else {
    return uniquePaths(row, col - 1) + uniquePaths(row - 1, col);
  }
}

console.log("Expect 4 : ", uniquePaths(2, 4));
console.log("Expect 6 :", uniquePaths(3, 3));

/* 
[failed attempt]

function v1uniquePaths(row, col, counter = 0) {
    if (col === 0  ||  row === 0 ) {
      console.log('still here');
      return;
  
    }
  
    if (col === 1 && row === 1) {
      counter += 1;
      console.log('s2 till here');
      return;
    } else {
      
      let left = v1uniquePaths(row, col-1, counter);
      console.log('s4 till here');
      let up = v1uniquePaths(row-1, col, counter);
    }
  
    return counter;
  }
  
  console.log("Expect 4 : ", v1uniquePaths(2, 4));
  console.log("Expect 6 :", v1uniquePaths(3, 3));
  */