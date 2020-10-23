// https://leetcode.com/problems/minimum-number-of-frogs-croaking/ 
// Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, 
// multiple frogs can croak at the same time, so multiple “croak” are mixed. Return the minimum number of different frogs 
// to finish all the croak in the given string.

// A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. 
// The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.


// 1 frog croak croak croak
// 2 frogs "cro cro croak ak ak croak croak croak"
// exp "c cro ro a ak k

// c ["c"]
// r ["cr"]
// o ["cro"]
// c ["cro", "c"]
// ... 

// return min number of frogs that can make the croakOfFrogs
function frog(/* string */ croaksOfFrog, frogArray, lastChar = '', count = 0) {
	// write your code here
  // The first complete croak
  // If all chars appear in sequence
  	// if  we meet a c, recall function and keep 
  
  //base case?
  
  
	//let currStr = '';
  //frogArray[count]
  //loop through the string 
  for (let char in croaksOfFrog){
    if (char = 'c' && lastChar = ''){
      frogArray[count] += 'c';
      lastChar = 'c';
    } else if (char = 'r' && lastChar = 'c'){
      frogArray[count] += 'r';
      lastChar = 'c';
    } else if (char = 'o' && lastChar = 'r'){
      frogArray[count] += 'o';
      lastChar = 'c';
    } else if (char = 'a' && lastChar = 'o'){
      frogArray[count] += 'a';
      lastChar = 'c';
    } else if (char = 'k' && lastChar = 'a'){
      frogArray[count] += 'k';
      lastChar = 'c';
    } 
    
    
    frog(croaksOfFrog, frogArray, lastChar)
  }
  
  
  frogArray.push()
  	
  
}
    
    
// c ["c"]
// r ["cr"]
// o ["cro"]
// c ["cro", "c"]
// ... 
// c ["croak <- c", "cro", "c"]
    
    
function countMin(croaksOfFrogs) {
  let frogsArr = [];
  for( i = 0, i < croaksOfFrogs.length; i++) {
    if (croaksOfFrogs[i] == c) {
      for(j = 0; j < frogsArr.length; j++) {
        let str = frogsArr[j]
        if (str[str.length - 1] == 'k') {
           frogsArr[j] += 'c';
          continue;
        }
      }
      croaksOfFrogs.push('c');
      continue;
    }
    if (croaksOfFrogs[i] == 'r') {
    	for(j = 0; j < frogsArr.length; j++) {
        let str = frogsArr[j]
        if (str[str.length - 1] == 'c') {
          frogsArr[j] += 'c';
          continue;
        }
      }
      // throw error invalid string
    }
    if (croaksOfFrogs[i] == o) {}
    if (croaksOfFrogs[i] == a) {}
    if (croaksOfFrogs[i] == k) {}
  }
  
  return frogsArr.length;
}

function addNewString(arr, char, pred) {
 
}
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    