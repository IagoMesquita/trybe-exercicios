let n = 5;
let ast = '*';
let linAst = '';

for(i = 1; i <= 5; i += 1){
    linAst = linAst + ast
    console.log(linAst);   
}

//Triângulo com mais espçamento.
//Tentando fazer a questão 3, consegui dar 
//mais epaço entre os asterisco.

let n = 5;
let ast = '*';
let linAst = '';

for(let i = 1; i <= 5; i += 1){
    linAst = linAst + ast 
    
    linAst = linAst + " "  
    console.log(linAst);  
}