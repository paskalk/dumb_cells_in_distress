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

ll1.next = ll2;
ll2.prev = ll1;
ll2.next = ll3;
ll3.prev = ll2;
ll3.next = ll4;
ll4.prev = ll3;
ll4.next = ll5;
ll5.prev = ll4;

//console.dir(ll1);

console.log(reverse(ll1));

function reverse(head) {
    // if null; exit

    // new obj

    // loop through it and get nodes + next

    // loop and get random pointer set in an array

    //
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
