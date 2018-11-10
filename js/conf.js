function geraAposta(tamanho) {
	var text = "";
	for (var i = 0; i < tamanho; i++){
		for(var j = 0; j < 2; j++){
			text += Math.floor(Math.random() * 10);
		}
		text += " ";
	}
	return text;
}
$(function megasena() {
	var tamanho = 6;
	$(function(){
		$('#megasena').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function quina() {
	var tamanho = 5;
	$(function(){
		$('#quina').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function lotomania() {
	var tamanho = 20;
	$(function(){
		$('#lotomania').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function lotoFacil() {
	var tamanho = 15;
	$(function(){
		$('#lotoFacil').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function duplasena() {
	var tamanho = 12;
	$(function(){
		$('#duplasena').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function timemania() {
	var tamanho = 6;
	$(function(){
		$('#timemania').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
