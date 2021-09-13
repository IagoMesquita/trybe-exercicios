const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];
// Conta a quantidade de letras 'A' e 'a'. No meu código utileixei além do reduce o forEach.
function containsA() {
  const letras = names.reduce((acc, letras) => {
    return acc.concat(letras.split(""));
  }, []);
  let letraA = 0;
  const countA = letras.forEach((letra) => {
    if (letra === "A" || letra === "a") {
      return (letraA += 1);
    }
  });
  return letraA;
}

assert.deepStrictEqual(containsA(), 20);

console.log(containsA());
