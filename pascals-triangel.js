function pascalsTriangle(levels) {
  let resultArray = [[1]];
  if (levels === 1) {
    return resultArray;
  }

  resultArray.push([1, 1]);

  for (let i = 3; i <= levels; i++) {
    let padding = 1;
    let lastLevelArray = resultArray[i - 2]; [1.1]
    let currentLevelArr = [];
    for (let i = 0; i < lastLevelArray.length - 1; i++) {
      if (i + 1 <= lastLevelArray.length - 1) {
        let sum = lastLevelArray[i] + lastLevelArray[i + 1];
        currentLevelArr.push(sum);
      }
    }
    resultArray.push([padding, ...currentLevelArr, padding]);
  }

  return resultArray;
}

console.log(pascalsTriangle(1));
console.log(pascalsTriangle(2));
console.log(pascalsTriangle(3));
console.log(pascalsTriangle(5));
console.log(10)
