// Ano e data da última modificação
const agora = new Date();
document.getElementById("ano").textContent = agora.getFullYear();

const modificado = new Date(document.lastModified);
document.getElementById("ultima-modificacao").textContent =
  "Última modificação: " + modificado.toLocaleDateString("pt-BR") + " " +
  modificado.toLocaleTimeString("pt-BR");

// Menu hambúrguer
const botao = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botao.innerHTML = aberto ? "&#10006;" : "&#9776;"; // ✖ / ☰
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});