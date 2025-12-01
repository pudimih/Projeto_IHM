function go(page){
  window.location.href = page;
}

// pega as candidaturas do localStorage
let candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];

// renderiza cards
function renderCandidaturas() {
  const container = document.getElementById("listaCandidaturas");
  const vazioMsg = document.getElementById("vazioMsg");
  container.innerHTML = "";

  if(candidaturas.length === 0){
    vazioMsg.hidden = false;
    return;
  }
  vazioMsg.hidden = true;

  candidaturas.forEach(c => {
    const card = document.createElement("div");
    card.className = "candidatura-card";
    card.innerHTML = `
      <div class="card-header">
        <h3 class="vaga-titulo">${c.vagaTitulo}</h3>
        <div class="empresa-local">${c.empresa}</div>
      </div>
      <div class="status-label">Status: ${c.status || "Pendente"}</div>
      <div class="status-bar">
        <div class="status-fill" style="width:${c.status==='Pendente'?33:c.status==='Em análise'?66:100}%"></div>
      </div>
      <div class="card-footer">
        <button class="btn-detalhes">Detalhes</button>
      </div>
    `;

    // clicar em detalhes abre página da vaga
    card.querySelector(".btn-detalhes").addEventListener("click", () => {
      sessionStorage.setItem("vagaSelecionada", JSON.stringify({
        id: c.vagaId,
        titulo: c.vagaTitulo,
        empresa: c.empresa,
        local: c.candidato.local || "",
        area: c.candidato.area || "",
        tipo: c.candidato.tipo || "",
        descricao: c.candidato.descricao || ""
      }));
      window.location.href = "vagaDetalhe.html";
    });

    container.appendChild(card);
  });
}

// inicializa
document.addEventListener("DOMContentLoaded", () => {
  renderCandidaturas();
});
