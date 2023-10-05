/*
[n-odd-letters]

hints: 
n = string length
0 < n < no-limit
if 0, return an empty string. (js considers it even)
is 0 even or odd

Examples:

4 - > ooo?
5 - > ooooo




Write a function that  returns a string of n characters.  
If even, the last character should be a symbol.


Tests:
Num = 0
Num = 1
Num = 


[CV]
>> AddProjects
>> Match it to the job description





[Pascal's Triangle]
0 < levels < 100

Examples:
    getPT(2) => [
        [1],
        [1, 1],
    ]
    getPT(5) => [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ]
*/


function solution(N) {
  if (!N) {
    return "--";
  }

  let str = "x";
  if (N % 2 === 0) {
    str = str.repeat(N - 1) + "y";
  } else {
    str = str.repeat(N);
  }

  return str;
}

// Option 2
function solution2(N) {
  if (!N) {
    return "--";
  }

  //   let digit = N % 2 === 0 ? 1 : 0;

  //   return 'x'.repeat(N - digit) + "?";

  let result = "";
  for (let i = 1; i <= N; i++) {
    if (i == N && i % 2 === 0) {
      result = result + "?";
      break;
    }
    result = result + "x";
  }
  return result;
}
console.log(solution(0));
console.log(solution(1));
console.log(solution(4));
console.log(solution(7));
console.log(solution(18));
