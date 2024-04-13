// Questões do quiz;
quest1 = ["No sistema operacional Linux, existem diversos comandos para manipulação de arquivos tais como: mkdir e rmdir, cujas funções são, respectivamente,"]
quest2 = ["Assinale a opção que apresenta apenas sistemas operacionais para computadores com base em software livre."]
quest3 = ["Em se tratando de um computador com sistema Linux, se o usuário precisar listar todos os arquivos de um diretório via linha de comandos, deverá executar o comando: "]
quest4 = ["A respeito dos softwares livres, responda. Qual o principal diferencial dos softwares livres em relação aos softwares proprietários?"]
quest5 = ["Assinale a opção que indica a extensão de arquivo padrão dos documentos de texto criados no LibreOffice Writer. "]
quest6 = ["Para criar, em um terminal Linux, uma pasta chamada -Pelé Eterno, fez mais de mil gols-, qual o comando deverá ser digitado?"]
quest7 = ["O principal propósito de um sistema operacional consiste em promover um uso mais eficiente do hardware. Assinale a alternativa que traz a principal diferença entre os sistemas operacionais Linux e Windows."]
quest8 = ["Qual conjunto de teclas utiliza-se no Writer quando se deseja enviar para impressão o atual documento em edição?"]
quest9 = ["Dentre as IDEs a seguir  qual é mais indicada para desenvolvedores Python?"]
quest10 = ["No sistema operacional Linux, o que o comando “pwd” mostra de resultado no terminal?"]

//Respostas correspondente a cada questão;
resp1 = ["mkdir– cria diretórios; rmdir– remove diretórios vazios.","mkdir – modifica diretórios; rmdir – remove diretórios vazios.","mkdir – cria diretórios; rmdir– renomeia diretórios.","mkdir – modifica diretórios; rmdir – renomeia diretórios."] 
resp2 = ["BeOS, ReactOS e Microsoft Windows 7.","Microsoft Windows XP, MS-DOS e MacOS.","Mint, Ubuntu e Debian.","MacOS, Mumps68K e Linux."] 
resp3 = ["ls","dir","list","cmd"] 
resp4 = ["Suporte técnico dedicado","Código fonte aberto","Facilidade de uso e Interface intuitiva","Políticas de segurança e privacidade bem definidas"] 
resp5 = [".odp",".odf",".odz",".odt"]
resp6 = ["rmdir Pelé Eterno fez mais de mil gols","rmdir Pelé Eterno fez mais de mil gols","mkdir 'Pelé Eterno, fez mais de mil gols'","mkdir Péle Eterno fez mais de mil gols"] 
resp7 = ["Qualquer programador pode reprogramar o código do Linux, o que não é permitido no Windows.", "Linux é um sistema proprietário, ao contrário do Windows.", "Enquanto o Linux possui diferentes versões, existe apenas uma versão do Windows.", "O Windows pode rodar em computadores e smartphones, ao passo que o Linux roda apenas em smartphones."] 
resp8 = ["CTRL+ I","CTRL+ P","CTRL+ N","CTRL+ B"] 
resp9 = ["JetBrains PhpStorm","VisualStudio","JetBrains PyCharm","Notepad++"] 
resp10 = ["a pasta atual na qual o usuário está no momento.","a quantidade de linhas de um arquivo.","o nome do usuário que está logado no sistema.","o conteúdo do arquivo."] 

//Ordem da Questão;
ord1 = ["Questão 1/10"]
ord2 = ["Questão 2/10"]
ord3 = ["Questão 3/10"]
ord4 = ["Questão 4/10"]
ord5 = ["Questão 5/10"]
ord6 = ["Questão 6/10"]
ord7 = ["Questão 7/10"]
ord8 = ["Questão 8/10"]
ord9 = ["Questão 9/10"]
ord10 = ["Questão 10/10"]

// Sequencia das Respostas
sequenciaResposta = [ 0, 2, 0, 1, 3, 2, 0, 1, 2, 0]

// Variaveis;
var perg = document.querySelector('h2')
var ordem = document.querySelector('p')
var botaom1 = document.querySelector('button#botao1')
var botaom2 = document.querySelector('button#botao2')
var botaom3 = document.querySelector('button#botao3')
var botaom4 = document.querySelector('button#botao4')
var proxima = document.querySelector('button#ProximaQuest')
var todosBotoes = document.getElementById('Botoes')
var index = document.querySelector('input#index')
var contador = 0

// Mudança inicial;
perg.innerHTML = quest1
ordem.innerHTML = ord1
botaom1.innerHTML = resp1[0]
botaom2.innerHTML = resp1[1]
botaom3.innerHTML = resp1[2]
botaom4.innerHTML = resp1[3]

//Funções;
function clicouBotao(botaoClicado) {
    let indexNumber = Number(index.value)
    let indexAnswer = sequenciaResposta[Number(index.value) - 1]

    if (botaoClicado.innerHTML == window["resp" + indexNumber][indexAnswer]){
        botaoClicado.style.backgroundColor = 'rgb(13, 220, 13)'
        botaoClicado.style.color = 'black'
        contador += 1
    }else{
        botaoClicado.style.backgroundColor = 'red'
        botaoClicado.style.color = 'black'
    }

    document.getElementById('ProximaQuest').style.visibility = 'visible'
    document.getElementById('ProximaQuest').style.display = 'inline'
    
    botaom1.setAttribute('disabled','disabled')
    botaom2.setAttribute('disabled','disabled')
    botaom3.setAttribute('disabled','disabled')
    botaom4.setAttribute('disabled','disabled')
}
// Função para limpar os atributos dos botões;
function limpaBotao(){
    botaom1.removeAttribute('disabled')
    botaom2.removeAttribute('disabled')
    botaom3.removeAttribute('disabled')
    botaom4.removeAttribute('disabled')
    botaom1.style.backgroundColor = 'white'
    botaom2.style.backgroundColor = 'white'
    botaom3.style.backgroundColor = 'white'
    botaom4.style.backgroundColor = 'white'
    botaom1.style.color = 'black'
    botaom2.style.color = 'black'
    botaom3.style.color = 'black'
    botaom4.style.color = 'black'
}

// Função para voltar pra tela inicial do quiz;
function refazerQuiz(){
   document.location.reload(true)
}

// Função do botão proxima, para ir pra próxima questão;
function proximaQuestao(){
    index.value = Number(index.value) + 1
    limpaBotao()
    if (index.value < 11){
        perg.innerHTML = window["quest" + index.value]
        ordem.innerHTML = window["ord" + index.value]
        botaom1.innerHTML = window["resp" + index.value][0]
        botaom2.innerHTML = window["resp" + index.value][1]
        botaom3.innerHTML = window["resp" + index.value][2]
        botaom4.innerHTML = window["resp" + index.value][3]
        document.getElementById('ProximaQuest').style.visibility = 'hidden'
        document.getElementById('ProximaQuest').style.display = 'none'
    }else{
        ordem.innerHTML = 'Obrigado por participar dessa prova! Wenker: Aguarde o professor anotar sua pontuação!!!'
        perg.innerHTML = 'Você acertou ' + contador + " questões de 10."

        document.getElementById('botao1').style.display = 'none'
        document.getElementById('botao2').style.display = 'none'
        document.getElementById('botao3').style.display = 'none'
        document.getElementById('botao4').style.display = 'none'
        document.getElementById('ProximaQuest').style.display = 'none'

        document.getElementById('refazer').style.visibility = 'visible'
        document.getElementById('refazer').style.display = 'inline'

        document.getElementById('info').style.visibility = 'visible'
        document.getElementById('info').style.display = 'flex'

    }

}
