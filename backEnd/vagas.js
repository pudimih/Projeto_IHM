// ===== Dados (in-memory) =====
const vagas = [
  {
    id: 1,
    titulo: "Estágio em Desenvolvimento",
    empresa: "Inatel",
    local: "Santa Rita do Sapucaí",
    area: "TI",
    tipo: "Estágio",
    descricao: "Atuar no desenvolvimento front-end usando HTML, CSS e JavaScript.",
    requisitos: ["HTML/CSS", "JS básico", "Lógica de programação"]
  },
  {
    id: 2,
    titulo: "Estágio em Engenharia Elétrica",
    empresa: "Heliodinâmica",
    local: "Pouso Alegre",
    area: "ENG",
    tipo: "Estágio",
    descricao: "Suporte em projetos elétricos, medições e testes.",
    requisitos: ["Circuitos", "Matemática básica", "Organização"]
  },
  {
    id: 3,
    titulo: "Assistente Administrativo",
    empresa: "Empresa XPTO",
    local: "Itajubá",
    area: "ADM",
    tipo: "Júnior",
    descricao: "Atendimento ao cliente e rotinas administrativas.",
    requisitos: ["Comunicação", "Pacote Office", "Proatividade"]
  }
];

// ===== Helpers =====
function go(page) {
  window.location.href = page;
}

function abrirDetalhe(vaga) {
  // salvar no sessionStorage (modo in-memory)
  sessionStorage.setItem("vagaSelecionada", JSON.stringify(vaga));
  window.location.href = "vagaDetalhe.html";
}

// ===== Render =====
function criarCard(vaga) {
  const el = document.createElement("article");
  el.className = "vaga-card";
  el.innerHTML = `
    <div class="vaga-meta">
      <div>
        <h3 class="vaga-titulo">${vaga.titulo}</h3>
        <div class="empresa">${vaga.empresa} • ${vaga.local}</div>
      </div>
      <div class="tag">${vaga.tipo}</div>
    </div>

    <p class="vaga-desc">${vaga.descricao}</p>

    <div class="vaga-tags">
      <div class="tag">${vaga.area}</div>
    </div>

    <div class="card-footer">
      <div class="meta-left"><small>${vaga.requisitos.slice(0,2).join(" • ")}</small></div>
      <div class="meta-right">
        <button class="btn-candidatar-mini" title="Candidatar-se">Candidatar</button>
      </div>
    </div>
  `;

  // eventos
  el.querySelector(".btn-candidatar-mini").addEventListener("click", () => {
    abrirDetalhe(vaga);
  });

  return el;
}

function renderVagas(list) {
  const container = document.getElementById("lista-vagas");
  const vazioMsg = document.getElementById("vazioMsg");
  container.innerHTML = "";
  if (!list || list.length === 0) {
    vazioMsg.hidden = false;
    return;
  }
  vazioMsg.hidden = true;
  list.forEach(v => container.appendChild(criarCard(v)));
}

// ===== Filtros =====
function filtrar() {
  const area = document.getElementById("filtro-area").value;
  const tipo = document.getElementById("filtro-tipo").value;
  const busca = document.getElementById("busca").value.trim().toLowerCase();

  const filtradas = vagas.filter(v => {
    const okArea = !area || v.area === area;
    const okTipo = !tipo || v.tipo === tipo;
    const okBusca = !busca || (
      v.titulo.toLowerCase().includes(busca) ||
      v.empresa.toLowerCase().includes(busca) ||
      v.local.toLowerCase().includes(busca)
    );
    return okArea && okTipo && okBusca;
  });

  renderVagas(filtradas);
}

// ===== Listeners =====
document.addEventListener("DOMContentLoaded", () => {
  renderVagas(vagas);

  document.getElementById("btnFiltrar").addEventListener("click", filtrar);
  document.getElementById("btnLimpar").addEventListener("click", () => {
    document.getElementById("filtro-area").value = "";
    document.getElementById("filtro-tipo").value = "";
    document.getElementById("busca").value = "";
    renderVagas(vagas);
  });

  // tecla Enter na busca
  document.getElementById("busca").addEventListener("keyup", (e) => {
    if (e.key === "Enter") filtrar();
  });
});
