# *Script3*
igual que el anterior antes de empezar se enlaza en el html 
```html
 <script src="parrafos-inteligente.js" defer></script>
 ```
 Se  declara  un arreglo llamado caracteres que contiene un pedazo de una cancion y caracteres
```JavaScript
const caracteres = 'Zapatos de Gucci pantalón Versace chamarra de pielPerfume de Dolce Gabbana y mañana traigo mucha lana cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()_-+=[]{}|;:,.<>?'
```
se crea un ciclo *for* que se repitira 5 veces dentro de este mismo ciclo
estaran 4 variables dos de ellas son tamañoMinimo y tamañoMax su valor es de 50 y 100 ,la otra variable es tamaño que en esta se le asigna 
Math.floor(Math.random() * (tamañoMax - tamañoMinimo + 1)) + tamañoMinimo
 el +1 es para que sea igual a tamañoMinimo tambien se declara otra variable llamada texto y le asigna un valor vacío (una cadena vacía)
 ```JavaScript
for (let i = 0; i < 5; i++) {
  const tamañoMinimo = 50
  const tamañoMax = 100
  const tamaño = Math.floor(Math.random() * (tamañoMax - tamañoMinimo + 1)) + tamañoMinimo
  let texto = '';
 ```
 despues va otro ciclo for  que itera un número específico de veces basado en el valor de la variable tamaño.
 let e = 0 inicializa un contador de ciclo  e que comienza en 0.
e < tamaño El ciclo continúa mientras e sea menor que el valor de tamaño,
e++ incrementa el contador e en 1 después de cada iteración del ciclo.
dentro del ciclo  estara la variable caracteres hace referencia a la cadena predefinida que contiene varios caracteres. luego como en el script dos se agrega la expresión 
Math.floor(Math.random() * caracteres.length):  genera un número entero aleatorio entre 0 y el tamaño de la cadena caracteres 
```JavaScript
  for (let e = 0; e < tamaño; e++) {
    texto += caracteres[Math.floor(Math.random() * caracteres.length)]
  }
```
imprimir parrafo y tamaño
```JavaScript
console.log(`Párrafo ${i + 1}: ${texto}`)
  console.log(`tamaño: ${texto.length} caracteres`)
```
# HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="parrafos-inteligente.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>DOM</title>
</head>
<body>
</body>
</html> 
```
# JavaScript
```JavaScript
const caracteres = 'Zapatos de Gucci, pantalón Versace, chamarra de piel,Perfume de Dolce Gabbana y mañana traigo mucha lanacdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()_-+=[]{}|;:,.<>?';

for (let i = 0; i < 5; i++) {
  const tamañoMinimo = 50
  const tamañoMax = 100
  const tamaño = Math.floor(Math.random() * (tamañoMax - tamañoMinimo + 1)) + tamañoMinimo
  let texto = '';
  for (let e = 0; e < tamaño; e++) {
    texto += caracteres[Math.floor(Math.random() * caracteres.length)]
  }
  console.log(`Párrafo ${i + 1}: ${texto}`)
  console.log(`tamaño: ${texto.length} caracteres`)
}
```
