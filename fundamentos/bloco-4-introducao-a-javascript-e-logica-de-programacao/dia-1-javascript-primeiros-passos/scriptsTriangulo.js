let anguloA = 45;
let anguloB = 45;
let anguloC =-90;

let angTri = anguloA + anguloB + anguloC;
let angPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angPositivos){
    if (angTri == 180){
        console.log("True");
    }
    else if(angTri != 180){
        console.log("False");
    }
}    
    else{
        console.log("Erro:algum ângulo inválido")
    }