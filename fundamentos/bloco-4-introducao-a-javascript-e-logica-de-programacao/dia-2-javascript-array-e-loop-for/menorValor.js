let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let menor = numbers[0];

for (let i = 0; i < numbers.length; i +=1 ){
    if(numbers[i] < menor){
      menor = numbers[i]  
    }
}

console.log("Menor valor do array é: " + menor );
