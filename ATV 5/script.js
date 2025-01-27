function calcular() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    let resultado = '';

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = 'Por favor, insira números válidos.';
    } else {
        const maior = Math.max(numero1, numero2);
        const menor = Math.min(numero1, numero2);
        resultado = `O maior número é: ${maior} <br> O menor número é: ${menor}`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}