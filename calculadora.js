let primeiro = document.getElementById('pri_valor');
let segundo = document.getElementById('sec_valor');
let resultado = document.getSelection('#resultado')
/*
if(primeiro.length == 0 || segundo.length == 0){
    alert('ok')
}
else{
    
}*/

function somar(){
    let total = Number(primeiro.value)+Number(segundo.value);
}
function subtrair(){
     let total = Number(primeiro.value)-Number(segundo.value);
}
function multiplicar(){
    let total = Number(primeiro.value)*Number(segundo.value);
}
alert(total);



