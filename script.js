let num = document.getElementById('txtn')
let list = document.getElementById('flist')
let res = document.getElementById('resu')
let valores = []

function numero (n){
    if(Number(n) >= 1 && Number(n) <= 10)
    {
        return true 
    }else{
        return false
         
    }
}

function lista (n, l ){
    if(l.indexOf(Number(n)) 
    !=-1){
        return true 
    }else{
        return false
    }
}
function calcular () {
     if (numero(num.value) && !lista(num.value, valores)){

     valores.push(Number(num.value, valores))

    let item = document.createElement('option')
    item.text=`Valor ${num.value} foi adicionado`
    list.appendChild(item)
    resu.innerHTML=''

    }else {
    window.alert('[ERRO] valor inválido ou encontrado na lista.')
}

num.value = ''
num.focus()
}    

function conclusao (){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posi in valores){

        soma += valores[posi]
            if(valores[posi] > maior)
              maior = valores[posi]
              if (valores[posi] < menor)
                menor = valores[posi]
    }
    media = soma / tot
    resu.innerHTML=''
    resu.innerHTML+= `<p>Ao todo temos ${tot} números cadastrados.</p>`
    resu.innerHTML+= `<p>O maior número é ${maior}</p>`
    resu.innerHTML+=`<p>O menor número é ${menor}</p>`
    resu.innerHTML+=`<p> A soma entre todos os números é ${soma}</p>`
    resu.innerHTML+=`<p> A média entre os números é ${media}.</p>`

   }

 }
