# script1
antes de empezar con el script lo primero que hacer es enlazarlo con el html '''html <script src="contenedores.js" defer></script>'''
una vez ya enlazado lo primero seria declarar un arreglo nombrado  colores en el estaran  10 colores 
```JavaScript 
const colores = ["red", "purple", "cian", "orange", "green","pink","#C23A1D","#1DC281","gold","white"]
```
 posteriormente seria declarar el elemento body  se utilizara el document.querySelector para seleccionaar el elemento body que se encuentra en el html 
```JavaScript
const body = document.querySelector('body')
``` 
para crear los contenedores mas rapido se crearia un ciclo *for* que se repitira 10 veces dentro de este mismo ciclo se le dara vida a los *div's*
se le establecera una altura de 100 pixeles usando el:
```JavaScript
div.style.height = "100px"
```
lo siguiente sera que se elija un color aleatorio que esta declarado en el arreglo 
se utiliza una linea de codigo que se vio en clase que seria el siguiente :
```JavaScript 
colores[Math.floor(Math.random() * colores.length)]
``` 
posteriomente se le asignara el backgroundColor del div que quedaria asi:
```javaScript
div.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]
```
en el textContext se establece un contador del bucle *i+1*:
```
  div.textContent = i + 1
```
y para finalizar se adjunta el div en el elemento body 
```JavaScript
body.appendChild(div)
```
el resultado quedaria de la siguiente manera
# HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="contenedores.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>DOM</title>
</head>
<body>
</body>
</html> 
```
# JavaScript
```JavaScript
const colores = ["red", "purple", "cian", "orange", "green","pink","#C23A1D","#1DC281","gold"]

const body =document.querySelector('body')
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div")

  div.style.height = "100px"
  div.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]

  div.textContent = i + 1

  
body.appendChild(div)
}
```
video de referencis (markdown)
https://www.youtube.com/watch?v=oxaH9CFpeEE
