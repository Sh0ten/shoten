/* botao voltar */
function primeiroCap() {
	alert('Este é o primeiro capítulo!');
}

/* funcao do select */
function link(URL) {
	let link = URL;
	
	if (link != '#') {
		document.location = link;
	}
}

/* botao avancar */
function ultimoCap() {
	alert('Você chegou no último capítulo!');
}
