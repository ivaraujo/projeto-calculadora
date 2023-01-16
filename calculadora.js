let primeiro = document.getElementById('pri_valor');
let segundo = document.getElementById('sec_valor');
let resposta = document.getElementById('resposta')



function somar(){
    if(primeiro.value.length == 0 || segundo.value.length == 0){
        alert('Valor inválido, preencha todos os valores')
    }
    else{
        let total = Number(primeiro.value)+Number(segundo.value);
        resposta.innerHTML = `A soma é: ${total}.`;
         
    }
    
}
function subtrair(){
    if(primeiro.value.length == 0 || segundo.value.length == 0){
        alert('Valor inválido, preencha todos os valores')
    }
    else{
        let total = Number(primeiro.value)-Number(segundo.value);
        resposta.innerHTML =`A subtração é: ${total}.`;
    }
}
function multiplicar(){
    if(primeiro.value.length == 0 || segundo.value.length == 0){
        alert('Valor inválido, preencha todos os valores')
    }
    else{
        let total = Number(primeiro.value)*Number(segundo.value);
        resposta.innerHTML = `A multiplicação é: ${total}.`;
    }
}
function dividir(){
    if(primeiro.value.length == 0 || segundo.value.length == 0){
        alert('Valor inválido, preencha todos os valores')
    }
    else{
        let total = Number(primeiro.value)/Number(segundo.value);
        resposta.innerHTML = `A divisão é: ${total}.`;
    }
}

//primeiro = '';




