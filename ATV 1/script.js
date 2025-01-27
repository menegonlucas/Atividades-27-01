document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inssForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário
  
      const salaryInput = document.getElementById("salary");
      const salary = parseFloat(salaryInput.value);
      const resultDiv = document.getElementById("result");
  
      if (isNaN(salary) || salary <= 0) {
        resultDiv.textContent = "Por favor, insira um valor de salário válido.";
        resultDiv.style.color = "#ef4444"; // Vermelho para erro
        return;
      }
  
      let discount;
      const teto = 7087.22;
  
      if (salary <= 1212) {
        discount = salary * 0.075;
      } else if (salary <= 2427.35) {
        discount = salary * 0.09;
      } else if (salary <= 3641.03) {
        discount = salary * 0.12;
      } else if (salary <= teto) {
        discount = salary * 0.14;
      } else {
        discount = teto * 0.14; // Teto máximo
      }
  
      const finalSalary = salary - discount;
  
      resultDiv.innerHTML = `
        <p>Desconto do INSS: <strong>R$ ${discount.toFixed(2)}</strong></p>
        <p>Salário final: <strong>R$ ${finalSalary.toFixed(2)}</strong></p>
      `;
      resultDiv.style.color = "#10b981"; // Verde para sucesso
    });
  });
  