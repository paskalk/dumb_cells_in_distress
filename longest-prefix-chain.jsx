/**
prefix chaining
given list words = [at,  den, gateway, dent, ace, apple, dents]
task 
1. chain for each word (except first) it has a length + 1 compared to word before it. 
eg i = 2, words[i].length = words[i -1].length - 1
2. all characters for each word should be same as cha of words before it excpet the last char
output => den -> dent -> dents

find longest prefix chain
*/

function (listOfWords){
    // Loop through all
    // Check if it's been seen ; If seen, check chars & length ; if not seen, add to an object
    // check the length of each tree in the object of trees
    
    let chainsObj; 
    
    listOfWords = listOfWords.sort();//  [ace, apple, at, ate,  den, dent, dents, gateway, ]
    
    let longestCount, currentCount = 0;
    let lastItem;
    
    
    // Edge case -> Empty List
    for (let i = 0; i < listOfWords.length; i++){
      let currentItem = listOfWords[i];
      
      if (lastItem){
        if ((currentItem.length === lastItem.length+1) && (substring(0, lastItem.length, currentItem) === lastItem)){
          currentCount++;
        } else {
          currentCount = 1;
        }
  
      }
      lastItem = currentItem;
      
      if (currentCount > longestCount ){
        longestCount = currentCount;
      }
    }
    
    return longestCount;
  }
          
  
  
  
  
  app -> apple -> applet
  app -> appex -> applexiq
  
  
  // create forest 
  // loop through words
  // for each word
  // is substring in forest roots
  // true
  // does it fit in tree
  // -- append
  // -- create a new tree
  // false
  // -- create a new tree