/*
You are eating a candy bar that is made of pieces in a single row (e.g., a Toblerone). 
You can bite off 1, 2, or 3 pieces at a time. How many different ways can you eat a bar that is n pieces long?

1 



1 Piece -> 1 bite

2 Piece -> 2 bites of 1 piece each, 1 bite, 2pieces →> 2 different ways


3 Piece -> 2 bites of 1 piece each, 1 bite, 2pieces →> 3 

*/


1 1 1
1 2
2 1
3

4 Pieces

1 1 1 1
1 1 2
1 2 1
2 1 1
1 3
3 1
2 2




1 2 3


//
Function (n){
// Edge Cases -> if 0/1

//Temp variable to store - count
Var waysToEat = 0;

Var possiblePieces = [1, 2, 3];

While (possiblePieces.length){

Let currentPiecesToBite = 	possiblePieces.unshift();

	for(let i = 0; i++; i < n){
		
If ( possiblePieces % currentPiecesToBite === 0) {
	waysToEat == waysToEat +1;
} {
Var Balance == possiblePieces % currentPiecesToBite;

If ( Balance % 2/1){
	waysToEat == waysToEat +1;
}
}
		
	
	}
	


}



Return waysToEat;

}




Function CheckBalance(n, count=0){


}

i 


0 - 1
1 - 1
2 - 2
3 - 4
4 - 7
5 - 13
6 - 24

Function findBites (n){
If (n < 0)
Return 0;

if (n == 0 | n === 1)
Return 1;

if (n == 2)
Return 2;

if (n == 3)
Return 4;

Return findBites(n-1) + findbites(n-2) + findBites(n-3);
}
