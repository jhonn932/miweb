const input = document.getElementById('postId');
const btn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');


btn.addEventListener('click', async () => {
    id = input.value;

    if (!id || isNaN(id) || id <= 0 || id > 100) {
        resultado.innerHTML = ' <p class="error"> Por favor, ingresa un ID válido entre 1 y 100.</p>';
        return;
    }

    //si todo está bien, hacemos la petición
    try {
        resultado.innerHTML = 'Cargando comentarios...';
        btn.disabled = true;
        const peticion = await fetch('https://jsonplaceholder.typicode.com/comments?postId=ID'.replace('ID', id));

        if (!peticion.ok) {
            throw new Error('Post no encontrado');
        }

        const result = await peticion.json();
        resultado.innerHTML = `<h3>Este post tiene ${result.length} comentarios</h3>`;

        for (let i = 0; i < result.length; i++) {
            resultado.innerHTML += `
                <ul>
                    <li><strong>Nombre:</strong> <i>${result[i].name}</i></li>
                    <li><strong>Email:</strong> ${result[i].email}</li>
                    <li><strong>Comentario:</strong> ${result[i].body}</li>
                </ul>
            `;
        }
        btn.disabled = false;

    } catch (error) {
        resultado.innerHTML = '<p class="error">Error: ' + error.message + '</p>';
        return;
    }
});