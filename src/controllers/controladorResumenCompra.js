import {pintarResumenCompra}from './controladorPintarResumen.js'
document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')
let carrito =JSON.parse(localStorage.getItem('carrito'))
if (carrito==null){
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null,null)
}else{
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,true,true) 
})

}


let botonLimpiar=document.getElementById('botonLimpiar')
botonLimpiar.addEventListener('click',function(evento){
    localStorage.removeItem('carrito')
    localStorage.removeItem('cantCarrito')

    let contenedor=document.getElementById('contenedor')
    contenedor.innerHTML=''
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null)


})