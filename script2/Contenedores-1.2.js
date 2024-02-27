const colores = ["red", "purple", "cyan", "orange", "green", "yellow", "blue", "pink",
                 "gray", "brown", "black", "white", "maroon", "fuchsia", "lime", "turquoise",
                 "violet", "salmon", "beige", "gold", "red", "#168056", "#1DC281","#A47EA0","#B1B73B"]


const usados = []
const body =document.querySelector('body')

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div")
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


  
