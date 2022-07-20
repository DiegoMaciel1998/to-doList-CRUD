let inputNome = document.querySelector('#input_nome')
let btnAdicionar = document.querySelector('#btn')
let listaTarefa = document.querySelector('#lista_tarefas')

btnAdicionar.addEventListener('click', function(){
    let tarefa = {
        nome : inputNome.value
    }

    adicionarTarefa(tarefa)
})

function adicionarTarefa(tarefa){
    let li = criarLi(tarefa)
    listaTarefa.appendChild(li)
    inputNome.value = ''
} 

function criarLi(tarefa){
    let div = document.createElement('div')
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.innerHTML = `${tarefa.nome}`
    
    

    div.appendChild(li)
    li.appendChild(span)

    return li
}