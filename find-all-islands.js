/*
All islands in a 2 D Array

0 0 0 0 1 0
0 1 1 0 0 0
0 1 0 0 1 0
0 0 0 1 1 1
 => 3 islands

 Make it a world
*/

"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

function findIslands(arr){
    // see if empty

    let count = 0;
    for (let i = 0; i < arr.length; i++){
         for (let j = 0; j < arr[i].length; j++){
             if (arr[i][j] === 1){
                count ++; 
                exploreOnes(arr, i, j);            
             }
        }
    }
    return count;
}

function exploreOnes(arr, col, row){
    // check bounds
    if (col < 0 || col > arr.length || row < 0 || row > arr[col].length)
        return 0;
    
    0,4
    


    if (arr[col][row] === 1){
        arr[col][row] = 'X';
    }

    exploreOnes(arr, col++, row);
    exploreOnes(arr, col--, row);
    exploreOnes(arr, col, row++);
    exploreOnes(arr, col, row--);

}