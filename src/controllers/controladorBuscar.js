import {productosBD}from'../helpers/baseDatos.js'
import { pintarProductos } from './controladorPintar.js'
export function buscarProductos(){
    let buscador=document.getElementById("busqueda")
    buscador.addEventListener('keyup',function(evento){
        let productobuscado=evento.target.value
        
        let filtro=productosBD.filter(function(producto){
            
            return (producto.nombre.toLowerCase().includes(productobuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos(filtro)
    })

}