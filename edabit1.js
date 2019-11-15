// Equality of 3 Values

function equal(a, b, c) {
  let count = 0;
  if (a === b || a === c || b === c) count = 2;
  if (a === b && a === c) count = 3;
  return count;
}

// Xs and Os, Nobody Knows

function XO(str) {
  let newStr = str.toLowerCase();
  let countO = 0;
  let countX = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'x') {
      countX++;
    }
    else if (newStr[i] === 'o') {
      countO++;
    }
  }
  return countO === countX;
}

//Make a Circle with OOP
class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() { return this.sideA * this.sideB };
  getPerimeter() { return (this.sideA + this.sideB) * 2 };
}


class Circle {
  constructor(radius, PI) {
    this.radius = radius;
    this.PI = Math.PI;
  }
  getArea() { return this.PI * this.radius * this.radius };
  getPerimeter() { return 2 * this.PI * this.radius };

}
