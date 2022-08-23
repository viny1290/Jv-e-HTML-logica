function pularLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pularLinha();

}

function calculoImc(peso, altura) {

    return peso / (altura * altura);

}

var nome = prompt("Informe seu nome: ");

var alturaInformada = parseFloat(prompt(nome + "informe sua altura:"));
var pesoInformado = parseFloat(prompt(nome + "informe seu peso:"));

var imc = calculoImc(alturaInformada, pesoInformado);

mostra(nome + ", o seu IMC é " + imc);

if (imc < 18.5) {

    mostra("Você esta abaixo do recomendado");

}

if (imc > 35) {

    mostra("Você está acima do recomendado");

}

if (imc <= 35 && imc <= 35){

    mostra("Seu IMC está excelente");

}