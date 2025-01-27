document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("triangleForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const sideA = parseFloat(document.getElementById("sideA").value);
      const sideB = parseFloat(document.getElementById("sideB").value);
      const sideC = parseFloat(document.getElementById("sideC").value);
      const resultDiv = document.getElementById("result");

      if (
        isNaN(sideA) || 
        isNaN(sideB) || 
        isNaN(sideC) || 
        sideA <= 0 || 
        sideB <= 0 || 
        sideC <= 0
      ) {
        resultDiv.textContent = "Por favor, insira valores válidos para os lados.";
        resultDiv.style.color = "#ef4444";
        return;
      }

      let triangleType;
      if (sideA === sideB && sideB === sideC) {
        triangleType = "EQUILÁTERO";
      } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        triangleType = "ISÓSCELES";
      } else {
        triangleType = "ESCALENO";
      }
  
      resultDiv.innerHTML = `<p>O triângulo é: <strong>${triangleType}</strong></p>`;
      resultDiv.style.color = "#10b981";
    });
  });
  