let custoProduto = 89;
let valorVenda = 115;

let custoTotalProduto = custoProduto * 1.2;
let lucro = (valorVenda - custoTotalProduto) * 1000;

if(custoProduto <= 0 || valorVenda <= 0){
    console.log("Erro: Valor inválido");
}
else{
    console.log("Lucro obtido de: R$" + Math.round(lucro) + ",00" );
}

// -- Math.round()-- para deixar com 2 casas decimmais// 
