function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var totalFamliares = parseInt(prompt("Quantidade de Familiares?"));

var numero = 1;

var totalIdades = 0

while(numero <= totalFamliares) {

    var idade = parseInt(prompt("Informe idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;

}

var mediaDasIdades = totalIdades/totalFamliares;
mostra("A media das idades dos familiares é " + mediaDasIdades);