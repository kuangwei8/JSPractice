//Remove Duplicates from an Array
function removeDups(arr) {
  return [...new Set(arr)];
}

//Format Number with Comma(s) Separating Thousands

function formatNum(num) {

  let newNum = num.toString();

  if (newNum.length < 4) {
    return newNum;
  }
  let output = "";
  let counter = 0;
  for (let i = 1; i <= newNum.length; i++) {
    output += newNum[newNum.length - i];
    counter++;
    if (counter === 3) {
      output += ',';
      counter = 0;
    }
  }
  return output.split('').reverse().join('');

}


//Reverse the Number
//This challenge is about using two operators that are related to division.
//If the number is negative, treat it like it's positive.

function rev(n) {
  return Math.abs(n).toString().split('').reverse().join('')
}


//Odd Up, Even Down — N Times Map

function evenOddTransform(arr, n) {
  return arr.map(x => (x % 2 == 0) ? x - 2 * n : x + 2 * n);
}
// let arr = [3, 4, 9];
// let n = 3;

// let arr1 = arr.map(function (x) {
//   if (x % 2 === 0) {
//     return x - 2 * n;
//   } else {
//     return x + 2 * n;
//   }
// })

// console.log(arr1); 

//Array of Multiples

function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i < length + 1; i++) {
    arr.push(num * i);
  }
  return arr;
}

Array.from({length: length}, (_, i) => num*(i+1));

//Capitalize the Names
function capMe(arr) {
  let arr1 = arr.map(function (ele) {
    let ele1 = ele.split('');
    return ele1[0].toUpperCase() + ele1.slice(2. - 1).join('').toLowerCase();
  })
  return arr1;
}

//capMe(['cat', 'dog', 'fish']);