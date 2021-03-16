function calcular(){
    
    
    
    var n1 = document.querySelector('input#inicial')
    var max1 = document.querySelector('input#max')
    var pular1 = document.querySelector('input#pular')
    var res = document.querySelector('div#res')
    
    
    
    if(n1.value.length == 0 || max1.value.length == 0){
    window.alert('[ERRO]Impossivel calcular sem os dados')




}else if(pular1.value.length == 0){
        window.alert('[ERRO]Pular está vazio, então será pulado 1')
    
        var n = Number(n1.value)
        var max = Number(max1.value)
        var pular = 1
        var emoji = String.fromCodePoint (0x27A1)

    for(n ; n <= max ; n += pular){
        res.innerHTML += ` ${emoji} ${n}`}
    
    
    }
    
    
 if(n1.value >= 0 && max1.value > 0 && pular1.value > 0){
     
 
     var n = Number(n1.value)
     var max = Number(max1.value)
     var pular = Number(pular1.value)
     var emoji = String.fromCodePoint (0x27A1)

 for(n ; n <= max ; n += pular){
     res.innerHTML += ` ${emoji} ${n}`}
 
  }
 
 
    
    


    



}


    
    
    

        
    
    
    
    
    
    
    
    
        

    
         
    




    

    


    
       
    
        

        
    













