/* 
    function to print names of children in a family


*/

const sampleTree = {
  name: "Bing",
  children: [
    {
      name: "Bop",
      children: [],
    },
    {
      name: "Boopty",
      children: [
        {
          name: "Blump",
          children: [],
        },
        {
          name: "boohoo",
          children: [],
        },
      ],
    },
  ],
};

function printChildren(tree) {
  if (!tree) return;

  if (tree.children.length === 0) {
    return;
  }

  tree.children.forEach((child) => {
    console.log(child.name);
    printChildren(child);
  });
}

printChildren(sampleTree);
