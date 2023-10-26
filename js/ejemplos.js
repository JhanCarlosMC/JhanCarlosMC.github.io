const login = JSON.parse(localStorage.getItem("login"));

if (login.logeado) {
    const nombreUsuario = document.getElementById("nombre-usuario");
    const itemLogin = document.getElementById("login_item");
    const itemNombre = document.getElementById("item_nombre");
    const cerrarSesion = document.getElementById("cerrar_sesion__link");
    const cerrarSesionitem = document.getElementById("cerrar_sesion");

    nombreUsuario.textContent = login.nombre;
    login.logeado = false;
    localStorage.setItem("login", JSON.stringify(login));

    itemLogin.style.display = "none";
    itemNombre.className = "menu__item";

    cerrarSesion.textContent = "Cerrar Sesion";
    cerrarSesionitem.className = "menu__item";
}