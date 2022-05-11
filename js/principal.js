var titulo = document.querySelector(".titulo");
titulo.textContent = "Fausto Professor";

//Calculo da Media

var primeiro = document.querySelector("#primeiro-aluno");
console.log(primeiro);

var tdNota1 = primeiro.querySelector(".info-nota1")
console.log(tdNota1)

var tdNota2 = primeiro.querySelector(".info-nota2")
console.log(tdNota2)

var nota1 = parseFloat(tdNota1.textContent);
console.log(nota1);

var nota2 = parseFloat(tdNota2.textContent);
console.log(nota2);

var media = (nota1 + nota2)/2;
console.log(media)

var tdMedia = primeiro.querySelector(".info-media");
tdMedia.textContent = media;

//Verificando a situacao
var situacao = 'Aprovado';
if(media < 6)
    situacao = 'Reprovado';

var tdSituacao = primeiro.querySelector(".info-situacao")
tdSituacao.textContent = situacao
    

//Todos os alunos

var alunos = document.querySelectorAll(".alunos");
