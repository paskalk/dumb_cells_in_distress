/**
seperator: |
string "absc|ghsgjd|jhmgjsgbkf|bjhbms"
example 1
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

"1.related.2" => 978-0743273565

["978-0547928241", "978-0345325815"]

"2" => 978-0743273565

{'val}

{ root: ["978-0547928241", "978-0345325815"]}
*/

// Assumption mapping always right

// source ex1, "1.related.2"
// Complexity O(n)
char separator = ".";
function retrieveString(source, mapping) {
  mapArr = mapping.split(separator); 
  sourceObj = objectify(source); // O(n)
  currentNode = sourceObj['root']; // O(1)
  for(int i = 0; i < mapArr.length(); i++) { // log(n) length of mapping
    key = mapArr[i]; 
    if (Math.isNumber(key)) {
      currentNode = currentNode[Number(key) - 1]; 
    } else {
      currentNode = currentNode[key]; 
    }
  }
  return currentNode;
}

function objectify(source) {
  srcText = "{ 'root': ";
  srcText += source;
  srcText += "}";
  sourceObj = Json.parse(srcText); // O(n)
  return sourceObj;
}