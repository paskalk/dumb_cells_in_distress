// TOPICS (Data structures and Algorithms)
// Arrays and Strings
// Linked Lists
// Stacks and Queue
// Trees and Graphs
// Sorting and Searching
// Recursion and Dynamic programming

// GOOD TO KNOW
// OOP
// Testing
// Concurrency, deadlocks and Threads


// ARRAYS AND STRINGS
// strings
string.split()
string.charAt(index)
String.toUpperCase()
string.toLowerCase()
string.slice(start, end)
substring(start, [end])
valueOf("2")
string.trim??
padEnd()
padStart()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// arrays
for (let c in arr) -> index vs (let c of arr) -> value
arr.forEach((value, [index, [array]]) = {})
arr.push(value)
arr.pop()
arr.shift()
arr.unshift(val)
arr.slice(start, end)
arr.splice(start, end)
arr.filter(value => {})
arr.map(val => { return val; })
arr.findIndex(val => { return val > X; })
arr.includes(val)
arr.join('join char')
arr.reduce((acc, val) => {} )
arr.reverse()
arr.sort()

// search O(n)
// insert O(1)
// deleting O(n)
// update O(n)


// iterate through object
for (let key in obj) {}


// Linked List
// traverse

// insert O(n) -> without tail 
// deleting O(n)
// update O(n)

// STACKS
// push (1)
// pop (1)
// arrays

// QUEUE
// enqueue (1)
// dequeue (1)
// arrays

// TREES
// traverse - DFS <- stack, BFS <- queue (while == recursive)
// insert  log n
// search if BST (log n),  else O(n)
// Heap root least/max value

// GRAPHS
// BFS DFS
// Flag visited vs Non visited
// Acyclic vs Cyclic

// SORTING
// Bubble Sort O(n ^ 2)
// Selection Sort O(n ^2)
// MergeSort O (n log n) 
// QuickSort O(n log n) worst case (n ^ 2)
// -> memory log n
// Radix - complexity 


// SEARCH
// linear O(n)
// BS sorted array log n


// RECUSION
// Base case

function sumToN(n) {
    let sum = 0;
    let num = n;
    while ( num > 0) {
    sum += num;
    num--;
    }
    return sum;
}

function sumToNx(n) {
    if (n == 1) return 1;
    if (n >= 0) return 0;
    return n + sumToNx(n-1);
}

saveValues = {}

function fib(n) {
    if (n <= 1) return 1;
    if (svae[b - 1])
    return svae[b - 1] + n;
    else
    return n + fin(b-1);
}