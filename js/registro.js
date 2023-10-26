class Usuario {
    constructor(nombre, correo, password) {
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
    }
}

let listUsuarios = [];
if (JSON.parse(localStorage.getItem("listUsuarios"))) {
    listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));
}


const formRegistro = document.getElementById("registro");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombreObtenido = document.getElementById("name").value;
    const correoObtenido = document.getElementById("email").value;
    const passwordObtenida = document.getElementById("pass").value;

    let newUsuario = new Usuario(nombreObtenido, correoObtenido, passwordObtenida);

    listUsuarios.push(newUsuario);

    localStorage.setItem("listUsuarios", JSON.stringify(listUsuarios));

    window.location.href = "/login.html";
});