//Para que amplien sus conocimientos sobre el objeto location
//https://www.w3schools.com/js/js_window_location.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Location
//Aquí guardo lo que trae el query strings
let codigo = location.search;
console.log(codigo);
//Aquí uso esta instancia para lograr ver mejor los datos del query strings
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);
//Aquí guardo el código que el usuario seleccionó
let codigoSeleccionado = codigoProducto.get('idDrink');
console.log(codigoSeleccionado);

//Capturo los datos de la página de detalle donde quiero a futuro mostrar los datos del producto seleccionado
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let preparacion = document.getElementById('preparacion');
let ingredientes = document.getElementById('ingredientes');
let tipo = document.getElementById('tipo');

//Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
//Convierto el objeto literal a un array
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);

//Muestro de manera dinámica los detalles del producto que tengo en el localStorage
codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre del trago : ${arrayDetalle.strDrink}`;
tipo.innerHTML = `Tipo del trago : ${arrayDetalle.strAlcoholic}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.strDrinkThumb}" alt="${arrayDetalle.strDrink}"/>`
preparacion.innerHTML =`Preparación: ${arrayDetalle.strInstructionsES}`
ingredientes.innerHTML =`Ingredientes: ${arrayDetalle.strIngredient1}, ${arrayDetalle.strIngredient2}, ${arrayDetalle.strIngredient3}, ${arrayDetalle.strIngredient4}, ${arrayDetalle.strIngredient5}, ${arrayDetalle.strIngredient6}, ${arrayDetalle.strIngredient7}, `
//Capturo el botón que me permite regresar y además borrar todo lo que tengo en mi localStorage
let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    //Este a mi no me funcionó
    //localStorage.removeItem('detalleProducto');
    //Pero este sí -Perfectamente borra todo lo que está en el localStorage
    localStorage.clear()
    //Aquí retorno a la página principal y muestro todos los datos que estan en el archivo json
    location.href = 'index.html'
})