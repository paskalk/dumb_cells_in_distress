/**
positions
a,..h
1...8

a1 fist box
g8 opposite end

bishop (moves any number of boxes diagonaly)

*/
// currentPosition(a1) [b2, c3, d4, e5, f6, g7, h8]

function potentialNextSteps(currentPos){
  let potentialPositions = [];
  // x = convert (b, 6)
  // y  -> pick value
  // navigate all 4 directions
  appendDirectionA(x + 1, y + 1);
  // direction b (x-1, y-1).each (append potentialPositions)
  // direction c (x+1, y-1).each (append potentialPositions)
  // direction d (x-1, y+1).each (append potentialPositions)
  
  getPositions(currentPos);

}

function appendDirectionA(x, y) {
  while(whithinBounds(x, y)) {
    // revertConversion(x, y) c7
    // potentialPositions.push(c7)
    x += 1
    y += 1
  }
}
