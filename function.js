let factorial = function(num) {
  let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result = i * result;
  }
  return result;
};
