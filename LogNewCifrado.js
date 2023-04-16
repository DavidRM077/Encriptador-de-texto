var textbox1 = document.getElementById("txtprincipal");
var textbox2 = document.getElementById("salidatxt");
var copiarbtn = document.getElementById("copiar")
var button = document.querySelector("button");
var button2 = document.getElementById("butoncito")

let diccionario = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}
    
let diccionario2 = 
{
    'ai' : "a",
    'enter' : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u"
}

function encriptar ()
{

    
    var textosacado = textbox1.value.replace(/[aeiou]/g,i=> diccionario[i])
    textbox2.value = textosacado;
   esconder();
   textbox1.value = "";
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Encriptado',
    showConfirmButton: false,
    timer: 1500
  })
    
}


function descrinptar () 
{
    
    var textosacado = textbox1.value
    .replace(/ai/g,i=> diccionario2[i])
    .replace(/enter/g,i=> diccionario2[i])
    .replace(/imes/g,i=> diccionario2[i])
    .replace(/ober/g,i=> diccionario2[i])
    .replace(/ufat/g,i=> diccionario2[i])
    textbox2.value = textosacado;
    esconder()
    textbox1.value = ""
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Desencriptado',
        showConfirmButton: false,
        timer: 1500
      })
    
}




function esconder ()
{
  
   let escondertodo = document.getElementById("dcx")
   escondertodo.style.display = "none"
   let mostrar = document.getElementById("salidatxt")
   mostrar.classList.remove("salidademensaje")
  mostrar.classList.add("mejorado")
  copiarbtn.classList.remove("btn3")
  copiarbtn.classList.add("btn3mejorado")
  

}

function copiado () 
{
    navigator.clipboard.writeText(textbox2.value)
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Copiado',
        showConfirmButton: false,
        timer: 1500
      })
}





button.onclick = encriptar;

button2.onclick = descrinptar;



copiarbtn.onclick = copiado;

/* var textosacado = input.value.replace(/[aeiou]/gi, "**")
 */

