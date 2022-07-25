let carrito =JSON.parse(localStorage.getItem('carrito'))

let contenedor=document.getElementById('contenedor')

contenedor.innerHTML=""

if (carrito==null){

    let fila=document.createElement('div')
    fila.classList.add('row')
    let columna1=document.createElement('div')
    columna1.classList.add('col-12', 'col-md-6','border-end')
    let columna2=document.createElement('div')
    columna2.classList.add('col-12', 'col-md-6')
    let foto=document.createElement('img')
    foto.classList.add('img-fluid')
    foto.src='../../assets/img/carritovacio.jpg'
    let mensaje=document.createElement('h3')
    mensaje.classList.add('text-center')
    mensaje.textContent='tu carrito esta vacio'
    let boton=document.createElement('a')
    boton.classList.add('btn', 'btn-primary', 'w-100')
    boton.textContent='Ir a La Tienda'
    boton.setAttribute('href','../../index.html')
    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    columna2.appendChild(boton)
    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)


    
}else{


    carrito.forEach(function(producto){
    
    let fila=document.createElement('div')
    fila.classList.add('row')

    let columna1=document.createElement('div')
    columna1.classList.add('col-12', 'col-md-6','border-end')

    let columna2=document.createElement('div')
    columna2.classList.add('col-12', 'col-md-6', 'align-self-center' ,'text-center')

    let foto=document.createElement('img')
    foto.classList.add('img-fluid')
    foto.src=producto.foto

    let nombretexto=document.createElement('h3')
    nombretexto.classList.add('text-center','fw-bold')
    nombretexto.textContent='Nombre Producto: '

    let nombre=document.createElement('h3')
    nombre.textContent=producto.nombre

    let preciotexto=document.createElement('h4')
    preciotexto.classList.add('fw-bold')
    preciotexto.textContent='Precio :'

    let precio=document.createElement('h4')
    precio.textContent=producto.precio

    let cantidadtexto=document.createElement('h5') 
    cantidadtexto.classList.add('fw-bold')
    cantidadtexto.textContent='Cantidad : '

    let cantidad=document.createElement('h5')
    cantidad.textContent=producto.cantidad

    columna1.appendChild(foto)
    columna2.appendChild(nombretexto)
    columna2.appendChild(nombre)
    columna2.appendChild(preciotexto)
    columna2.appendChild(precio)
    columna2.appendChild(cantidadtexto)
    columna2.appendChild(cantidad)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)




})}
