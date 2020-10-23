/**
Movie recommendation system
{recommender: [
{ name:tom, movies:[mA, mB, Mc]},
{ name:mary, movies: [mG, mB, mH]},
{ name:steve, movies:[mA, mC, mR]},
{ name:alice, movies: [mA, mB, mG]}
]}
brian; [mA]

alex: [mB]
*/

// return name of a movie
function recommend(brian) {
    //reduce list according to brians movies
    //for loop  to extract potentials
    const movies = {}
    let highestRated;
    let count = 0;
    
    for (let person in recommender){
      if(person.movies.includes(brian)){
        for(let i = 0; i < person.movies.length){
          
          if (movies[person.movies[i]]){
            movies[person.movies[i]]++;
            
            if (movies[person.movies[i]] > count){
              count = movies[person.movies[i]];
              highestRated = person.movies[i];
            }
            
          } else {
            movies[person.movies[i]] = 1;
          }
        }
        
      }
    }
    
    return highestRated
    
    
    //
  }
  
  Time complexity:
  R*M + T 
  
  