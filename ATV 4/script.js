document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("numberForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obter os valores dos 6 números
      const numbers = [
        parseInt(document.getElementById("number1").value, 10),
        parseInt(document.getElementById("number2").value, 10),
        parseInt(document.getElementById("number3").value, 10),
        parseInt(document.getElementById("number4").value, 10),
        parseInt(document.getElementById("number5").value, 10),
        parseInt(document.getElementById("number6").value, 10),
      ];
  
      const resultDiv = document.getElementById("result");
  
      // Validar se todos os números foram inseridos corretamente
      if (numbers.some(isNaN)) {
        resultDiv.textContent = "Por favor, insira valores válidos para todos os números.";
        resultDiv.style.color = "#ef4444"; // Vermelho para erro
        return;
      }
  
      // Encontrar o maior número
      const maxNumber = Math.max(...numbers);
  
      // Exibir o resultado
      resultDiv.innerHTML = `<p>O maior número digitado foi: <strong>${maxNumber}</strong></p>`;
      resultDiv.style.color = "#10b981"; // Verde para sucesso
    });
  });
  