/*

List of words: [app, apple, best, bet]
alphabet:  [abc...z]
function isLexicallyOrdered: true

sort of alphabet: [worldabgh...]

*/


function isOrdered(wordList, alphabets){
  
    // loop through wordlist 
    // check two words at a time 
    // loop through characters of the words
    // use indices to compare
    // expect 2nd word at same number letter to have equal indice or higher ... else false
    
    for ( let i = 0; i< wordList.length - 1; i++){
      let word1 = wordList[i];
      let word2 = wordList[i+1];
      
      let memoizedAlphabets = alphabets.reduce((acc, cur, idx) => ({...acc, [cur]: idx}) , {});
      
      for (let j = 0; j < word2.length; j++){
        if (!word1[j])
          break;
        
        
        let idx1 = memoizedAlphabets[word1[j]];  
        let idx2 = memoizedAlphabets[word2[j]];  
        
        if (idx2 < idx1 ){
          return false;
        }  
        
      }
    }
    
    return true;
    
  }
  
  // [app, apple] => true
  
  // [app] => true
  
  // [app, apple] [l, a...z] => false
  
  // 
  
  
  // 0 words, 
  // 1 word, 
  // n words
  
  // compare two words
  // app, apple true regardless of alphabet [a..z], [z .. a]
  // a, b [a..z], [z..a]
  
  