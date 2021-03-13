var agora = new Date()

var hora = agora.getHours()
if(hora >= 0 && hora < 24){
    console.log(`Agora são ${hora} Horas`)}


if(hora >= 5 && hora < 12){
    console.log('Bom dia')

}else if(hora >= 12 && hora <= 18){   
    console.log('Boa tarde')
    
}else if(hora >= 0 && hora <= 4){
     console.log('Boa madrugada')
    
    }else if(hora >= 19 && hora < 24){
     console.log('Boa Noite')
    
    }else if(hora >= 24){
            console.log('hora errada, por favor digite novamente')
            
        }
    
    
