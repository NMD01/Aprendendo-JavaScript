function carregar(){

var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var oi = document.querySelector('div#oi')

var data = new Date()
var hora = data.getHours()
//hora=20


msg.innerHTML=`Agora são ${hora} horas. `

if(hora >= 5 && hora <12 ){
    //bom dia
    img.src = 'manha-removebg-preview.png'
    document.body.style.background ="#B0E0E6"
    oi.innerHTML = `Bom dia`


}else if(hora >=12 && hora <= 18){
    //boa tarde
    img.src = 'tarde-removebg-preview.png'
    document.body.style.background = '#fe8202'
    oi.innerHTML = `Boa tarde`


}else{
    //boa noite
    img.src= 'noite-removebg-preview.png'
    document.body.style.background = '#0d1a20'
    oi.innerHTML = `Boa noite`
}


}