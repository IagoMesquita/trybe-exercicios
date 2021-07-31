let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[secondIndex] > numbers[index]) {        //<-- inverti a ordem para e troquei  
        let position = numbers[secondIndex];              //o sinal pra não me confundir;.
        numbers[secondIndex] = numbers[index];           //<-- No position atribui a posição 0      
        numbers[index] = position;                       //e consequentemente invertei todo o resto.
       }
    }
  }
  console.log(numbers)


//Artigo DevFuria 
// // Vamos ter que percorrer todo o vetor, logo:
// for (k = 1; k < n; k++) {
//     // Dentro de cada iteração
//     // percorremos novamente o vetor
//     // em busca dos pares
//     for (j = 0; j < n - k; j++) {
//         // Comparamos
//         if (vetor[j] > vetor[j + 1]) {
//             // swap (trocamos)
//             aux          = vetor[j];
//             vetor[j]     = vetor[j + 1];
//             vetor[j + 1] = aux;
//         }
