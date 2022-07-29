import {pintarResumenCompra}from './controladorPintarResumen.js'
let carrito =JSON.parse(localStorage.getItem('carrito'))
if (carrito==null){
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null)
}else{
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad) 
})}


let botonLimpiar=document.getElementById('botonLimpiar')
botonLimpiar.addEventListener('click',function(evento){
    localStorage.removeItem('carrito')

    let contenedor=document.getElementById('contenedor')
    contenedor.innerHTML=''
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null)


})