
let productosHTML = document.querySelector('.productos')

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    console.log(productos)
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <article class='producto col-12 col-md-6 col-lg-3 p-5'>
            <img class='w-100'src="${producto.strDrinkThumb}" alt="">
            <h3>Nombre: ${producto.strDrink}</h3>
            <h4>Categoria: ${producto.strCategory}</h4>
            <a id='${JSON.stringify(producto)}'class='btn btn-outline-danger d-block botonDetalle' href='#'> Ver detalle</a>
        </article>
        `
    })
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    //console.log(botonDetalle);
    //Aquí guardaré los datos del producto seleccionado - pero en forma array de objetos
    let arrayMiListaDeProductos
    //Aquí guardo el objeto pero convertido a un array - Para poder tomar el código que el usuario seleccionó
    let miObjeto
    //Aquí es donde voy a guardar el código del productos que el usuario seleccionó
    let codigo
    //Aquí construyo está lógica para que poder dejar en escucha, a ver cual elemento selecciona el usuario para ver el detalle

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             //La eqtiqueta ancla por defecto tiene un evento enviar los datos
             e.preventDefault()
             //Traigo datos del localStorage - No es necesario haerlo en este caso propuesto
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                 //console.log(arrayMiListaDeProductos);
             }
            //Aquí estoy guardando en el array de forma completa el objeto 
            arrayMiListaDeProductos.push(this.id)
            //Hago esto para poder converir el objeto seleccionado en un array
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            //Aquí tomo el código que el usuario seleccionó
            codigo = miObjeto.idDrink
            //Aquí guardo en el localStorage el objeto que usuario seleccionó
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            //Aquí construyo mi Query strings - Lo cual es la ruta a donde debo enviar al usuario y además junto a ello le envío el código que fué seleccionado
            location.href = `detalle.html?idDrink=${codigo}`
             
         })    
     } )
})
.catch((error)=>{
    console.log('Uff ha ocurrido un error '+error)
})