function redireccion() {
    //Codigo
    window.location.href = "/index.html";
}

class Producto {
    constructor(id, nombre, descripcion, imagen, precio, cantidadDisponible) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidadDisponible = cantidadDisponible;
    }
}

let listProductos = [];
if(JSON.parse(localStorage.getItem("listProductos"))){
    listProductos = JSON.parse(localStorage.getItem("listProductos"));
    cargarProductos();
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

const formProducto = document.getElementById("formulario-productos");
const contProductos = document.getElementById("contenedor-productos");

formProducto.addEventListener("submit", function (e){
    e.preventDefault();
    const nombreProducto = document.getElementById("nombre").value;
    const descripcionProducto = document.getElementById("descripcion").value;
    const imagenProducto = document.getElementById("imagen").files[0];
    const cantidadProducto = document.getElementById("cantidad").value;
    const precioProducto = document.getElementById("precio").value;
    let imagenURL;

    if (imagenProducto) {
        //Instancia de FileReader para leer el contenido del archivo
        const lector = new FileReader();

        //Comienza a leer el contenido de la imagen(Una vez leido ejecuta el metodo onload)
        lector.readAsDataURL(imagenProducto);

        //El evento se activa cuando el archivo se ha cargado correctamente.
        lector.onload = function (evento) {
            //Obtenemos los datos del archivo cargado en forma de URL
            imagenURL = evento.target.result; //Trae los datos en una cadena de caracteres ASCII

            let newProduct = new Producto(0,nombreProducto,descripcionProducto,imagenURL, precioProducto, cantidadProducto);
            listProductos.push(newProduct);
            localStorage.setItem("listProductos", JSON.stringify(listProductos));
            const divProducto = crearProducto(0, nombreProducto, descripcionProducto, imagenURL, precioProducto,cantidadProducto);

            contProductos.appendChild(divProducto);
        };
    }

    formProducto.reset();
});

function cargarProductos(){
    let contenedorProductosCargados = document.getElementById("contenedor-productos");
    console.log(listProductos);
    if(listProductos){
        listProductos.forEach(producto => {
            let divProducto = crearProducto(producto.id, producto.nombre, producto.descripcion, producto.imagen, producto.precio, producto.cantidadDisponible);
    
            contenedorProductosCargados.appendChild(divProducto);
        });
    }
}