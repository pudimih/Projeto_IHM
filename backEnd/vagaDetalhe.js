// ===============================
// PEGAR DADOS DA VAGA CLICADA
// ===============================
const vaga = JSON.parse(sessionStorage.getItem("vagaSelecionada"));

document.getElementById("titulo-vaga").textContent = vaga.titulo;
document.getElementById("empresa").textContent = vaga.empresa;
document.getElementById("local").textContent = vaga.local;
document.getElementById("area").textContent = vaga.area;
document.getElementById("tipo").textContent = vaga.tipo;

// Descrição fake por enquanto
document.getElementById("descricao").textContent = vaga.descricao || 
    "Descrição completa será adicionada depois.";


// ===============================
// POPUP CONFIRMAR CANDIDATURA
// ===============================
const popupBg = document.getElementById("popupBg");
const btnCandidatar = document.getElementById("btnCandidatar");
const btnCancelar = document.getElementById("btnCancelarPopup");
const btnConfirmarEnvio = document.getElementById("btnConfirmarEnvio");


// abrir popup
btnCandidatar.addEventListener("click", () => {
    popupBg.style.display = "flex";
});

// fechar popup
btnCancelar.addEventListener("click", () => {
    popupBg.style.display = "none";
});


// ===============================
// CONFIRMAR CANDIDATURA
// ===============================
btnConfirmarEnvio.addEventListener("click", () => {

    // pegar currículo salvo
    const curriculo = JSON.parse(localStorage.getItem("curriculo"));

    if (!curriculo) {
        alert("Você ainda não preencheu o currículo!");
        return;
    }

    // pegar candidaturas existentes
    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];

    // criar nova candidatura
    const nova = {
        vaga: vaga,
        data: new Date().toLocaleDateString("pt-BR"),
        status: "Em análise",
        dadosEnviados: curriculo
    };

    candidaturas.push(nova);

    // salvar no localStorage
    localStorage.setItem("candidaturas", JSON.stringify(candidaturas));

    // fechar popup
    popupBg.style.display = "none";

    // ir para página de sucesso ou lista
    window.location.href = "candidaturas.html";
});
