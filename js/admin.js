//---------------------
let listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));
const formularioLogin = document.getElementById("login");

const admin = {
    user: "admin@gmail.com",
    pass: "1234",
};

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValidar = document.getElementById("email").value;
    const passwordValidar = document.getElementById("pass").value;
    let usuarioObtenido;

    if (admin.user === emailValidar && admin.pass === passwordValidar) {
        window.location.href = "/administracion.html";
    } else {
        listUsuarios.forEach(usuario => {

            if (usuario.correo === emailValidar) {
                usuarioObtenido = usuario;
            }
        });

        if (usuarioObtenido) {
            if (usuarioObtenido.password === passwordValidar) {
                let login = {
                    logeado: true,
                    nombre: usuarioObtenido.nombre
                };

                localStorage.setItem("login", JSON.stringify(login));
                window.location.href = "/index.html";
            } else {
                alert("Contraseña Incorrecta");
            }
        } else {
            alert("Correo no encontrado");
        }
    }

});

function mostrarUsuarios() {
    console.log(listUsuarios);
}