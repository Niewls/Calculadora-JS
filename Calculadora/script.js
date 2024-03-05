const tabela = document.querySelector('.tabela');
const result = document.querySelector('.result');
let contador = 0;
tabela.addEventListener('click', e => {
    const el = e.target;
    if(el.innerText.length > 1){
        return;
    }
    if(el.innerText == '='){
        resolver();
        return;
    }
    if(el.innerText == 'C'){
        apagar();
        return;
    }
    if(el.classList.contains('No')){
        contador++;
        if(contador > 1){
            return;
        }
    }
    else{
        contador = 0;
    }
    imprimir(el);
})

function imprimir(el){
    result.innerHTML += el.innerText;
}

function resolver(){
    result.innerHTML = eval(result.innerText);
}

function apagar(){
    result.innerHTML = '';
}

