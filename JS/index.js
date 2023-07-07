function login(){
    const nick = document.getElementById('nick')
    const contrasenia= document.getElementById('pass')

    //console.log( nick.value )
    console.log( document.getElementById('nick').value )
    console.log( contrasenia.value)
}

function login2(){
    const formulario = document.getElementById('Form')

    const correo = formulario.elements.correo.value
    const pass= formulario.elements.passw.value

    console.log("El correo es: "+ correo)
    console.log("La contraseña es: " + pass)
    alert("El correo es: "+ correo)
}

function chbox(){

    const checkbox1= document.getElementById('java')
    const checkbox2= document.getElementById('python')
    const checkbox3= document.getElementById('go')
    const checkbox4= document.getElementById('ruby')

    const valores=[]

   if( checkbox1.checked == true ){
        valores.push( checkbox1.value)
   }

   if (checkbox2.checked){
        valores.push(checkbox2.value)
   }

   if ( checkbox3.checked){
        valores.push(checkbox3.value)
   }

   if( checkbox4.checked){
         valores.push(checkbox4.value)
   }

    console.log(valores)
    
}


function radio(){
    const rad1= document.getElementById('cue')
    const rad2= document.getElementById('uio')
    const rad3= document.getElementById('gye')
   // const rad4= document.getElementById('ten')

    let valor;

    if ( rad1.checked){
        valor= rad1.value
    }

    if( rad2.checked){
        valor = rad2.value
    }

    if( rad3.checked){
        valor = rad3.value
    }
    
    if( document.getElementById('ten').checked ){
        valor = document.getElementById('ten').value
    }

    console.log(valor)
    alert(valor)
}


function selector(){
    const valorSeleccionado= document.getElementById('nacionalidad')

    console.log(valorSeleccionado.value)
    alert(valorSeleccionado.value)

}

function guardar(){
////////////// RADIO ///////////
    const radM = document.getElementById('M')
    const radF = document.getElementById('F')

    let valor;

    if ( radM.checked == true){
        valor= radM.value;
    }
    if ( radF.checked ){
        valor = radF.value
    }
/////////////// FIN RADIO/////////////////


////////// SELECTOR /////////////////////
    const valorSeleccionado = document.getElementById('edad')
//////////////////////////////////////////    

/////////// INPUT TEXT (CUADRO DE TEXTO) //////////////
    const nombre= document.getElementById('nombre')
/////////////////////////////////////////////////////

    alert("La edad de "+ nombre.value +" es "+ 
    valorSeleccionado.value + " y su género es: "+ valor)
}