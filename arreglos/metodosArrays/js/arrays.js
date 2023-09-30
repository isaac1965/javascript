// Arreglos normales en javascript
//let frutas=["cambur", "manzana", 5, 6, "pera"];
//alert(frutas[2]);

// Arreglos asociativos
let pc1 = {
    nombre:"Isaac Maldonado",
    procesador: "Ryzen 3",
    ram: "20GB",
    grafica: "Integrada"
};

//alert(pc1["ram"]);

let name = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let grafica = pc1["grafica"];
let frase= `Te llamas ${name} y tienes un PC con procesador ${procesador} con una ram de ${ram} y una grafica ${grafica} <br>`;

document.write(frase);


let nombre = ["isaac", "cristal", "lulys"];
document.write(nombre + "<br>");
//pop() elimina el ultimo elmento de un array
let resultado = nombre.pop();
document.write(resultado + "<br>");
document.write(nombre + "<br>");
//shitf() elimina el primer elmento de un array
let frutas = ["manazana", "pera", "uva"];
document.write(frutas + "<br>");
let resultado2 = frutas.shift();
document.write(resultado2 + "<br>");
document.write(frutas + "<br>");
//push(); agrega un elemento al final de un arreglo, se pueden agregar mas de uno
let animales = ["leon", "cebra", "caballo"];
document.write(animales + "<br>");
let resultado3 = animales.push("jirafa", "asno");
document.write(animales + "<br>");
//reverse() invierte el orden de los numeros
let numeros = [1,2,3,4,5];
document.write(numeros + "<br>");
let resultado4 = numeros.reverse();
document.write(resultado4 + "<br>");
//unshift() agrega elementos al principio de un array, pueden ser mas de unos
let resultado5 = numeros.unshift(40,50);
document.write(resultado5 + "<br>");
document.write(numeros + "<br>");
//sort(); ordena numeros de menor a mayor y letras en orden alfabetico
let numeros1 = [5,9,8,3,7];
let letras = ["a","z", "b", "k", "w", "j"];
numeros1.sort();
letras.sort();
document.write(numeros1 + "<br>");
document.write(letras + "<br>");
//splice() indicar la posicion donde iniciar a eliminar un elemento y donde terminara de eliminar
let letras1 = ["a", "b", "c", "d", "e", "f", "g"];
letras1.splice(1,3, "isaac", "cristal", "lulys");
document.write(letras1 + "<br>");
//join(); convierte un array a una cadena de texto con la particularidad de que puedes agregar separadores
let palabras = ["cristal", "casa", "empresa", "pais"];
let resultado6 = palabras.join(" - ");
document.write(resultado6 + "<br>");
//slice(); elimina elementos de un array sin sin incluir el ultimo que se especifica
let words = ["casa", "mansion", "apartamento", "pethouse", "rancho"];
let resultado7 = words.slice(0,2);
document.write(resultado7 + "<br>");
