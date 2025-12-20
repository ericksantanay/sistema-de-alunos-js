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


// Saidas
let res = document.getElementById('lista')


// Saida das estatistica
// Saida da media
let me = document.getElementById('media')

// Saida da maior nota
let maiorN = document.getElementById('maiorNota')

// Saida da menor Nota
let menorN = document.getElementById('menorNota')

// Saida dos aprovados
let ap = document.getAnimations('aprovados')

// Saida dos Reprovados
let rep = document.getElementById('reprovados')

// Saida dos que estão em Recuperação
let rec = document.getElementById('recuperacao')


// Função adicionar
function Adicionar() {
    let nome = document.getElementById('nome').value
    let nota = Number(document.getElementById('nota').value)

    if (nome === '') {
        alert('Preencha os Campos!')
        return
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
    //Server para não repetir 
    res.innerHTML = ''
    media = 0 // zerarando a soma antes do forEach. // Reset da soma!!!
    maiorNota = 0
    menorNota = 0 
    aprovados = 0
    reprovados = 0
    recuperação = 0


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
        media += item.nota // Acumulando o valor
    });
}





// Função de remover o aluno
function Remover(indice) {

    armazenarDados.splice(indice, 1)
    atualizarLista()
}




// Função da estatistica
function CalcularResultado() {
    
    me.innerText = `Média geral da turma: ${media}`
   


    atualizarLista()
}