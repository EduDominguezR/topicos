const caracteres = 'Zapatos de Gucci, pantalón Versace, chamarra de piel,Perfume de Dolce Gabbana y mañana traigo mucha lanacdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()_-+=[]{}|;:,.<>?'

for (let i = 0; i < 5; i++) {
  const tamañoMinimo = 50
  const tamañoMax = 100
  const tamaño = Math.floor(Math.random() * (tamañoMax - tamañoMinimo + 1)) + tamañoMinimo
  let texto = ''
  for (let e = 0; e < tamaño; e++) {
    texto += caracteres[Math.floor(Math.random() * caracteres.length)]
  }
  console.log(`Párrafo ${i + 1}: ${texto}`)
  console.log(`tamaño: ${texto.length} caracteres`)
  console.log()
}
