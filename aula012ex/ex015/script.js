function verificar(){
    var data = new Date
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || (Number(fano.value) > ano) || fano.value < 1){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')



        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src', 'homemp.png')
            }else if(idade >=11 && idade <= 21){
                //jovem
                img.setAttribute('src', 'homemj.png')
            }else if(idade > 21 && idade < 60 ){
                //adulto
                img.setAttribute('src', 'homema.png')
            }else if(idade >=60){
                img.setAttribute('src', 'homemi.png')
                //idoso
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src', 'mulherp.png')
                

            }else if(idade >= 11 && idade <=21){
                //jovem
                img.setAttribute('src', 'mulherj.png')

            }else if(idade > 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'munhera.png')
            }else if(idade >= 60){
                //idoso
                img.setAttribute('src', 'mulheri.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}