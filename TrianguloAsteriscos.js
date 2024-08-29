
let numero = 6;

if (numero > 0) {
  let triangulo = "";
  
  for (let i = 1; i <= numero; i++) {
    triangulo += "*".repeat(i) + "\n";
  }

  console.log(triangulo);
} else {
  console.log("Por favor ingresa un número entero positivo.");
}