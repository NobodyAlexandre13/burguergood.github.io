fechar = document.querySelector('.fechar')
cart = document.querySelector('.carrinho')
abrir = document.querySelector('.abrir_carrinho')
btn_add = document.querySelector('.compra')
cart_open = document.querySelector('.abrir_carrinho')
abrir_menu = document.querySelector('.abrir_mobile button')
menu = document.querySelector('.menu_mobile')
fechar_menu = document.querySelector('.fechar_mobile')

abrir.addEventListener('click', ()=>{
    cart.style.display = 'block'
    abrir.style.display = 'none'
})

fechar.addEventListener('click', ()=>{
    cart.style.display = 'none'
    abrir.style.display = 'block'
})

abrir_menu.addEventListener('click', ()=>{
    menu.style.display = 'block'
    menu.style.transition = '.5s'
})
menu.addEventListener('click', ()=>{
    menu.style.display = 'none'
})
fechar_menu.addEventListener('click', ()=>{
    menu.style.display = 'none'
})
