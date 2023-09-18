
const botonAbrirMenu = document.getElementById('open-menu');
const botonCerrarMenu = document.getElementById('boton-cerrar-menu')
const contenedorNav = document.getElementById('contenedor-nav');
const navegacion = document.getElementById('navegacion');
const botonMas = document.getElementById('plus');
const botonMenos = document.getElementById('minus');
const cifraProductos = document.getElementById('conteo');
const botonCarrito = document.getElementById('cart');
const boxCart = document.getElementById('box-cart');
const contenedorImagenCarritoCompras = document.getElementById('box-card--imagen-miniatura');
const parrafoCarritoCompras = document.getElementById('parrafo-principal-producto');
const costoProductosCarrito = document.getElementById('costo-productos');
const iconoBasurero = document.getElementById('trash');
const botonCheckout = document.getElementById('checkout');
const iconoCarrito = document.getElementById('carrito');
const notificacionCarrito = document.getElementById('sup');

const thumbailUno = document.getElementById('small1');
const thumbailDos = document.getElementById('small2');
const thumbailTres = document.getElementById('small3');
const thumbailCuatro = document.getElementById('small4');
const imagenBigUno = document.getElementById('imagen1');
const imagenBigDos = document.getElementById('imagen2');
const imagenBigTres = document.getElementById('imagen3');
const imagenBigCuatro = document.getElementById('imagen4');

const btnPrevious = document.getElementById('button-previous');
const btnNext = document.getElementById('button-next');

let numeroProductos = 0;
let conteoClicks = 1;

let click = 1;


function abriendoMenu(){
    contenedorNav.classList.add('bg-nav');
    navegacion.classList.remove('cerrando-menu')
    navegacion.classList.add('abriendo-menu');
}

function cerrandoMenu() {
    contenedorNav.classList.remove('bg-nav');
    navegacion.classList.remove('abriendo-menu');
    navegacion.classList.add('cerrando-menu')
}

function modificandoContenidoCarrito(){
    let costoTotal = (125 * numeroProductos);
    contenedorImagenCarritoCompras.style.display = 'block';
    parrafoCarritoCompras.innerHTML =  'Fall Limited Edition Sneakers';
    iconoBasurero.style.display = 'block';
    botonCheckout.style.display = 'block';
    costoProductosCarrito.innerHTML = 
    `
    $125.00 x ${numeroProductos} <span id="bold">$${costoTotal}.00</span>
    ` ;

    notificacionCarrito.style.display = 'block'
    notificacionCarrito.innerHTML = numeroProductos;
}

function aumentoProductos() {
    numeroProductos++;  
    cifraProductos.innerHTML = numeroProductos;    
}

function quitandoProductos(){
    if(numeroProductos > 0){
        numeroProductos--;
    }
    cifraProductos.innerHTML = numeroProductos;
}

function abriendoCajaCarrito(){
    conteoClicks++
    if(conteoClicks % 2 == 0){
        boxCart.style.display = 'block'; 
    }else{
        boxCart.style.display = 'none';
    } 
}

function apareciendoImagenUno(){
    imagenBigUno.style.opacity = 1;
    imagenBigDos.style.opacity = 0;
    imagenBigTres.style.opacity = 0;
    imagenBigCuatro.style.opacity = 0;
}

function apareciendoImagenDos(){
    imagenBigDos.style.opacity = 1;
    imagenBigTres.style.opacity = 0;
    imagenBigCuatro.style.opacity = 0;
    imagenBigUno.style.opacity = 0;
}

function apareciendoImagenTres(){
    imagenBigTres.style.opacity = 1;
    imagenBigCuatro.style.opacity = 0;
    imagenBigUno.style.opacity = 0;
    imagenBigDos.style.opacity = 0;
}

function apareciendoImagenCuatro(){
    imagenBigCuatro.style.opacity = 1;
    imagenBigUno.style.opacity = 0;
    imagenBigDos.style.opacity = 0;
    imagenBigTres.style.opacity = 0;
}


function llamandoImagenes(){
    if(click == 1){  
        imagenBigUno.style.opacity = 1;
        imagenBigDos.style.opacity = 0;
        imagenBigTres.style.opacity = 0;
        imagenBigCuatro.style.opacity = 0;
    }else if(click == 2){
        imagenBigDos.style.opacity = 1;
        imagenBigTres.style.opacity = 0;
        imagenBigCuatro.style.opacity = 0;
        imagenBigUno.style.opacity = 0;
    }else if(click == 3){
        imagenBigTres.style.opacity = 1;
        imagenBigCuatro.style.opacity = 0;
        imagenBigUno.style.opacity = 0;
        imagenBigDos.style.opacity = 0;
    }else if(click == 4){
        imagenBigCuatro.style.opacity = 1;
        imagenBigUno.style.opacity = 0;
        imagenBigDos.style.opacity = 0;
        imagenBigTres.style.opacity = 0;
    }
}

function next(){  
    if(click < 4){
        click++;
    }
    llamandoImagenes(); 
}

function comeBack(){
    if(click > 1){
        click--;
    }
    llamandoImagenes();
}

function pagar(){
        window.open('index.html', '_blank'); 
}

function vaciarCarrito(){
    parrafoCarritoCompras.innerHTML = 'Your Car is Empty';
    costoProductosCarrito.innerHTML = '';
    contenedorImagenCarritoCompras.style.display = 'none';
    botonCheckout.style.display = 'none';
}


botonAbrirMenu.addEventListener('click', abriendoMenu);
botonCerrarMenu.addEventListener('click', cerrandoMenu);
botonMas.addEventListener('click', aumentoProductos);
botonMenos.addEventListener('click', quitandoProductos);
botonCarrito.addEventListener('click', modificandoContenidoCarrito);
iconoCarrito.addEventListener('click', abriendoCajaCarrito);

thumbailUno.addEventListener('click', apareciendoImagenUno);
thumbailDos.addEventListener('click', apareciendoImagenDos);
thumbailTres.addEventListener('click', apareciendoImagenTres);
thumbailCuatro.addEventListener('click', apareciendoImagenCuatro);

btnPrevious.addEventListener('click', comeBack);
btnNext.addEventListener('click', next);

botonCheckout.addEventListener('click', pagar);
iconoBasurero.addEventListener('click', vaciarCarrito);