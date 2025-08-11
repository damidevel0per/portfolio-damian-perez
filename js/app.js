//------CAMBIAR DE TEMA LA PAGINA-------

let colorPagina = document.getElementById('colorPagina')
let colorPaginaMobile = document.getElementById('colorPaginaMobile')
let body = document.body;
let inicio = document.getElementsByClassName('hero')[0]
let letrasHero = document.getElementsByClassName('info-hero')
let proyectos1 = document.getElementsByClassName('proyectos')[0]
let proyectos2 = document.getElementsByClassName('tema')
let proyectos3 = document.getElementsByClassName('proyectos-personales')[0]
let habilidades = document.getElementsByClassName('habilidades')[0]
let habilidades2 = document.getElementsByClassName('h2-habilidades')
let sobreMi = document.getElementsByClassName('sobre-mi')[0]
let sobreMi2 = document.getElementsByClassName('cajas')[0]
let contacto = document.getElementsByClassName('contacto')[0]
let footer = document.getElementsByClassName('section-footer')[0]

colorPaginaMobile.addEventListener('click', cambiarTema)
colorPagina.addEventListener('click', cambiarTema)

function cambiarTema(){
    if(colorPagina.textContent == '🌞'){
        body.style.color = '#f5f7fa'
        inicio.style.backgroundColor = '#f5f7fa'
        
        for(let elementos of letrasHero){
            elementos.style.color = "#212121"
        }
        
        proyectos1.style.backgroundColor = '#f5f7fa'
    
        for(let elem of proyectos2){
            elem.style.color = "#212121"
        }
    
        proyectos3.style.backgroundColor = '#f5f7fa'
        habilidades.style.backgroundColor = '#f5f7fa'
        sobreMi.style.backgroundColor = '#f5f7fa'
        sobreMi2.style.backgroundColor = '#f5f7fa'
        contacto.style.backgroundColor = '#f5f7fa'
    
        colorPagina.textContent = '🌙'
    }
    else{
        body.style.color = '#191D2B'
        inicio.style.backgroundColor = '#191D2B'
        
        for(let elementos of letrasHero){
            elementos.style.color = "white"
        }
        
        proyectos1.style.backgroundColor = '#191D2B'
    
        for(let elem of proyectos2){
            elem.style.color = "white"
        }
    
        proyectos3.style.backgroundColor = '#191D2B'
    
        habilidades.style.backgroundColor = '#191D2B'
        sobreMi.style.backgroundColor = '#191D2B'
        sobreMi2.style.backgroundColor = '#191D2B'
        contacto.style.backgroundColor = '#191D2B'
        footer.style.backgroundColor = '#191D2B'
    
        colorPagina.textContent = '🌞'
    }

}

//------ANIMACION HERO-------
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

//-----ALERTA AL ENVIAR INFORMACION EN FORMULARIO CONTACTO-------
let btnEnviar = document.getElementById('btnEnviar');

//Evento al hacer click en enviar en el formulario de contacto
btnEnviar.addEventListener('click', mensajeAlContactarse)

//Funcion de alerta
function mensajeAlContactarse(){
    alert('Ups 😓 Esta funcionalidad todavia no está disponible')
}


