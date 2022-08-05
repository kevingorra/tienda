let carrito
let producto=JSON.parse( localStorage.getItem('infoProducto'))
console.log(JSON.parse(localStorage.getItem ('carrito')))
document.getElementById('carrito').innerHTML=localStorage.getItem('cantCarrito')


let foto =document.getElementById('foto')
foto.src=producto.foto
let nombre= document.getElementById('nombre')
nombre.textContent=producto.nombre
let descripcion=document.getElementById('descripcion')
descripcion.textContent =producto.descripcion
let precio=document.getElementById('precio')
precio.textContent=producto.precio




let cantidad=document.getElementById('cantidad').value
producto.cantidad=cantidad
let cantCarrito = document.getElementById("carrito")



let agregar =document.getElementById('agregar')
if (JSON.parse(localStorage.getItem ('carrito'))==null){
    carrito=[]        
}else{
    carrito=JSON.parse(localStorage.getItem('carrito'))
    
}
agregar.addEventListener('click',function(){
    let alerta =document.getElementById('alerta')
    alerta.classList.remove('invisible')

    setTimeout(function(){
            alerta.classList.add('invisible')
    },3000)
    let cantidad =document.getElementById('cantidad').value
    producto.cantidad=cantidad
    carrito.push(producto)
    console.log(carrito)
    localStorage.setItem('carrito',JSON.stringify(carrito))
    //cantCarrito.textContent = carrito.length
    producto.cantidad=cantidad


    //rrecorriendo un arreglo
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
        
    });
    cantCarrito.textContent=suma
    localStorage.setItem("cantCarrito",suma)
 
    

})





