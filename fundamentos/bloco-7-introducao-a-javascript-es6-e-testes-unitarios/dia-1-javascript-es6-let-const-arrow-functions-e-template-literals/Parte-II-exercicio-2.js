const longestWord = (phrase) => {
    let bigWord = "";
    let word = phrase.split(" ");
  for (let i in word) {
    if (word[i].length > bigWord.length) {
      bigWord = word[i];
    }
  }
  return bigWord;
};
console.log(longestWord("Bem vindo, João Gabriel !"));





