let presentacionHero = document.getElementById('presentacionHero');
let presentacion = 'Desarrollador viviendo en Entre Ríos, Argentina.';
let velocidad = 50;
let i = 0; 

function animacionEscribir(){
    
    if(i < presentacion.length){
        presentacionHero.innerHTML += presentacion.charAt(i);
        i++;
        setTimeout(animacionEscribir, velocidad);
    }
}


animacionEscribir();