//criando um botão para ser usado depois na função de adicionar um novo elemento
var meuNodelist = document.getElementsByTagName('li');
for (var i = 0; i < meuNodelist.length; i++) {
	var span = document.createElement('span');
	var txt = document.createTextNode('\u00d7');
	span.className = 'fechar';
	span.appendChild(txt);
	meuNodelist[i].appendChild(span);
}

// Cria uma função para apagar um elemento

var close = document.getElementsByClassName('fechar');
for(var i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = 'none';
	}
}


//Criando uma função para adicionar um novo elemento na lista
function novoElemento() {
	var li = document.createElement('LI');
	var inputValor = document.getElementById('meuInput').value;
	var t = document.createTextNode(inputValor);

	li.appendChild(t);
	if (inputValor === '') {
		alert('insira alguma coisa no campo')
	} else {
		document.getElementById('meuUl').appendChild(li)
	}
	document.getElementById('meuInput').value = '';

	var span = document.createElement('span');
	var txt = document.createTextNode('\u00d7');
	span.className = 'fechar';
	span.appendChild(txt);
	li.appendChild(span);

	
	for(var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}
}


