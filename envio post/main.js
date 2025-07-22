const btn = document.getElementById('enviar');
const respuesta = document.getElementById('respuesta');

btn.addEventListener('click', async () => {
    const title = document.getElementById('titulo').value.trim();
    const body = document.getElementById('cuerpo').value.trim();
    const userId = document.getElementById('userId').value.trim();

    if (!title || !body || !userId || isNaN(userId)) {
        respuesta.innerHTML = '<p style="color: red;">Por favor, completa todos los campos.</p>';
        return;
    }

    try {
        respuesta.textContent = 'Publicando post...';
                
        const peticion = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: Number(userId)
            })
        });

        const data = await peticion.json();

        respuesta.innerHTML = `
            <p style="color: green;">Post creado exitosamente:</p>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Título:</strong> ${data.title}</p>
            <p><strong>Contenido:</strong> ${data.body}</p>
            <p><strong>ID del Usuario:</strong> ${data.userId}</p>    
        `;
    } catch (error) {
        respuesta.textContent = 'Error: ' + error.message;
    }
});
