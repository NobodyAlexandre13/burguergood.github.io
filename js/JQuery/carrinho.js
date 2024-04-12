num_produtos = 0;

$('.compra button').on('click', () => {
  num_produtos++;
  $('.contador').text(num_produtos);
  let n = $('.contador').text(num_produtos);

  $('.sem_produto').css('display', 'none');
  $('.abrir_carrinho').css('display', 'block');
});
