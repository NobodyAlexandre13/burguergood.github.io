const aberto_ou_fechado = document.querySelector('.aberto_fechado')

let data = new Date()
let hora = data.getHours()
let dia = data.getDay()

if(hora >= 22){
    aberto_ou_fechado.style.backgroundColor = 'red'
} else if(hora <= 6){
    aberto_ou_fechado.style.backgroundColor = 'red'
}
if(dia === 0){
    aberto_ou_fechado.style.backgroundColor = 'red'
}else{
    aberto_ou_fechado.style.backgroundColor = '#6bee00'
}