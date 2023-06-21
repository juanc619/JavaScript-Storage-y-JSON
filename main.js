// localStorage
// sessionStorage

// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre", "juan carlos");

// let usuario = "jc";
// localStorage.setItem("usuario", usuario);

// let usuarioEnLocalStorage = localStorage.getItem("usario");
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado", usuarioIngresado);
// let usuarioIngresadoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioEnLocalStorage);

 const usuario = {
    nombre: "juan carlos",
    edad : 619
 }

 //Opcion 1
 const usuarioJSON = JSON.stringify(usuario);
 localStorage.setItem("usuario", usuarioJSON);

 // Opcion 2
 localStorage.setItem("usuario", JSON.stringify(usuario));

 // Opcion 1
 const usuarioEnLocalStorage = localStorage.getItem("usuario");
 const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);

 //Opcion 2
 const usuarioEnLS = JSON.parse(localStorage.getItem(usuario));

 console.log(usuarioEnLS);

 // Array de objetos
 const productos = [
    {nombre: "silla", precio: 50},
    {nombre: "sillon", precio: 150},
    {nombre: "mesa", precio: 250},
 ];

 localStorage.setItem("productos", JSON.stringify(productos));

 const productosEnLS = localStorage.getItem("productos");
 console.log(productosEnLS);


 // Ejemplo de dark mode
 
 const botonColorMode = document.querySelector("#color-mode");
 const body = document.body;

 let darkmode = localStorage.getItem("dark-mode");
 
 function activarDarkMode () {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
 }

 function desactivarDarkMode () {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
 }
 
 if (darkmode === "activado") {
    activarDarkMode();
 } else {
    desactivarDarkMode();
 }

 botonColorMode.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");

    if (darkmode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
 })