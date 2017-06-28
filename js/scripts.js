var noticias = [];

var inputTitle = document.querySelector(".title");
var inputNotice = document.querySelector(".notice");
var botonAgregar = document.querySelector(".add");

function noticia (title, notice) {
	this.title = title;
	this.notice = notice;
}

function ingresarNoticia () {
	var title = inputTitle.value;
	var notice = inputNotice.value;

	var noti = new noticia(title, notice);
	
	noticias.push(noti);
}

function mostrarNoticia () {
	for (noti in noticias) {
		var h3 = document.createElement("H3");
		var p = document.createElement("P");

		h3.innerText = noticias[noti].title;
		p.innerText = noticias[noti].notice;

		document.body.appendChild(h3);
		document.body.appendChild(p);
	}
}

botonAgregar.addEventListener("click", function () {
	ingresarNoticia();
	mostrarNoticia();
})
