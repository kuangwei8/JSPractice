
// function countOnes(i) {

//   let num = i;
//   let baseArray = [1];

//   for (let j = 2; j < num; j *= 2) {
//     baseArray.unshift(j);
//   }

//   let binaryArr = [];
//   let remainder = num;

//   for (let k = 0; k < baseArray.length; k++) {

//     if (remainder >= baseArray[k]) {
//       remainder = num % baseArray[k];
//       binaryArr.unshift(1);
//     }
//     else if (remainder < baseArray[k]) {
//       binaryArr.unshift(0);
//     }

//   }

//   console.log(binaryArr);
//   const reducer = (a, b) => a + b;
//   console.log(binaryArr.reduce(reducer));

// }

function countOnes(i) {
  let count = 0;
  while (i > 0) {
    if (i % 2 == 1) count++;
    i = Math.trunc(i / 2);
  }
  return count;
}

console.log(countOnes(101));