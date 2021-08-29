var btnAnt = document.querySelector('#btnAnt');
var btnPro = document.querySelector('#btnPro');

/* funcao do select */
function link(valor) {
	let link = valor;
	
	if (link != '#') {
		document.location = link;
	}
}

function verificaUrl(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

/* botao voltar */
function voltarCap() {
	let link = document.location.href;
	let caminho = link.split('');
	num = caminho.length - 6;
	
	if (caminho[num] == '.') {
		num = caminho.length - 7;
	}
	
	caminho[num] = Number(caminho[num]);
	caminho[num] = String(caminho[num] - 1);
	caminho = caminho.join('');
	
	if (caminho[num] == '0') {
		alert('Este é o primeiro capítulo!');
	} else {
		document.location = caminho;
	}

}

/* botao avancar */
function adiantarCap() {
	let link = document.location.href;
	let caminho = link.split('');
	num = caminho.length - 6;
	
	if (caminho[num] == '.') {
		num = caminho.length - 6;
	}
	
	caminho[num] = Number(caminho[num]);
	caminho[num] = String(caminho[num] + 1);
	caminho = caminho.join('');
	
	if (verificaUrl(link)) {
		document.location = caminho;	
	} else {
		alert('Você está na última página!');
	}
}
