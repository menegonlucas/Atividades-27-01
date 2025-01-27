function calcularReajuste() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    let aumento;
    let novoSalario;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = 0.15; // 15% de aumento
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = 0.12; // 12% de aumento
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = 0.09; // 9% de aumento
    } else if (salarioAtual >= 3000) {
        aumento = 0.06; // 6% de aumento
    } else {
        document.getElementById('resultado').innerHTML = "Salário inválido. O salário deve ser maior ou igual a R$ 1.500,00.";
        return;
    }

    novoSalario = salarioAtual * (1 + aumento);
    document.getElementById('resultado').innerHTML = `Salário Atual: R$ ${salarioAtual.toFixed(2)}<br>Aumento: ${(aumento * 100).toFixed(0)}%<br>Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}