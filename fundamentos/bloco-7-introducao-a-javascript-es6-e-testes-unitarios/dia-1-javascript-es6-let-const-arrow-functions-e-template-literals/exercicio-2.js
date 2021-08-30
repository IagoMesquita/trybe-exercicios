const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;                //GABARITO TRYBE
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉


//BÕNUS Array.sort()

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log((`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`))
// A função compare() aceita dos argumentos, o a e o b. O método sort() classificará os elementos com base no valor de retorno da função compare() seguindo as seguintes regras:
// Se compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.
// Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.
// Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas.

//fonte: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a