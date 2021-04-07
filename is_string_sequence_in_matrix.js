/*

ADSFJD
DHGJDH
SHHJHD
HJBKDH

Str = "ADHHJBK" 

*/

function findStr(matrix, str){
    if (!str)
      return false;
    if(str.trim() === '')
      return true;
    // n2 loop for each matching first char start to find the sequence
      // create a new obj 
      // traverse
    let result = false;
    
    for (let i=0; let i<matrix.length; i++){
      for (let j=0; j<matrix[i].length; j++){
        if(str[0] !== matrix[i][j]){
          continue;
        }
        let objMatrix = objectify(matrix); //[[{ value: A, checked: false}, { value: D, checked: false}]]
        result = checkStringExists(objMatrix, str, i, j);
        
        if (result === true){
          break;
        }
      }
    }
    
    return result;
      
  }
  // A
  // AD
  function checkStringExists(objMatrix, str, x, y, currentIndex = 0){//1
    let xInBounds = (x >= 0 && x < objMatrix.length);
    let yInBounds = (y >= 0 && y < objMatrix[0].length);
    if (!xInBounds || !yInBounds || objMatrix[x][y].checked)
      return false;
  
    let node = objMatrix[x][y];
    node.checked = true;
    if (str[currentIndex] !== node.value)
      return false;
     
    if (str.length-1 = currentIndex)
        return true;
    
    if(checkStringExists(objMatrix, str, x+1, y, currentIndex++))
      return true
          
    if(checkStringExists(objMatrix, str, x-1, y, currentIndex++))
      return true
        
    if(checkStringExists(objMatrix, str, x, y-1, currentIndex++))
      return true
        
    if(checkStringExists(objMatrix, str, x, y+1, currentIndex++))
      return true
    
    return false;
  }