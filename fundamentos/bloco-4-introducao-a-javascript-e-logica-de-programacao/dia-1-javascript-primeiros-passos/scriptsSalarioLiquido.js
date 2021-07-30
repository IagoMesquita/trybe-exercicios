let salarioBruto = 5271;

if (salarioBruto > 0 && salarioBruto <= 1556.94 ){
    salarioINSS = salarioBruto * .92;
}
else if (salarioBruto <= 2594.92){
    salarioINSS = salarioBruto * .91;
}
else if (salarioBruto <= 5189.82){
    salarioINSS = salarioBruto * .89;
}
else {
    salarioINSS = salarioBruto - 570.88;
}


if (salarioINSS <= 1903.98){
    salarioLiq = salarioINSS;
}
else if (salarioINSS <= 2826.65){
    descontoIR = (salarioINSS * .075) - 142.8;
}
else if (salarioINSS <= 3751.05){
    descontoIR = (salarioINSS * .15) - 354.8; 
}
else if (salarioINSS <= 4664.68){
    descontoIR = (salarioINSS * .225) - 636.13;
}
else {
    descontoIR = (salarioINSS * .275) - 869.36;
}

salarioLiq = salarioINSS - descontoIR 

console.log("Salário Liquido: R$ " + salarioLiq.toFixed(2));

