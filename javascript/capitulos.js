function first() {
	alert('Este é o primeiro capítulo!');
}

const select = document.querySelector('#selCap');

select.addEventListener('change', selectLink);
/* funcao do select */
function selectLink() {
	let valSelect = select.options[select.selectedIndex].value;

	document.location = valSelect;
}

function last() {
	alert('Este é o último capítulo!');
}