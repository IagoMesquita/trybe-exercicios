let chessPiece = "dama";
// -- str.toLowerCase() -- é a sintaxe. Retorna o valor da string que foi chamada convertido para minúsculo.

switch(chessPiece.toLowerCase()){
    case "rei":
      console.log("Todas as direções-1 casa")
      break;
    case "rainha":
      console.log("Horizontal, Vertical e Diagonal")
      break;  
    case "bispo":
      console.log("Diagonal")
      break;
    case "cavalo":
      console.log("Em L")
      break;
    case "torre":
      console.log("Horizontal e Vertical")
      break;
    case "peão":
      console.log("Frente - 1 casa e Diagonal- captura")
      break;
    default:
        console.log("Erro: Peça invalida")        
};
