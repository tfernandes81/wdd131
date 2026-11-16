// Rodapé: ano atual e última modificação
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Valores estáticos (°C e km/h) – iguais aos exibidos na seção de clima
const temperatura = 9;
const velocidadeVento = 12;

// Fórmula métrica (°C, km/h) do Environment Canada
function calcularSensacaoTermica(temp, vento) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

// Só calcula se: temperatura <= 10 °C E vento > 4.8 km/h
let sensacao = "N/A";
if (temperatura <= 10 && velocidadeVento > 4.8) {
  sensacao = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
}

document.querySelector("#sensacao").textContent = sensacao;