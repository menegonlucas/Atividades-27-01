function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const tipoPeca = document.getElementById('tipoPeca').value;
    let desconto;
    let valorFinal;

    if (isNaN(preco) || preco < 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um preço válido.";
        return;
    }

    switch (tipoPeca) {
        case 'camisa':
            desconto = 0.20; // 20% de desconto
            break;
        case 'bermuda':
            desconto = 0.10; // 10% de desconto
            break;
        case 'calca':
            desconto = 0.15; // 15% de desconto
            break;
        default:
            document.getElementById('resultado').innerHTML = "Por favor, selecione um tipo de peça.";
            return;
    }

    valorFinal = preco * (1 - desconto);
    document.getElementById('resultado').innerHTML = `Preço Original: R$ ${preco.toFixed(2)}<br>Desconto: ${(desconto * 100).toFixed(0)}%<br>Valor Final: R$ ${valorFinal.toFixed(2)}`;
}