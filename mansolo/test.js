/*
// Given a source and a Path, find the value to be returned

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

//Example 1
"1.related.2" => 978-0743273565

Example 1:
["978-0547928241", "978-0345325815"]

"2" => 978-0743273565

Example 2:
{coop: 'chicken', shed: 'cow'}
"shed" => cow

// Assumptions
Limitations of objects.
 1 Path

 Extra questions:
 - Array of Paths ["cow", "1.cow"]
 -

 *******Test for
 - Complexity (Space time)
 - Empty source
 - Empty path
 - Mapping always right
*/
//                     (Object,  String.number)
function retrieveValue(source, path) {
  if (source.length < 1 || path.length < 1) return "N/A";
  let pathArr = path.split(".");
  console.log(pathArr);

  for (let i = 0; i < pathArr.length; i++) {
    source = source[pathArr[i]];
    console.log(i, "...", source);
  }
  return source;
}

console.log(retrieveValue({ coop: "chicken", shed: "cow" }, "shed"));

console.log(retrieveValue(["978-0547928241", "978-0345325815"], "1"));

// console.log(retrieveValue([
//     {
//         "author": "Herman Melville",
//         "title": "Moby Dick",
//         "isbn": "978-0553213119",
//         "price": 8.99,
//         "related": ["978-0684801223", "978-0743273565"]
//     },
//     {
//         "author": "J. R. R. Tolkien",
//         "title": "The Lord of the Rings",
//         "isbn": "978-0395193952",
//         "price": 22.99,
//         "related": ["978-0547928241", "978-0345325815", "990-673455265", ["cow", {
//             "country": "Comoros"
//         }]]
//     }
// ], "1.related.3.1.country"))

console.log(retrieveValue([], ""));

// How do I know to stop
