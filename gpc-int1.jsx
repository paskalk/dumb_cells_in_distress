/*
    Int 1 - July 2020
*/

/* 
Provided examples----------

{
    "books": {
        "fiction": [
            {
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "978-0553213119",
                "price": 8.99,
                "related": ["978-0684801223", "978-0743273565"]
            },
            {
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "978-0395193952",
                "price": 22.99,
                "related": ["978-0547928241", "978-0345325815"]
            }
        ],
        "nonfiction": [
            {
                "author": "Jared M. Diamond",
                "title": "Guns, Germs, and Steel",
                "isbn": "978-0393317558",
                "price": 9.49,
                "related": ["978-0062316097", "978-0143117001"]
            },
            {
                "author": "Truman Capote",
                "title": "In Cold Blood",
                "isbn": "978-0679745587",
                "price": 14.99,
                "related": ["978-0393322231", "978-1981029877"]
            }
        ],
    }
}

"books.fiction.1.price"

"nonfiction.1"



        [
            {
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "978-0553213119",
                "price": 8.99,
                "related": ["978-0684801223", "978-0743273565"]
            },
            {
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "978-0395193952",
                "price": 22.99,
                "related": ["978-0547928241", "978-0345325815"]
            }
        ]

"1.author"





["978-0547928241", "978-0345325815"]

"2"

{'chicken', 'cow'}
"cow"


*/

/* Actual Code */
function(obj, path){
//check for empty obj path
	let pathArr = path.split('');//[1, author]
	let result;

	while (pathArr.length){
		let toFind = pathArr.shift();//author
		for (let item in obj){//herman obj
			result = item[toFind];//2-1
		
		//edge case (use typeof to check if bj or arr

	}
		obj = result;

	}
	
	

	
	return result;



}
