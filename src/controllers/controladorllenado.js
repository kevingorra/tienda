export function pintarPorductos(productos){
    let fila =document.getElementById('fila')
    
//2.recorro el arreglo de datos y aplico traversing

productos.forEach(function(producto){
    //2.1 creando una columna desde js
    let columna=document.createElement("div")
    columna.classList.add("col","my-3")

    //2.2 creando la tarjeta

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    //2.3 creando la foto

    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100", "h-100")
    fotoProducto.src=producto.fotos[0]
    
    //2.4 creando el nombre
    let nombreProducto=document.createElement("h3")
    nombreProducto.textContent=producto.nombre
    
    //2.5 creando el precio del producto

    let precioProducto=document.createElement("h2")
    precioProducto.textContent= '$'+producto.precio+ 'cop'


    //2.6 detectando eventos
    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })
    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })

    //3 defino padres e hijos
  
    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})
}
//Datos de la base de datos




// console.log(productosBD)

// recorriendo un arreglo (esculcar)

// productosBD.forEach(function(producto){
//     console.log(producto.nombre)
//     console.log(producto.fotos[0])
// })

//PASOS PARA PINTAR PARA HACER RENDER DE ETIQUETAS HTML DESDE JS
// TRAVERSING crear etiquetas desde js


//1. crear una referncia en memoria (variabale) que almacena 
// la etiqueta sobre la cual voy a pintar (etiqueta padre o etiqueta raiz)




// let buscador =document.getElementById("busqueda")

// buscador.addEventListener("keypress",function(evento){
//     console.log(evento.target.value)
// })


