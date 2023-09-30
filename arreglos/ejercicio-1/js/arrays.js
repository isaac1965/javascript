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
let ram = pc1["20 gb"];
let grafica = pc1["Integrada"];
let frase= `Te llamas ${name} y tienes un PC con procesador ${procesador} con una ram de ${ram} y una grafica ${grafica}`;

document.write(frase);

