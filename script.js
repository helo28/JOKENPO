let partida = 0;
let jogador = 0;
let computador = 0;
let empate = 0;

// COSNT É PORQUE ESSAS OPÇÕES NÃO MUDAM
const pedra = document.querySelector('#pedra'); // # É PRA ID
const papel = document.querySelector('#papel'); // # É PRA ID
const tesoura = document.querySelector('#tesoura'); // # É PRA ID
// CONST PORQUE PC VAI SER SEMPRE PC
const pc = document.querySelector("#pc");

// DEFININDO TODOS OS TIPOS DE JOGADAS
function jogar() {
    partida++; // PARTIDA COMEÇA COM 0 NESSE ++ VAI AUMENTAR PARA PARTIDA 1 E ASSIM POR DIANTE

    // PARTE DE ESCOLHER A OPÇÃO PELA PESSOA POR CHECKED
    // CHECANDO SE TÊM OPÇÕES SELECIONADAS E AQUI ELE ESTÁ DANDO QUE NÃO ESTÁ POR ISSO O FALSE
    if( document.querySelector("#pedra").checked == false &&
        document.querySelector("#papel").checked == false &&
        document.querySelector("#tesoura").checked == false) {
            
            //MANDANDO ESCOLHER UMA OPÇÃO, POR QUE NÃO TEM NENHUMA ESCOLHIDA
            alert("Escolha uma OPÇÃO!");

        // CRIANDO A PARTE DE ESCOLHA DO COMPUTADOR POR NÚMERO DO SWITCH
        }else {
            // CRIANDO UMA NOVA VÁRIAVEL QUE USA DA CLASSE MATH PARA ESCOLHER
            // O NÚMERO ALEATÓRIO MULTIPLICADO PR 3 PARA DETERMINAR QUAL É A OPÇÃO
            // ESSE FLOOR DÁ O NÚMERO INTEIRO, PORQUE ANTES ELE DAVA QUEBRADO
            let sorteio = Math.floor(Math.random() *3+1) // RANDOM = QUALQUER (ALEATÓRIO)

            switch(sorteio){
                case 1: pc.src = "img/pcpedra.png"; break;
                case 2: pc.src = "img/pcpapel.png"; break;
                case 3: pc.src = "img/pctesoura.png"; break;
            }

            // CHAMANDO A FUNÇÃO DE VERIFICAÇÃO DE GANHADOR APÓS O JOGO
            verificar(sorteio)
        }
}

// CRIANDO A FUNÇÃO QUE VERIFICA QUEM GANHOU E QUEM PERDEU OU EMPATE
function verificar(escolha) { 
    // CHECKED É QUANDO A PESSOA ESCOLHEU E NÚMERO QUANDO É A MÁQUINA

    // NESSE PRIMEIRO IF ESTÁ FAZENDO A CONDIÇÃO PARA A PESSOA PERDER
    // DE ACORSO COM AS ESCOLHAS DA MÁQUINA
    if( document.querySelector("#pedra").checked == true && escolha == 2 || 
        document.querySelector("#papel").checked == true && escolha == 3 ||
        document.querySelector("#tesoura").checked == true && escolha == 1) {
        
        // AUMENTANDO NA PONTUAÇÃO DO COMPUTADOR
        computador++;

        // ESCREVE QUE A PESSOA PERDEU 
        document.querySelector("#resultado").innerText = "VOCÊ PERDEU!";
        // E AUMENTA NA PONTUAÇÃO DO COMPUTADOR
        document.querySelector("#computador").innerText = "COMPUTADOR!" + computador;
    }else

    // NESSE SEGUNDO IF É PARA COLOCAR A CONDIÇÃO PARA O JOGADOR GANHAR 
    // DE ACORDO COM AS ESCOLHAS DO COMPUTADOR
    if( document.querySelector("#pedra").checked == true && escolha == 3 || 
        document.querySelector("#papel").checked == true && escolha == 1 ||
        document.querySelector("#tesoura").checked == true && escolha == 2) {

        // AUMENTANDO NA PONTUAÇÃO DO JOGADOR
        jogador++;

        // ESCREVE QUE A PESSOA GANHOU
        document.querySelector("#resultado").innerText = "VOCÊ VENCEU!";
        // E AUMENTA NA PONTUAÇÃO DA PESSOA
        document.querySelector("#jogador").innerText = "JOGADOR!" + jogador;
    }else 

    // NESSE TERCEIRO IF É PARA MOSTRAR AS OPÇÕES PARA GERAR EMPATE
    // OU SEJA SE DE AMBOS OS JOGADORES FOR IGUAL DA EMPATE
    if (document.querySelector("#pedra").checked == true && escolha == 1 || 
        document.querySelector("#papel").checked == true && escolha == 2 ||
        document.querySelector("#tesoura").checked == true && escolha == 3) {

        document.querySelector("#resultado").innerText = "EMPATOU!";

        // AUMENTA NO EMPATE
        empate++;
        }
            
        
}