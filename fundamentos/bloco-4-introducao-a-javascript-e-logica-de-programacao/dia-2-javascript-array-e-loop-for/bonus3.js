let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = 0;
let numbersMult = [];

for (let i = 0; i < numbers.length-1; i += 1){
     mult = numbers[i] * numbers[i+1];
     numbersMult.push(mult); 
}
     mult = numbers[numbers.length-1] * 2;
     numbersMult.push(mult)

console.log(numbersMult);