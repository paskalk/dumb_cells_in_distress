/**

Calendar feature trying to find a day where everyone is free.
When someone is unavailable

block {
personId: int,
startDay: int,
endDay: int
}

array -> blocks

task 
find days where everyone is available.

1. [{personId: 1, startDay: 1, endDay: 6}, 
{personId: 2, startDay: 2, endDay: 3}] = false

2. [{personId: 1, startDay: 1, endDay: 2}, 
{personId: 2, startDay: 3, endDay: 4}] = true



_____

    _____

1 - 2 - 3 - 4 - 5


___________________

    _____

1 - 2 - 3 - 4 - 5


_____.   |
         |
         |  _____


1 - 2 - 3 - 6 - 8 [3]


i = 1 => i = 5

//find earliestDay = 3 that everyone can be free
//loop through the entire array from index 1, checking whether startDay is > earliestDay

*/

const findAvalaibleDays = function (blocks) {
  if (blocks.length === 1 || blocks.length === 0) return [];
  let result = [],
    lastEndDay = blocks[0].endDay;

  for (let i = 1; i < blocks.length; i++) {
    let startDay = blocks[i].startDay;
    let endDay = blocks[i].endDay;

    if (startDay > lastEndDay + 1) {
      for (let j = lastEndDay + 1; j < startDay; j++) {
        result.push(j);
      }
    } else {
      lastEndDay = Math.max(lastEndDay, endDay);
    }
  }

  return result;
};
