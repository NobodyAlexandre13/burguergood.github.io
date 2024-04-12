document.addEventListener('DOMContentLoaded', ()=>{
    const adicionar_no_cart = document.querySelectorAll('.adicionar')
    const lista_no_cart = document.querySelector('.produtos_cart')
    const preco_total = document.querySelector('.total')
    const contador_de_produtos = document.querySelector('.contador')
    const enviar_pedido = document.querySelector('.enviar_pedido')

    let Itens_cart = []
    let total = 0;

    adicionar_no_cart.forEach((button, index)=>{
        button.addEventListener('click', ()=>{
            const item = {
                nome: document.querySelectorAll('.nome_burgur')[index].textContent,
                preco: parseFloat(document.querySelectorAll('.preco')[index].textContent),
                qtdd: 1
            };

            const existencia = Itens_cart.find(
                (cartItem) => cartItem.nome === item.nome
            )
            if(existencia){
                existencia.qtdd++
            }
            else{
                Itens_cart.push(item)
            }

            total += item.preco

            atualizarCart();
        });

        function atualizarCart(){
            atualizaCartCount(Itens_cart.length)
            atualizarCartItens()
            atualizarTotalPreco()
        }
        function atualizaCartCount(count){
            contador_de_produtos.textContent = count
        }
        function atualizarCartItens(){
            lista_no_cart.innerHTML = '';

            Itens_cart.forEach((item, index) => {
                const cartItem = document.createElement('div')

                cartItem.classList.add('cart-item', 'individual-item')
                cartItem.innerHTML = `
                <span>(${item.qtdd}x) </span>
                <span class="nome_cart">${item.nome} </span>
                <span>${(item.preco * item.qtdd)} KZ</span>
                <button class="remover-btn" data-index="${index}">x</button>
                `

                lista_no_cart.append(cartItem)
            })

            const romoverbtn = document.querySelectorAll(".remover-btn")

            romoverbtn.forEach((button) => {
                button.addEventListener('click', (event)=>{
                    const index = event.target.dataset.index
                    romoverItemCart(index)
                })
            })
        }

        function romoverItemCart(index){
            const removerItem = Itens_cart.splice(index, 1)[0]
            total -= removerItem.preco * removerItem.qtdd 
            contador_de_produtos.textContent -= 1
            preco_total.textContent = `${(total).toFixed(2)} KZ`
            atualizarCartItens()
        }

        function atualizarTotalPreco(){
            preco_total.textContent = `${total.toFixed(2)} KZ`
        }

        function enviarPedido(){
            var pedido = document.querySelector('.local_entrega').value
            var quino = lista_no_cart.textContent
            Itens_cart.forEach((item) => {
                const linkWhat = `https://api.whatsapp.com/send?phone=926224888&text=${encodeURIComponent(pedido)}&${encodeURIComponent(quino)}`
    
                window.open(linkWhat, '_blank')
            })
        }
    
        enviar_pedido.addEventListener('click', enviarPedido)

    })
})

