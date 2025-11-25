function contrasenaValidar(clave) {
    let password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
    return password.test(clave);
}

let liquido = document.getElementById('liquidoTermometro');
let claves = document.getElementById('claves'); // <-- aquí capturas el input

claves.addEventListener('input', () => { // <-- va conectado al input de la contraseña
    let codigo = claves.value;
    let puntos = 0;

    if (codigo.length >= 8) {
        puntos += 1; 
    }

    if (/[A-Z]/.test(codigo)){
        puntos += 1;
    }

    if (/[0-9]/.test(codigo)){
        puntos += 1;
    }

    if (/[^A-Za-z0-9]/.test(codigo)){
        puntos += 1;
    }

    let porcentaje = (puntos / 4) * 100;

    liquido.style.width = porcentaje + "%";
        
    if (puntos >= 0 && puntos <= 1) {
        liquido.style.backgroundColor = "red"; 
    }

    else if (puntos >= 2 && puntos <= 3) {
        liquido.style.backgroundColor = "yellow"; 
    }

    else if (puntos >= 4) {
        liquido.style.backgroundColor = "green"; 
    }
});

let ver = document.getElementById('vers');
ver.addEventListener('click', function() {
    claves.type = (claves.type === 'password') ? 'text' : 'password';

    ojocerrado.style.display = (claves.type === 'password') ? 'none' : 'block';
    ojoabierto.style.display = (claves.type === 'password') ? 'block' : 'none';
});

let letras = document.getElementById('caracteres');
let numeros = document.getElementById('numero');
let simbolos = document.getElementById('simbolo');
let mayusculas = document.getElementById('mayuscula');
claves.addEventListener('input', () => {
    let codigo = claves.value;

    if (codigo.length >= 8) {
        letras.checked = true;
    }

    else{
        letras.checked = false;
    }

    if (/[A-Z]/.test(codigo)){
        mayusculas.checked = true;
    }

    else {
        mayusculas.checked = false;
    }

    if (/[0-9]/.test(codigo)){
        numeros.checked = true;
    }

    else{
        numeros.checked = false;
    }

    if (/[^A-Za-z0-9]/.test(codigo)){
        simbolos.checked = true;
    }

    else {
        simbolos.checked = false;
    }
});

let iniciar = document.getElementById('ejecutar');

iniciar.addEventListener('click', function() {
    let codigo = claves.value;
    let puntos = 0;

    if (codigo.length >= 8) {
        puntos += 1; 
    }

    if (/[A-Z]/.test(codigo)){
        puntos += 1;
    }

    if (/[0-9]/.test(codigo)){
        puntos += 1;
    }

    if (/[^A-Za-z0-9]/.test(codigo)){
        puntos += 1;
    }

    if (puntos === 4) {
        claves.style.border = '2px solid green';
    }

    else {
        // 1. Añadir la clase de animación
        claves.classList.add('apply-shake');

        // 2. Eliminar la clase después de que termine la animación
        claves.addEventListener('animationend', () => {
        claves.classList.remove('apply-shake');
        }, { once: true }); // { once: true } para que el listener se elimine después de ejecutarse una vez

        claves.style.border = '2px solid red';
    }
});

let cambiofondo = document.getElementById('cambiocolor');
let body = document.getElementById('cuerpo');
let textoModo = document.getElementById("textoscuro");
let luna = document.getElementById("luna");
let sol = document.getElementById("sol");

cambiofondo.addEventListener('click', function() {

    body.classList.toggle('cambio');

    if (body.classList.contains('cambio')) {
        // 🌞 MODO CLARO
        textoModo.textContent = "Claro";
        sol.style.display = "inline-flex";
        luna.style.display = "none";
    } else {
        // 🌙 MODO OSCURO
        textoModo.textContent = "Oscuro";
        luna.style.display = "inline-flex";
        sol.style.display = "none";
    }
});

function iniciarSesion() {
    let usuario = document.getElementById('nombres').value;

    let contrasena = document.getElementById('claves').value;

    let mensaje = document.getElementById('mensajeDinamico');

    if (contrasenaValidar(contrasena)) {
        mensaje.textContent = `Estimado ${usuario} su contraseña es correcta ${contrasenaValidar(contrasena)}`;
    }

    else{
        mensaje.textContent = `Estimado ${usuario} Su contraseña es incorrecta ${contrasenaValidar(contrasena)}`;
    }
}