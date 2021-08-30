const calcFatorial = (numero) => {
  let result = 1;
  for (let i = 2; i <= numero; i += 1) {
    result *= i;                                 //Atribuição de multiplicação	x *= y  / x = x * y
  }                                              //MDN WebDocs

  return result;
};

console.log(calcFatorial(7));


//Fazendo por --Recursiva-- GABARITO TRYBE

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(10));