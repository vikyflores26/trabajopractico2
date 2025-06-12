/*
let alumnos = ["bauti","benja","facu"]
for ( let indice = 0; indice < alumnos.length; inidce++){
    console.log(alumnos[indice])
}
*/

let frutas = ["frutilla","banana","mandarina"]
console.log(frutas)

frutas.push("manzana");
console.log(frutas[frutas.length -1]);

frutas.unshift("pera");
console.log(frutas[0]);

frutas.pop("manzana");
console.log(frutas);

let nombres = ["clara","Mia","Victoria"];
console.log(nombres.length);

nombres.push("bauti");
console.log (nombres);
console.log(nombres,length);

let numeros = ["1","2","3","4"];
for (let numeros = 0; numeros < numeros.length; numeros++) {
    console.log = array[numeros];
}
/*4*/
let arreigloNumeros = ('1','2','3','4','5')
let suma = 0;
for (let i = 0; i < arreigloNumeros.length; i++) {
    suma +=arreigloNumeros[i];
    
}
console.log('la suma es'+ suma)

/*5*/
let palabras = [];
let palabrasUsuario = prompt('escribe 5 palabras')
palabras.push(palabrasUsuario);
console.log(palabras)

