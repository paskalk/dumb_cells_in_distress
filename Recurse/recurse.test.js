/* 
    function to create tree from  list of nodes/objects

    ['Pac', 'Kenya', 254]
*/
/*
{
  "animals": {
    "mammals": {
      "cats": { "persian": {}, "siamese": {} },
      "dogs": { "chihuahua": {}, "labrador": {} }
    }
  }
}

//
No Parent null

*/
let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
  { id: "cats", parent: "mammals" },
];



/*
[1]
Loop & Create Tree with Parent Lookup
Traverse and add node

[2]
Index all items and create object
Loop and create recursion

[3]
Loop, find one, find all children and repeat.
*/

function createTree(list, parent) {
  let parentLookup = {};
  list.forEach((element) => {
    if (parentLookup[element.parent]) {
      parentLookup[element.parent].children.push(element.id);
    } else {
      parentLookup[element.parent] = makeNode(element.parent);
    }
  });
}

function makeNode(name) {
  return {
    name,
    children: [],
  };
}





function createTree3(categories, parent) {
  let node = {};

  categories
    .filter((item) => item.parent === parent) //O(n)
    .forEach((item) => {
      node[item.id] = createTree3(categories, item.id);
    });
  return node;
}

console.dir(JSON.stringify(createTree3(categories, null)));
