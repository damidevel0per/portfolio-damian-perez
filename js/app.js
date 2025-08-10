//ANIMACION HERO
let presentacionHero = document.getElementById('presentacionHero');
let presentacion = 'Desarrollador viviendo en Entre Ríos, Argentina.';
let velocidad = 50;
let i = 0; 
//Esta funcion recorre el string presentacion y lo va insertando en el html del hero
function animacionEscribir(){
    
    if(i < presentacion.length){
        presentacionHero.innerHTML += presentacion.charAt(i);
        i++;
        setTimeout(animacionEscribir, velocidad);
    }
}

//Acá se invoca la funcion para animar el texto del hero
animacionEscribir();

//ALERTA AL ENVIAR INFORMACION EN FORMULARIO CONTACTO
let btnEnviar = document.getElementById('btnEnviar');

//Evento al hacer click en enviar en el formulario de contacto
btnEnviar.addEventListener('click', mensajeAlContactarse)

//Funcion de alerta
function mensajeAlContactarse(){
    alert('Ups 😓 Esta funcionalidad todavia no está disponible')
}
