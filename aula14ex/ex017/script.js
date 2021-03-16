function calcular(){
    
    
    var res = document.querySelector('div#res')
    var numero1 = document.querySelector('input#txtnumero1')
    var numero2 = document.querySelector('input#txtnumero2')
    var res2 = document.querySelector('select#tabuada')


    
    
if(numero1.value.length == 0 || numero2.value.length == 0){
  window.alert('[ERRO]Verifiqueos dados e tente novamente')
  
}else{

var n2 =Number(numero2.value)
  var n1 = Number(numero1.value)
    var ini = Number(0)
 res.innerHTML =''
for( var ini = 0 ; ini <= n2 ; ini++ ){
 
    res.innerHTML += `${n1} x ${ini} = ${n1*ini} <br/>`
    }
}






}