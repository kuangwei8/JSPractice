let arr = [3,4,9];
let n = 3; 

let arr1 = arr.map(function (x) {
    if (x % 2 === 0) {
      return x - 2*n;
    } else {
      return x + 2*n;
    }
})

console.log(arr1); 