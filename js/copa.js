function pularLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pularLinha();

}

var limite = parseInt(prompt("Entre com a data limite: "));
var anoCopa = 1930;

while(anoCopa <= limite) {

    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;

}

mostra("Fim");
