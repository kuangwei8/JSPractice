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

