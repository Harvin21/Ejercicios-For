let numero = 7

if (numero > 0) {
  let suma = 0; 
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }

  console.log(`Los enteros de 0 a ${numero} suman ${suma}`);
} else {
  console.log("Por favor ingresa un número entero positivo mayor que 0.");
}