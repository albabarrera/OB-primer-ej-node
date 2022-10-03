let i = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let factorial = 1;

while (i < numbers.length) {
    let number = numbers[i];
    factorial *= number; 
    i++;
}
console.log(factorial);