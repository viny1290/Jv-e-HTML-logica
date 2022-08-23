function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var numeroPensado = Math.round(Marh.random()) * 10;

var tentativas = 1;

while(tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute"));

    if(chute == numeroPensado) {

        mostra("Você acertou");
        break;

    } else {

        mostra("Você errou");

    }

    tentativas++;

}

mostra("Fim");