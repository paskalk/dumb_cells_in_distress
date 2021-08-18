/**


wall -> # 
open path -> _
entry at a
a b
c d
exit at c = 4 steps

# _ # _ _ #
# _ # _ _ #
# _ # # _ #
# _ _ # _ #
# _ _ # _ #
# _ _ # _ #
steps => 9

starting from any cell in first row, 
find longest path to exit in bottom most row.
return number of steps
movement < > ^ down

*/


function findLongestPath(grid){
    let longestPath = 0;
    
    // Loop through all the steps in the first row
      // if found, check longest step-length
    for (let i=0; i < grid[0].length; i++){
      if (grid[0][i] === '_'){
        let pathLength = traverseGrid(i, 0, [...grid]);
        if (longestPath < pathLength)
          longestPath = pathLength;
      }
    }
    return longestPath; 
  }
  
  /*
  - - #
  # # #
  */
  function traverseGrid(col, row, grid, count=0){
    // check if in bounds
    if (col < 0 || col > grid[row].length || row < 0 || row > grid.length ){
      if (row === grid.length - 1)
        return count;
      
      return 0;
    }
    
    // return if invalid path
    if (grid[col][row] !== '-'){
      return 0;
    }
    
    grid[col][row] = 'x';
    
    // if path is valid, mark it as checked
    
    // check all 4 sides
    
    let left = traverseGrid(col, row--, [...grid], count++);
    
    let right = traverseGrid(col, row++, [...grid], count++);
    
    let up = traverseGrid(col--, row, [...grid], count++);
    
    let down = traverseGrid(col++, row, [...grid], count++);
    
    
    return Math.max([left, right, up, down])
  }