function fibonacci(num) {
  let a = 0,
    b = 1,
    c = num;

  let arrayNums = [1];

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
    arrayNums = [...arrayNums, c];
  }

  return arrayNums;
}

const array = fibonacci(6);
console.log(fibonacci(6));
