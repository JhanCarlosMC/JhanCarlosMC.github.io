class Producto {
    constructor(id, nombre, imagen, precio, cantidadDisponible) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidadDisponible = cantidadDisponible;
    }
}

let productoDos = new Producto("2", "Camisa", "imgCamisa.png", 90000, 10);

let productoUno = {
    id: "1",
    nombre: "Tenis",
    imagen: "imgTenis.png",
    precio: 120000,
    cantidadDisponible: 5,
};

let listaProductos = [];
listaProductos.push(productoDos);
listaProductos.push(productoUno);

//Guardado de datos
localStorage.setItem("productos", JSON.stringify(listaProductos));

//Recuperacion de datos
// let listaProductosRecuperados = JSON.parse(localStorage.getItem("productos"));

//Recorrer arreglo
// listaProductosRecuperados.forEach(producto => {
//     console.log(producto);
//     //Recorrer objetos
//     for (const key in producto) {
//         console.log(key + ": " + producto[key]);
//     }
// });

function agregarProductoCarrito(idProducto) {
    listaProductos = JSON.parse(localStorage.getItem("productos"));

    let productosCarrito = document.getElementById("productos-carrito");
    let productoObtenido;
    let idParrafoDisponibilidad = "dispo-" + idProducto;

    let parrafoDisponibilidad = document.getElementById(idParrafoDisponibilidad);

    listaProductos.forEach(producto => {
        if (idProducto === producto.id) {
            producto.cantidadDisponible = producto.cantidadDisponible - 1;

            productoObtenido = producto;
        }
    });

    if (productoObtenido.cantidadDisponible >= 0) {

        let descripcionProductoCarrito = document.createElement("p");
        descripcionProductoCarrito.innerHTML = `<strong>Producto:</strong> ${productoObtenido.nombre} <br>
    <strong>Precio:</strong> $${productoObtenido.precio} <br>`;

        parrafoDisponibilidad.innerHTML = "Disponibilidad: " + productoObtenido.cantidadDisponible;

        productosCarrito.appendChild(descripcionProductoCarrito);

        console.log("cantidad " + productoObtenido.cantidadDisponible);
        localStorage.setItem("productos", JSON.stringify(listaProductos));
    }else{
        alert("Producto no disponible");
    }
}

//-----------------------------Agregar y Guardar IMG---------------
// const formularioImagen = document.getElementById('formulario-imagen');

// formularioImagen.addEventListener('submit', function (e) {
//     e.preventDefault(); // Evita el envío del formulario por defecto

//     //Files[0] = contiene la lista de archivos seleccionados.
//     const archivoImagen = document.getElementById('imagen').files[0];

//     //Se verifica si el elemento es nulo/null
//     if (archivoImagen) {
//         //Instancia de FileReader para leer el contenido del archivo
//         const lector = new FileReader();

//         //Comienza a leer el contenido de la imagen(Una vez leido ejecuta el metodo onload)
//         lector.readAsDataURL(archivoImagen);

//         //El evento se activa cuando el archivo se ha cargado correctamente.
//         lector.onload = function (evento) {
//             //Obtenemos los datos del archivo cargado en forma de URL
//             const imagenBase64 = evento.target.result; //Trae los datos en una cadena de caracteres ASCII
//             //Mostramos la URL bsae64
//             console.log(imagenBase64);

//             // Almacena la imagen en el localStorage
//             localStorage.setItem('imagen', imagenBase64);
//         };

//         alert('Imagen almacenada correctamente');
//     } else {
//         alert('Por favor, seleccione una imagen antes de enviar el formulario.');
//     }
// });

// function cargarImagen() {
//     // Recuperar y mostrar la imagen al cargar la página
//     const imagenMostrada = document.getElementById('imagen-mostrada');
//     const imagenAlmacenada = localStorage.getItem('imagen');

//     if (imagenAlmacenada) {
//         imagenMostrada.src = imagenAlmacenada;
//     }
// }

let listProductos = [];
listProductos = JSON.parse(localStorage.getItem("listProductos"));
cargarProductos();
	
function cargarProductos(){
    let contenedorProductosCargados = document.getElementById("lista-productos");
    console.log(listProductos);
    listProductos.forEach(producto => {
        let divProducto = crearProducto(producto.id, producto.nombre, producto.descripcion, producto.imagen, producto.precio, producto.cantidadDisponible);

        contenedorProductosCargados.appendChild(divProducto);
    });
}

function crearProducto(id, nombre, descripcion, imagenURL, precio, cantidadDisponible) {
    const divProducto = document.createElement("div");
    divProducto.id = "contenedor-producto"+id;

    const h4Producto = document.createElement("h3");
    h4Producto.textContent = nombre;

    const imgProducto = document.createElement("img");
    imgProducto.src = imagenURL;
    imgProducto.alt = "Imagen de "+nombre;
    imgProducto.width = "200";

    const descripcionProducto = document.createElement("p");
    descripcionProducto.innerHTML = "<strong>Descripcion:</strong> "+descripcion;

    const precioProducto = document.createElement("p");
    precioProducto.innerHTML = `<strong>Precio</strong>: $${precio} COP`;

    const disponibilidadProducto = document.createElement("p");
    disponibilidadProducto.innerHTML = `<strong>Disponibles:</strong> ${cantidadDisponible} Unidad(es)`;

    divProducto.appendChild(h4Producto);
    divProducto.appendChild(imgProducto);
    divProducto.appendChild(descripcionProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(disponibilidadProducto);

    return divProducto;
}