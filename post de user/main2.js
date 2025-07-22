const input = document.getElementById('userId');
const btn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', async () => {
	const id = input.value.trim();

	if (!id || isNaN(id) || id > 10 ) {
		resultado.textContent = "El numero no es Valido";
		return;
	}	

	try {

		resultado.textContent = "Buscando posts...";
		const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+id);

		if (!res.ok) {
			throw new Error("Usuario no encontrado");
		}

		const user = await res.json();
		resultado.innerHTML = `
      		<h3>Este usuario tiene ${user.length} posts.</h3>
    	`;
	    
 		for (var i = 0; i < user.length; i++){
	    	resultado.innerHTML += `
      			<dl>
      				<dt><strong>Titulo:</strong><i> ${user[i].title} </i></dt>
      				<dd><strong>Parrafo:</strong> ${user[i].body} </dd>
      			</dl>
    		`;
    	}

	} catch(error) {
		resultado.textContent = 'Error:'+ error.message;
	}

});