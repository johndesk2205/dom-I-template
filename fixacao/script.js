let paragrafo = document.getElementById("paragrafo")
console.log(paragrafo.innerHTML)


const texto = document.getElementById("texto")
 console.log(texto.value)

 function imprimir(){
    console.log(document.getElementById("texto").value)
 }

function substituir(){
    paragrafo.innerHTML = texto.value
    texto.value = ""
}
