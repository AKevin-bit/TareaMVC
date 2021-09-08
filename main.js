const nombre=document.getElementById("nombre")
const edad=document.getElementById("edad") 
const deporte=document.getElementById("deporte")
const respuesta=document.getElementById("Respuesta")

const showMessage=document.getElementById("send")

showMessage.addEventListener('click',(e)=>{
    e.preventDefault()
    
    console.log(nombre.value)
    console.log(edad.value)
    console.log(deporte.value)

    respuesta.innerHTML=`Respuesta: ${nombre.value}, ${edad.value}, ${deporte.value} `
    
})