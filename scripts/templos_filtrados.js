// Rodapé: ano e última modificação
document.getElementById("ano").textContent = new Date().getFullYear();
const modificado = new Date(document.lastModified);
document.getElementById("ultima-modificacao").textContent =
  "Última modificação: " + modificado.toLocaleDateString("pt-BR") + " " +
  modificado.toLocaleTimeString("pt-BR");

// Menu hambúrguer
const botao = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

function fecharMenu() {
  menu.classList.remove("aberto");
  botao.innerHTML = "&#9776;";
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-label", "Abrir menu");
}

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botao.innerHTML = aberto ? "&#10006;" : "&#9776;";
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

// Cartões de templo
const galeria = document.getElementById("galeria");
const titulo = document.getElementById("titulo");

const ano = (t) => parseInt(t.dedicated.split(",")[0], 10);

const filtros = {
  inicio:  { titulo: "Página Inicial", testar: () => true },
  antigos: { titulo: "Antigos",  testar: (t) => ano(t) < 1900 },
  novos:   { titulo: "Novos",    testar: (t) => ano(t) > 2000 },
  grandes: { titulo: "Grandes",  testar: (t) => t.area > 90000 },
  pequenos:{ titulo: "Pequenos", testar: (t) => t.area < 10000 }
};

function criarCartoes(lista) {
  galeria.innerHTML = "";
  if (lista.length === 0) {
    galeria.innerHTML = '<p class="vazio">Nenhum templo encontrado.</p>';
    return;
  }
  lista.forEach((t) => {
    const card = document.createElement("figure");
    card.className = "card";

    const nome = document.createElement("h2");
    nome.textContent = t.templeName;

    const local = document.createElement("p");
    local.innerHTML = "<span>Local:</span> ";
    local.append(t.location);

    const data = document.createElement("p");
    data.innerHTML = "<span>Consagração:</span> ";
    data.append(t.dedicated);

    const area = document.createElement("p");
    area.innerHTML = "<span>Área:</span> ";
    area.append(t.area.toLocaleString("pt-BR") + " pés quadrados");

    const img = document.createElement("img");
    img.src = t.imageUrl;
    img.alt = t.templeName;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.append(nome, local, data, area, img);
    galeria.appendChild(card);
  });
}

function aplicarFiltro(chave) {
  const f = filtros[chave] || filtros.inicio;
  titulo.textContent = f.titulo;
  criarCartoes(templos.filter(f.testar));
  document.querySelectorAll("nav a").forEach((a) =>
    a.classList.toggle("ativo", a.dataset.filtro === chave));
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    aplicarFiltro(link.dataset.filtro);
    fecharMenu();
  });
});

aplicarFiltro("inicio");