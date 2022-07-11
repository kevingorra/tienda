let plato1 ={
        Nombre: "Bandeja Paisa",
        Precio:25000,
        Descripcion:"Porcion de arroz, Frijoles, Ensalada, Aguacate, carne de Rex o Cerdo ,Tajada de maduro,",
        Categoria:1,
        Foto:"../src/../assets/img/bandejapaisa.jpg"
    }
    let plato2 ={
        Nombre: "Costillas BBQ",
        Precio:35000,
        Descripcion:"Costillas bañadas en salsa BBQ acompañadas de papas a la francesa",
        Categoria:1,
        Foto:"../src/../assets/img/costillasbbq.jpg"
    }
    let plato3 ={
        Nombre: "pollo a la plancha",
        Precio:29000,
        Descripcion:"Pollo a la plancaha acompañado de papas a la Francesa con esalada y con arepa",
        Categoria:2,
        Foto:"../src/../assets/img/polloplancha.jpg"
    }
    let plato4 ={
        Nombre: "Punta de anca",
        Precio:15000,
        Descripcion:"Punta de anca a la plancaha acompañado de papas a la Francesa con esalada y con arepa",
        Categoria:1,
        Foto:"../src/../assets/img/puntadeanca.jpg"
    }
    let plato5 ={
        Nombre: "sancocho",
        Precio:35000,
        Descripcion:"Caldo de pollo con papas pollo carne platano yuca arroz y ensalada",
        Categoria:1,
        Foto:"../src/../assets/img/sancocho.jpg"
    }
    
    let platos=Array(plato1,plato2,plato3,plato4,plato5)


    //1. Metodo  forEach
    platos.forEach(function(plato){
        console.log(plato.Nombre)
    })
    //2. Metodo Filter
    let resultado = platos.filter(function(plato){
        return(plato.Categoria==2)
    })

    console.log(resultado)

    resultado=platos.filter(function(plato){
        return(plato.Precio >20000 )
    })

    console.log(resultado)

    resultado=platos.filter(function(plato){
        return(plato.Categoria==1 || plato.Categoria ==3)
    })

    console.log(resultado)

    //3. Metodo Find

    let busqueda =platos.find(function(plato){
        return(plato.Precio==35000)
    })

    console.log(busqueda)

    //4. metodo map

    let mapa =platos.map(function(plato){
        return(plato.Categoria=100)

    })
    console.log(mapa)

    //5. Metodo push


    let plato6 ={
        Nombre: "sopa de patacones",
        Precio:35000,
        Descripcion:"Caldo de pollo con papas pollo carne platano yuca arroz y ensalada",
        Categoria:1,
        Foto:"../src/../assets/img/sancocho.jpg"
    }
    platos.push(plato6)
    console.log(platos)
