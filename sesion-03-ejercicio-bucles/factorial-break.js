let i = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let factorial = 1;

while (true) {

    if (i < numbers.length){
        let number = numbers[i];
        factorial *= number; 
    }
    if (i > numbers.length) {
        break;
    }
    i++;
}
console.log(factorial);