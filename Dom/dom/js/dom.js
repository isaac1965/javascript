//Seleccionando por Id
//let showTag = document.getElementById("vim");
//Seleccionando por etiqueta, no se usa mucho.
let ShowTag1 = document.getElementsByTagName("div");
let ShowTag2 = document.querySelector(".titleWorld");
const ShowTag3 = document.querySelector(".gato");
//document.write(showTag + "<br>");
document.write(ShowTag1 + "<br>");
document.write(ShowTag2 + "<br>");
let Modificando = ShowTag3.setAttribute("type", "color");
let Modificando2 = ShowTag3.getAttribute("type");
document.write("valor de atributo input: " + Modificando2 + "<br><br>");
ShowTag3.removeAttribute("type");
ShowTag3.removeAttribute("name");
//atributos globales  
//Contenteditable = true | false
// dir - indica la direccionalidad del texto = ltr | rtl
//// hidden = true | false
//tabindex = 0,1,2 para hacer foco en los elementos
//title = "hola como estas" contiene un texto informativo
const input = document.querySelector(".input-normal");
//atributos inputs
//className para modificar la clase del input
input.setAttribute("class", "nada me pregunto"); 
//value para modificar el valor del input 
//type para modificar el tipo input
input.type = "number";
//accept funciona para el type=file para que acepte e.g image/.png
input.accept = "/img/.jpg";
//form nos permite ejercutar un input dentro de un form
//placeholder para modificar el valor del placeholder
input.placeholder  = "Ingresa tu numero";
//minlength funciona para indicar la cantidad de caracteres que debe llevar un input
input.minLength = "5";
//required funciona para obligar que el campo sea llenado
input.required = "";
const tag = document.querySelector(".titleWorld");
tag.style.color = "blue";
tag.style.backgroundColor = "#262626";
tag.style.width = "25%";
//Metodos de classList
//classList.add() anade una clase
tag.classList.add("grande");
//classList.remove(); elimina la clase que le pases
tag.classList.remove("grande");
//classList.item() devuelve el indice de la clase indicada ;
let item = tag.classList.item("1");
document.write(item + "<br>");
//classList.constains(); verifica si tiene la clase indicada;
let item1 = tag.classList.contains("manzana");
document.write(item1 + "<br>");
// classList.replace(); reemplaza la clase por otra, devuelve true || false;
let item2 = tag.classList.replace("durazno", "pera");
//classList.toggle(); si no tiene una clase especifica la agrega, sino la elimina;
let item3 = tag.classList.toggle("manzana");
//Obtencion y modificacion de elementos
let titulo = document.querySelector(".titulo");
//textContet devuelve el texto que esta en la etiqueta
let resultado = titulo.textContent;
//innterHTML devueve el texto y si dentro del tag hay otra tag con texto tambien lo devuelve
let resultado2 = titulo.innerHTML;
//outerHTML devuelve la etiqueta que contiene el texto, el texto y las tags que contienen texto dentro  de la misma
let resultado3 = titulo.outerHTML;
document.write(resultado);
alert(resultado2);
alert(resultado3);
//Creacion de elementos
createElement();
const content = document.querySelector(".contenedor");
let item4 = document.createElement("LI");
