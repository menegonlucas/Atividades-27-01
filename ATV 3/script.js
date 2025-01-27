document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("priceForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const productName = document.getElementById("productName").value.trim();
      const productPrice = parseFloat(document.getElementById("productPrice").value);
      const resultDiv = document.getElementById("result");
  

      if (!productName || isNaN(productPrice) || productPrice <= 0) {
        resultDiv.textContent = "Por favor, insira valores válidos para o nome e o preço.";
        resultDiv.style.color = "#ef4444"; 
        return;
      }
  
    
      let newPrice;
      if (productPrice < 1000) {
        newPrice = productPrice * 1.05;
      } else {
        newPrice = productPrice * 1.07;
      }
  
      resultDiv.innerHTML = `
        <p>Mercadoria: <strong>${productName}</strong></p>
        <p>Preço atualizado: <strong>R$ ${newPrice.toFixed(2)}</strong></p>
      `;
      resultDiv.style.color = "#10b981";
    });
  });
  