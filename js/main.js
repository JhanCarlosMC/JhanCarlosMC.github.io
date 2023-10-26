//---------------Condicionales

const texto = 'cadena de texto';
const pi = "3.1415";
const logicos = true;

let nombre = "Jhan";
let edad = 50;
let flag = false;

//calcularEdad();

function calcularEdad() {
    if (edad < 18) {
        console.log("Joven");

    } else if (edad < 30) {
        console.log("Adolecente");

    } else if (edad < 40) {
        console.log("Persona Responsable");

    } else {
        console.log("Persona de la Tercera edad");

    }
}


//Leer dos números y comparar si son iguales.

//comparacionNumeros(10, 5);

function comparacionNumeros(num1, num2) {
    if (num1 === num2) {
        console.log("Los numeron son iguales");
    } else {
        console.log("Los numeron NO son iguales");
    }
}

//diaSemana(1);
//Leer un número y decir qué día de la semana es.
function diaSemana(valorDia) {

    switch (valorDia) {
        case 1:
            console.log("Lunes");
            break;

        case 2:
            console.log("Martes");
            break;

        case 3:
            console.log("Miercoles");
            break;

        default:
            console.log("Otro dia de la semana");
            break;
    }
}


//---------------Ciclos

ejemploWhile(0);

function ejemploWhile(var1) {

    while (var1 > 0) {
        //Codigo
        console.log("W " + var1);
        var1--;
    }
}

//ejemploDoWhile(0);
function ejemploDoWhile(var1) {

    do {
        console.log("Do " + var1);

        var1--;
        console.log("Do " + var1);
    } while (var1 > 0);
}

//ejemploFor(4);

function ejemploFor(var1) {

    for (let i = var1; i > 0; i--) {
        console.log("For " + i);
    }
}

//sumaPares(7);
//Leer un número y sumar todos los números 
//pares que hayan entre 0 y el número ingresado.
function sumaPares(numero) {
    let sumaNumeros = 0;

    for (let i = 0; i <= numero; i += 2) {

        sumaNumeros += i;

        console.log("i = " + i);
        console.log("Suma = " + sumaNumeros);
    }

}

//---------------Arreglos
// ejemploArreglo();

function ejemploArreglo() {
    let nombresEstudiantes = ["Jose", "Santiago", "Valentina", "Jean"];
    let edadEstudiantes = [19, 20, 18, 21];

    nombresEstudiantes[0] = "Jhan";
    nombresEstudiantes[4] = "Brayan";

    console.log(nombresEstudiantes.length);

    for (let i = 0; i < nombresEstudiantes.length; i++) {
        console.log(nombresEstudiantes[i]);
    }

    edadEstudiantes.forEach((element, index) => {
        console.log(`Elemento ${element}. Indice ${index}`);
    });
}

// operacionesArreglos();
function operacionesArreglos() {
    let semana = [];

    semana.push("Miercoles");
    semana.push("Jueves");
    semana.push("Viernes");
    semana.push("Lunes");

    semana.pop();

    semana.unshift("Martes");
    semana.unshift("Lunes");
    semana.unshift("Sabado");

    semana.shift();

    console.log(semana.indexOf("Domingo"));

    console.log(semana);
}

// sumaVectores();
function sumaVectores() {
    let arregloUno = [2, 34, 12, 65];
    let arregloDos = [132, 56, 7, 32];
    let arregloResultado = [];


    for (let i = 0; i < arregloUno.length; i++) {
        //arregloResultado[i] = arregloUno[i] + arregloDos[i];
        arregloResultado.push(arregloUno[i] + arregloDos[i]);
    }

    arregloResultado.forEach(element => {
        console.log(element);
    });
}

//---------------Objetos

// ejemploObjetos();
function ejemploObjetos() {

    //Forma Lineal
    let cuadrado = {
        cantidadLados: 4,
        color: "azul",
        area: lado => lado * lado,
    };

    console.log(cuadrado);


    //Clase object
    let cuadrado2 = new Object();

    cuadrado2.cantidadLados = 4;
    cuadrado2.color = "Gris"
    cuadrado2.area = lado => lado * lado;

    console.log(cuadrado2);

    //Clase
    class Figura {
        constructor(cantidadLados, color, area) {
            this.cantidadLados = cantidadLados;
            this.color = color;
            this.area = area;
        }
    }

    let triangulo = new Figura(3, "Amarillo", lado => lado * lado);

    console.log(triangulo);

}

// accesoObjetos();
function accesoObjetos() {
    class Figura {
        constructor(cantidadLados, color, area) {
            this.cantidadLados = cantidadLados;
            this.color = color;
            this.area = area;
        }
    }

    let triangulo = new Figura(3, "Amarillo", lado => lado * lado);

    // console.log(triangulo.color);
    // console.log(triangulo["cantidadLados"]);


    // console.log(Object.getOwnPropertyNames(triangulo));
    // console.log(Object.values(triangulo));

    for (const key in triangulo) {
        console.log(key + " : " + triangulo[key]);
    }

}
let listUsuarios = [];

guardarUsuario("JhanCarlos", "1234", "jcmc@gmail.com");
guardarUsuario("Jose", "4321", "jose@gmail.com");



function guardarUsuario(nickName, password, email) {

    class Usuario {
        constructor(nickName, password, email) {
            this.nickName = nickName;
            this.password = password;
            this.email = email;
        }
    }


    let newUsuario = new Usuario(nickName, password, email);

    listUsuarios.push(newUsuario);

}

// console.log(listUsuarios);

// validarPassword("JhanCarlos", "1234");
function validarPassword(nickName, passwordValidar) {

    listUsuarios.forEach(usuario => {
        if (usuario.nickName === nickName) {
            if (passwordValidar != usuario.password) {
                console.log("La contraseña no corresponde");
            } else {
                console.log("Las constraseñas son iguales");

            }
        }
    });
}


// ejemploClass();
function ejemploClass() {
    class Producto {
        constructor(nombre, id, marca, precio) {
            this.nombre = nombre;
            this.id = id;
            this.marca = marca;
            this.precio = precio;
        }
    }

    const productoUno = new Producto("Telefono", 1, "iPhone", 5000000);

    console.log(productoUno);
    // console.log(productoUno["precio"]);

    // console.log(Object.keys(productoUno));
    // console.log(Object.values(productoUno));

    for (const key in productoUno) {
        console.log(productoUno[key]);
    }
}

//------------------Funciones

//Basico
// saludar(); //Llamado
function saludar() {
    console.log("Hoola Mundo");
}

//Con parametros
let apellidoIngresado = "Martinez";
// saludoPersonalizado("Jhan", apellidoIngresado);
function saludoPersonalizado(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

//Con retorno
// let resultado = saludoRetorno("3214"); //Llamado

// console.log(resultado);

function saludoRetorno(passValidar) {
    let mensaje = "";

    if ("1234" === passValidar) {
        mensaje = "La contraseña es valida"
    } else {
        mensaje = "La contraseña No coincide"
    }
    return mensaje;
}

//---------------Arrow Function

//Declaracion de funcion en flecha
const mensaje = (a) => console.log(`Mensaje en Arrow ${a}`);
// mensaje("Function");

//Retorno
const suma = (a, b) => a + b;
let resultado = suma(3, 7);
// console.log(suma(3,7));

//
const operaciones = (a, b, operacion) => {
    if (operacion === "+") {
        return a + b;
    } else if (operacion === "-") {
        return a - b;
    } else if (operacion === "*") {
        return a * b;
    }
};

// console.log(operaciones(10, 2, "*"));