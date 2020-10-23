// https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png
// https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png

// node.val => int
//node.left
//node.right
// return the count of valid nodes given a root of a tree
function getValidNodes(node, max = 0){
    if (!node){
    return 0;
    }
    let newMax = max; // 2
    let count = 0; // 0

    if (node.val >= max){
        count = 1; // 1
        newMax = node.val; // 2
    }
    
    if (node.left){
    count += getValidNodes(node.left, newMax); // return val = 1. count = 2
    }
    
    if (node.right) {
    count += getValidNodes(node.right, newMax); // return val = 1, count = 3
    }
    
    return count;
}


/*
// Leef 
// left: not null
// right: not null
// what info do I need => max 
// return ? 

node {
    value: 2 // (2, 0) count = 1, newMax = 2 .. incomplete
    left: { value: 4, left: null, right: null} // (4, 2) count 1, newMax = 4, return 1
    right: { value: 3, left: null, right: null } // (3, 2) count 2, return value = 1, 
}

max => null, 
count => null
return => 
*/