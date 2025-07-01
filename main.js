//EJEMPLO BASICO DE PROGRAMACION ASYNCRONA CON SetTimeout
 doc1 = document.getElementById('doc1');
// doc2 = document.getElementById('doc2');
// doc3 = document.getElementById('doc3');

// doc1.textContent = "Inicio";

// setTimeout(() => {
//     doc2.textContent = "Tarea asincronica";
// }, 2000);

// doc3.textContent = "Fin";


//EJEMPLO CON ASYNC/AWAIT
// async function saludar(){
//     const mensaje = await new Promise(resolve => {
//         setTimeout(() => resolve("Hola Async"), 1000);
//     });

//     doc1.textContent = mensaje;
// }

// saludar();


// EJEMPLO CON ASYNC/AWAIT usando fetch()
async function cargaUsuarios() {
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users/2'); //hacemos la peticion http
        const usuario = await res.json(); //la convertimos en un Json para manipularlo
        doc1.textContent = usuario.name;  //motramos un dato de ese json
    } catch (err) {
        doc1.textContent = "Error al obtener el usuario", err;
    }
}

cargaUsuarios();