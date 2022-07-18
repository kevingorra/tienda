

 export function crearProducto(evento){
 
 let producto= {

    nombre:evento.target.parentElement.querySelector('h3').textContent,
    precio:evento.target.parentElement.querySelector('h4').textContent,
    foto:evento.target.parentElement.querySelector('img').src,
    descripcion:evento.target.parentElement.querySelector('p').textContent

}
return(producto)


}