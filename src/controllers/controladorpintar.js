export function pintarProductos(productos){
    
    let fila=document.getElementById('fila')
    fila.innerHTML=""

    productos.forEach(function(producto){
        let columna=document.createElement('div')
        columna.classList.add('col','my-2')
        let tarjeta=document.createElement('div')
        tarjeta.classList.add('card','h-100','shadow','text-center')
        let foto=document.createElement('img')
        foto.classList.add('img-fluid','h-100')
        foto.src=producto.fotos[0]
        let nombre=document.createElement('h3')
        nombre.classList.add('fw-bold')
        nombre.textContent=producto.nombre
        let precio=document.createElement('h4')
        precio.classList.add('fw-bold')
        precio.textContent='$ '+producto.precio+ ' COP'
        columna.addEventListener('mouseover',function(evento){
            foto.src=producto.fotos[1]
        })
        columna.addEventListener('mouseleave',function(evento){
            foto.src=producto.fotos[0]
        })
        let descripcion=document.createElement('p')
        descripcion.classList.add('d-none')
        descripcion.textContent=producto.descripcion
        
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    });
}