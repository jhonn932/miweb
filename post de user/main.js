const input = document.getElementById('userId');
const boton = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');


boton.addEventListener('click', async () => {
	const id = input.value.trim();

	if (!id || isNaN(id)) {
		resultado.textContent = 'Por favor, ingresa un ID valido.';
		return;
	}

	try {
		resultado.textContent = 'Buscando usuario...';
		const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
		
		if (!res.ok) {
			throw new Error('Usuario no encontrado');
		}

		const usuario = await res.json();

		resultado.innerHTML = `
      		<h3>${usuario.name}</h3>
      		<p><strong>Email:</strong> ${usuario.email}</p>
      		<article>${usuario.address.city}</article>
    	`;
	} catch (error) {
		resultado.textContent = 'Error: ' + error.message;
	}
});



