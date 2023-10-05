/* 
    Very Common:
    function to count down from n and log 'Hurray'




*/


function countDownRecursive(n){
    if (n === 0){
        console.log('Hurray');
        return;
    }
    console.log(n);
    return countDownRecursive(n-1)
}
console.log(countDownRecursive(3));
console.log(countDownRecursive(5));
