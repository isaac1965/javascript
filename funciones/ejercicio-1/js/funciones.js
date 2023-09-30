const suma = function(num1, num2){
    let res= num1 + num2;
    return res;
}

let resultado = suma(5,7);
document.write(resultado);

function sum(n1, n2){
    let res= n1 + n2;
    return res;
}

document.write("<br>");

let result = suma(20,10);
document.write(result);

//funciones tipo arrow o fleclas
const saludar = (nombre) => {
    document.write("Hola como estas? " + nombre);
}

document.write("<br>");
saludar("isaac");

