// Ano atual no rodapé
const anoAtual = new Date().getFullYear();
document.querySelector("#anoatual").textContent = anoAtual;

// Data da última modificação do documento
const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;