

import {productosBD} from "../helpers/baseDatos.js";


import{pintarProductos} from'./controladorPintar.js';
pintarProductos(productosBD)

import { buscarProductos } from "./controladorBuscar.js";
import { crearProducto } from "./crearProducto.js";
buscarProductos()


let contenedor=document.getElementById('fila')
contenedor.addEventListener('click',function(evento){
    // console.log(evento.target.parentElement.querySelector('h3').textContent)
    // console.log(evento.target.parentElement.querySelector('h4').textContent)
    // console.log(evento.target.parentElement.querySelector('img').src)

   let producto =crearProducto(evento)
    


    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem('infoProducto'))

    window.location.href='/src/views/ff.html'
})

