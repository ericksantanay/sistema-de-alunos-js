// Array para armazenar os dados
let armazenarDados = []

// Indice para percorrer o array
indice = 0

// Media da turma 
let media = 0

// Maior Nota da Turma
let maiorNota = 0

// Menor Nota 
let menorNota = 0

// Aprovados
let aprovados = 0

// Reprovados
let reprovados = 0

// Recuperação
let recuperação

// Sidas
let estatisca = document.getElementById('estatisca')
let res = document.getElementById('lista')

// Função adicionar
function Adicionar() {
    let nome = document.getElementById('nome').value
    let nota = document.getElementById('nota').value

    if (nome === '' && nota === '') {
        alert('Preencha os Campos!')
    }

    // Colocando tudo em um objeto
    let dados = {
        nome: nome,
        nota: nota
    }

    armazenarDados.push(dados)

    atualizarLista()
    
    document.getElementById('nome').value = ''
    document.getElementById('nota').value = ''
}


// Função Para Não repetir codigo
function atualizarLista() {
    //Server para não repetir as lista
    estatisca.innerHTML = ''
    res.innerHTML = ''


    // Laço que vai percorrer o array 
    armazenarDados.forEach((item, indice) => {
        res.innerHTML += 
        `
            <div class="alunos">
                    <p>Aluno: ${item.nome}</p>
                    <p>Nota: ${item.nota}</p>
                    <button onclick="Remover(${indice})">Remover</button>
            </div>
        `
        media += item.nota
    });

    



}

// Função de remover o aluno
function Remover(indice) {

    armazenarDados.splice(indice, 1)
    atualizarLista()
}


// Função da estatistica
function CalcularResultado() {
   

    atualizarLista()
}