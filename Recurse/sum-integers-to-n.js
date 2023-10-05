/* 
    Sum all positive integers upto n 
    e.g.
        sum(0) -> 0
        sum(1) -> 1
        sum(2) -> 3
        sum(5) -> 15
*/
function sum(n){
    if (n == 0)
        return 0;
    else
        return n + sum(n-1);
}

console.log('3 : ', sum(2))
console.log('21 :', sum(6))