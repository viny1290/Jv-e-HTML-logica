function pularLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pularLinha();

}

var vitorias = parseInt(propt("Numero de vitorias"));
var empates = parseInt(prompt("numero de empates"));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time é " + pontos);

if (pontos > 28) {

    mostra("Seu time está melhor do que o ano passado");

}

if (pontos < 28) {

    mostra("Seu time está pior do que o ano passado");

}

if (pontos == 28) {

    mostra("Seu time está igual o ano passado");

}