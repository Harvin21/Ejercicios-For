//Array con los números
const numeros = [5, 9, 10, 12];

//Suma de los números en el array
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
//Calcula la media aritmética
const media = suma / numeros.length;

console.log(`La media es ${media}`);
