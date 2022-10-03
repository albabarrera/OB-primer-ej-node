let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let factorial = 1;

for (let i = 0; i < numbers.length; i++) {
   let number = numbers[i];
   factorial *= number;  
}

console.log(factorial);