let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let i = 0; i < numbers.length; i +=1 ){
    if(numbers[i]%2 == 1){
        impar += 1
    } 
}
//Esse último if só deu certo com os 3 iguais ===.//
if (impar === 0){
    console.log("Nenhum valor ímpar encontrado!");
}
else{
    console.log("Existem " + impar + " valores ímpares.");
}
