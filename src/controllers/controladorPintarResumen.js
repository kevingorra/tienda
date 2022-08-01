export function pintarResumenCompra(fotourl,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto){

    let contenedor=document.getElementById('contenedor')


    let fila=document.createElement('div')
    fila.classList.add('row')

    let columna1=document.createElement('div')
    columna1.classList.add('col-12', 'col-md-6','border-end')

    let columna2=document.createElement('div')
    columna2.classList.add('col-12', 'col-md-6')



    let foto=document.createElement('img')
    foto.classList.add('img-fluid')
    foto.src=fotourl
    
    let nombre=document.createElement('h3')
    nombre.classList.add('text-center')
    nombre.textContent=nombreMensaje

    let boton=document.createElement('a')
    boton.classList.add('btn', 'btn-primary', 'w-100')
    boton.textContent='Ir a La Tienda'
    boton.setAttribute('href','../../index.html')


    let precio=document.createElement('h4')
    precio.textContent=precioProducto

    let cantidad=document.createElement('h5')
    cantidad.textContent=cantidadProducto

    let subtotal=document.createElement('h5')
    subtotal.textContent=precioProducto*cantidadProducto

    

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    
    if(banderaBoton){
        columna2.appendChild(boton)
    }
    if(banderaPrecio){
        columna2.appendChild(precio)
    }
    if(banderaCantidad){
        columna2.appendChild(cantidad)
    }
    columna2.appendChild(subtotal)
    
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)


}