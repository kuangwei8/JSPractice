function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;
  let sum1 = parseInt(firstInteger) + parseInt(secondInteger);
  console.log(sum1);
  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;
  let sum2 = parseFloat(firstDecimal) + parseFloat(secondDecimal);
  console.log(sum2);
  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank ';
  let sum3 = firstString + secondString
  console.log(sum3);
}

performOperation(2, 3.4, "hello");