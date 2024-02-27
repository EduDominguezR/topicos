# *Script2*
igual que el anterior antes de empezar se enlaza en el html 
```html
 <script src="Contenedores-1.2.js" defer></script>
 ```
Se  declara  un arreglo llamado colores que contiene 25 opciones de color
```JavaScript
const colores = ["red", "purple", "cyan", "orange", "green", "yellow", "blue",     "pink","gray", "brown", "black", "white", "maroon", "fuchsia", "lime", "turquoise", "violet", "salmon", "beige", "gold", "#835e62", "#168056", "#1DC281","#A47EA0","#B1B73B"]
```
siguiente paso seria crear un arreglo vacío llamado usados para almacenar los colores que ya se han asignado a los divs para evitar duplicados.
```JavaScript
const usados = []
```
posteriormente seria declarar el elemento body  se utilizara el document.querySelector para seleccionaar el elemento body que se encuentra en el html 
```JavaScript
const body = document.querySelector('body')
``` 
para crear los contenedores mas rapido se crearia un ciclo *for* que se repitira 10 veces dentro de este mismo ciclo se le dara vida a los *div's* tambien se utilizar document.createElement para que se cree el div y se le establecera una altura de 100 pixeles usando el:
```JavaScript
const div = document.createElement("div")
div.style.height = "100px"
```
para verificar que el color no se repita se declara una variable color para inciar  
```JavaScript
 let color
```
despues se crea un bucle *do-while* dentro de este a la variaboe color se le asigna un color del arreglo colores y para que sea aleatorio se incorpora [Math.floor(Math.random() * colores.length)]
todo eso estara en el do 
en while se utiliza el metodo **incluides** para comprobar si el color ya esta en el arreglo usados y para agregar el valor de la variable color al final del arreglo **usados** seria  con un push
```JavaScript
  color = colores[Math.floor(Math.random() * colores.length)]
  } while (usados.includes(color))
  usados.push(color)
```
posteriomente a la variable color se le asigna al backgroundColor del div:
```javaScript
 div.style.backgroundColor = color
```
en el textContext se establece un contador del bucle *i+1*:
```
  div.textContent = i + 1
```
y para finalizar se adjunta el div en el elemento body 
```JavaScript
body.appendChild(div)
```
# HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="Contenedores-1.2.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>DOM</title>
</head>
<body>
</body>
</html> 
```
# JavaScript
```JavaScript
const colores = ["red", "purple", "cyan", "orange", "green", "yellow", "blue", "pink",
                 "gray", "brown", "black", "white", "maroon", "fuchsia", "lime", "turquoise",
                 "violet", "salmon", "beige", "gold", "#835e62", "#168056", "#1DC281","#A47EA0","#B1B73B"]


const usados = []
const body =document.querySelector('body')

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.style.height = "100px"

  let color
  do {
    color = colores[Math.floor(Math.random() * colores.length)]
  } while (usados.includes(color))
  usados.push(color)

  div.style.backgroundColor = color
  div.textContent = i + 1

  body.appendChild(div)
}
```
