/*
Think of possible solutions (min 5 - min 10)
    -> consider pros and cons discuss with interviewer (aka tradeoffs)

Write code min 10 - 20 min

Try going through an example (Catch edge cases) - 5 min
    
Complexity (2 - 5) min
    -> Runtime 
    -> Memory

Try come up with tests (e.g assert...) 5 min
    -> Whole function
    -> Edge cases
    -> Helper functions assert(helper(integerX), true);

Scalability Issues
    -> Concurrency/Multi-threading
    -> Sln 1 mil input
    -> storage

*/












// input [4, 5, 2, 7, 1]
// return a sorted array

// sln 1
// step 1 [4, 5...
// [2, 4, 5,
// [2, 4, 5, 7 ..
// [1, 2, 4, 5, 7]
// n ^ 2

// CODE

// sln 2 =? two loops
// min 1, [1, 4, 5, 2, 7]
// min 2, [1, 2, 4, 5, 7]
// n ^ 2

// Quick Sort
// worst case n ^ 2
// Average n (log n)

// Merge Sort
// Divide and Concur
// inoput [4, 5, 2, 7, 1]
// split [4, 5, 2] [7, 1]
// split [7], [1]
// split [4, 5] [2]
// split [4] [5]
// merge [1, 7]
// merge [4, 5]
// merge [2, 4, 5]
// merge [1, 2, 4, 5, 7]
// return sln
// concurrency
// split each array can be handled by a seperate thread
// merging take place in the parent thread

// CODE

//test cases
//array is empty return empty
//two non-unique values in a row
//sorted array should return as is
// complete inverted array 





















