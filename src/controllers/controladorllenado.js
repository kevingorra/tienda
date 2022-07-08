//Datos de la base de datos

let productosBD=
[
    {
        nombre:'Camisas Nike',
        precio:45000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/kvztiendatcc.appspot.com/o/camisa1.jpg?alt=media&token=e3895d37-0b90-4850-90b6-f7af0f6aa885','https://firebasestorage.googleapis.com/v0/b/kvztiendatcc.appspot.com/o/camisa2.jpg?alt=media&token=f4a0ffe1-9843-41c0-b0a0-d6e931d9cea0'],
        descripcion:'Camisa de algodon con estampado nike '
        
    },
    {
        nombre:"Funko Pop Animation: Dragon Ball Z S9 - Kami",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama1.webp?alt=media&token=f257df94-685b-4334-a4fe-05e1ac58d9d9','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama2.webp?alt=media&token=417b42fd-7715-4f7e-873f-ba7e1aa20a6c'],
        descripcion:'Kami era el antiguo guardián namekiano de la Tierra que ahora busca ayudar a Goku en la lucha contra los atacantes de la Tierra. ¡Trae papá! Kami en tu colección Dragon Ball Z para reunir al sabio con el Dragon Team.'
    },
    {
        nombre:"Funko Pop Animation: Dbz S8- Frieza",
        precio:54900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/freezer1.webp?alt=media&token=7b87d57d-8a2f-4977-ae69-a7f3f1169e14','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/freezer2.webp?alt=media&token=7ad6ba16-775f-42e4-93a1-329bb699e383'],
        descripcion:'¡Funko POP de la primera forma de Frieza de Dragon Ball Z! la figura tiene un tamaño de aprox. 9cm Visualmente, el artículo para fanáticos de Dragon Ball corresponde a la plantilla del anime y el manga en cada detalle, con un traje de batalla morado y blanco y una pose guerrera. Tu figura coleccionable de Frieza viene en una hermosa caja de regalo con una ventana de visualización.'

    },
    {

        nombre:"Funko Pop Animation: Dragon Ball Z -Super Saiyan Gohan",
        precio:54900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/gohan1.webp?alt=media&token=ce45c3f8-146b-41c9-81cc-08441e6ed6b4','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/gohan2.webp?alt=media&token=d45481e8-c175-4731-8c9b-33c2bce04237'],
        descripcion:'El hijo mayor de Goku, Gohan, se une a su padre en la lucha para defender la Tierra de los atacantes y la destrucción. ¡Construye el Dragon Team para tu colección Dragon Ball Z con este Pop! Super Saiyan Gohan comiendo fideos. Todo ese trabajo duro conduce a un gran apetito. La figura de vinilo mide aproximadamente 9.5 centímetros de alto.'
    },
    {
        nombre:"Funko Pop Star Wars: Mandalorian Mando Con Baby Yoda",
        precio:63900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mandalorian.webp?alt=media&token=f777432d-d98f-421d-8fb9-1134a176d404','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mandalorian2.jpg?alt=media&token=08634096-d9d7-4d50-a98b-08115fa38818'],
        descripcion:'Este coleccionable ofrece un toque artístico único a cualquier colección, ya que cada pieza tiene un estampado completo que varía ligeramente de cualquier otra figura ¡Celebra el fandom más estelar de todos con Star Wars™ The Manadolrian™ Pop! El Mandaloriano con Grogu. La figura de vinilo mide aproximadamente 11 centímetros de alto.'
    },
    {
        nombre:"Funko Pop Star Wars: Mandalorian Mando Con Lanzador",
        precio:63900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mando1.webp?alt=media&token=e3063421-3eb0-4bb6-a39e-6f11f9568440','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mando2.webp?alt=media&token=136d5eab-5eab-44a1-bff4-e51271597990'],
        descripcion:'Funko Pop Star Wars: Madalorian Mando Con Lanzador! The Mandalorian finalmente ha regresado para salvarnos de 2020, llevándonos de regreso a una galaxia muy, muy lejana mientras seguimos sus aventuras con Baby Yoda, también conocido como The Child. Este lanzamiento exclusivo presenta a The Mandalorian armado con su bláster y conectado a una base esculpida para dar la impresión de que está volando por el aire con el uso de su mochila propulsora. Ah, y lo que es más importante, ¡viene con un impresionante acabado que brilla en la oscuridad!' 
    }

]

console.log(productosBD)

// recorriendo un arreglo (esculcar)

productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.fotos[0])
})

//PASOS PARA PINTAR PARA HACER RENDER DE ETIQUETAS HTML DESDE JS
// TRAVERSING crear etiquetas desde js


//1. crear una referncia en memoria (variabale) que almacena 
// la etiqueta sobre la cual voy a pintar (etiqueta padre o etiqueta raiz)
let fila =document.getElementById('fila')

//2.recorro el arreglo de datos y aplico traversing

productosBD.forEach(function(producto){
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


