/*const body =document.querySelector('body')
const div =document.createElement('div')
div.style.height='500px'
div.style.backgroundColor=colores[Math.floor(Math.random() * colores.length)];
const parrafo=document.createElement('p')
parrafo.textContent='soy un parrafo'
parrafo.style.fontSize='30px'
body.appendChild(div)
div.appendChild(parrafo)*/
const colores = ["red", "purple", "cian", "orange", "green","pink","#C23A1D","#1DC281","gold","white"]

const body =document.querySelector('body')
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div")

  div.style.height = "100px"
  div.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]

  div.textContent = i + 1

  
body.appendChild(div)
}





    /*parrafo.style.textAlign='center'
    parrafo.style.fontSize='20px'
    parrafo.style.fontWeight='bold'
    div.appendChild(parrafo)
    body.appendChild(div)*/


