function getSecondLargest(nums) {
  // Complete the function
  function sortNumber(a, b) {
    return a - b;
  }

  let sortedArr = nums.sort(sortNumber);
  let largest = sortedArr[sortedArr.length - 1];

  for (let i = 2; i < sortedArr.length; i++) {
    if (sortedArr[sortedArr.length - i] < largest) {
      return sortedArr[sortedArr.length - i];
    }
  }
}

console.log(getSecondLargest([1,2,3,8,8,8]));