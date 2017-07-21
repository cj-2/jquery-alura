var sizeFrase = $('.frase').text().split(' ').length;
var contSizeFrase = $('.contador-palavras').text(sizeFrase);

var campoDigitacao = $('.digitacao');
campoDigitacao.on('input', function(){
  var caracteres = campoDigitacao.val().length;
  var palavras = campoDigitacao.val().split(/\S+/).length -1;

  $('.contador-c-digitados').text(caracteres);
  $('.contador-p-digitados').text(palavras);
});
