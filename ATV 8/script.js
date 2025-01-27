function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira notas válidas.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let situacao;

    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)}<br>Situação: ${situacao}`;
}