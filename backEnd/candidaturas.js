function go(page){
  window.location.href = page;
}

// exemplo de dados de candidaturas
// você pode puxar de sessionStorage/localStorage
let candidaturas = JSON.parse(sessionStorage.getItem("candidaturas")) || [];

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
        <h3 class="vaga-titulo">${c.titulo}</h3>
        <div class="empresa-local">${c.empresa} • ${c.local}</div>
      </div>
      <div class="status-label">Status: ${c.status}</div>
      <div class="status-bar">
        <div class="status-fill" style="width:${c.status==='Pendente'?33:c.status==='Em análise'?66:100}%"></div>
      </div>
      <div class="card-footer">
        <button class="btn-detalhes">Detalhes</button>
      </div>
    `;

    // clicar em detalhes abre página da vaga
    card.querySelector(".btn-detalhes").addEventListener("click", () => {
      sessionStorage.setItem("vagaSelecionada", JSON.stringify(c));
      window.location.href = "vagaDetalhe.html";
    });

    container.appendChild(card);
  });
}

// inicializa
document.addEventListener("DOMContentLoaded", () => {
  renderCandidaturas();
});
