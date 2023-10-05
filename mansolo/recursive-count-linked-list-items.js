const ll1 = {
  data: "LL1",
};

const ll2 = {
  data: "ll2",
};

const ll3 = {
  data: "LL3",
};

const ll4 = {
  data: "ll4",
};

const ll5 = {
  data: "LL5",
};

//ll1.next = ll2;
ll2.rand = ll1;
ll2.next = ll3;
ll3.rand = ll2;
ll3.next = ll4;
ll4.rand = ll3;
ll4.next = ll5;
ll5.rand = ll4;

//console.dir(ll1);

console.log(reverse(ll1));

function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
}

function traverse(node) {
  if (!node) {
    return 0;
  }

  let count = 0;
  count++;
  node.visited = true;

  if (node.next) {
    count += traverse(node.next);
  }

  //   if (node.rand) {
  //     count += traverse(node.rand);
  //   }
  return count;
}

// console.log(
//   traverse({
//     data: "x",
//     next: {
//       data: "y",
//       next: {
//         data: "z",
//         next: {
//           data: "a",
//           next: null,
//         },
//       },
//     },
//   })
// );

//console.dir(ll1, { depth: null });
console.log(traverse(ll3));
