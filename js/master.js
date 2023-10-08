
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
            <a class='btn btn-outline-danger d-block' href='#'> Ver detalle</a>
        </article>
        `
    });
})
.catch((error)=>{
    console.log('Uff ha ocurrido un error '+error)
})