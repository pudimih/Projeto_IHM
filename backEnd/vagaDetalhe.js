// ===== Seletores =====
const btnCandidatar = document.getElementById("btnCandidatar");
const popupBg = document.getElementById("popupBg");
const btnConfirmar = document.getElementById("btnConfirmarEnvio");
const btnCancelar = document.getElementById("btnCancelarPopup");

// Elementos do popup de candidatura
const popupNome = document.getElementById("popupNome");
const popupEmail = document.getElementById("popupEmail");
const popupTelefone = document.getElementById("popupTelefone");
const popupResumo = document.getElementById("popupResumo");
const popupSkills = document.getElementById("popupSkills");
const popupExperiencia = document.getElementById("popupExperiencia");
const popupFormacao = document.getElementById("popupFormacao");

// ===== Popup currículo vazio =====
const popupCurriculoVazio = document.getElementById("popupCurriculoVazio");
const btnIrCurriculo = document.getElementById("btnIrCurriculo");
const btnFecharPopupCurriculo = document.getElementById("btnFecharPopupCurriculo");

// ===== Carregar dados da vaga clicada =====
window.addEventListener("load", () => {
    const vaga = JSON.parse(sessionStorage.getItem("vagaSelecionada"));
    if (!vaga) {
        alert("Nenhuma vaga selecionada!");
        window.location.href = "vagas.html";
        return;
    }

    document.getElementById("titulo-vaga").textContent = vaga.titulo;
    document.getElementById("empresa").textContent = vaga.empresa;
    document.getElementById("local").textContent = vaga.local;
    document.getElementById("area").textContent = vaga.area;
    document.getElementById("tipo").textContent = vaga.tipo;
    document.getElementById("descricao").textContent = vaga.descricao;
});

// ===== Botão Candidatar-se =====
btnCandidatar.addEventListener("click", () => {
    const curriculo = JSON.parse(localStorage.getItem("curriculo")) || { nome: "Não cadastrado" };

    // Se currículo não estiver preenchido, mostra popup de aviso
    if (!curriculo.nome || curriculo.nome === "Não cadastrado") {
        popupCurriculoVazio.style.display = "flex";
        return;
    }

    // Preenche o popup de candidatura
    popupNome.textContent = curriculo.nome;
    popupEmail.textContent = curriculo.email || "-";
    popupTelefone.textContent = curriculo.telefone || "-";
    popupResumo.textContent = curriculo.resumo || "-";
    popupSkills.textContent = curriculo.skills || "-";
    popupExperiencia.textContent = curriculo.experiencia || "-";
    popupFormacao.textContent = curriculo.formacao || "-";

    // Mostra o popup de candidatura
    popupBg.style.display = "flex";
});

// ===== Botões popup currículo vazio =====
btnIrCurriculo.addEventListener("click", () => {
    window.location.href = "curriculo.html";
});

btnFecharPopupCurriculo.addEventListener("click", () => {
    popupCurriculoVazio.style.display = "none";
});

// ===== Botão cancelar do popup de candidatura =====
btnCancelar.addEventListener("click", () => {
    popupBg.style.display = "none";
});

// ===== Botão confirmar do popup de candidatura =====
btnConfirmar.addEventListener("click", () => {
    const vaga = JSON.parse(sessionStorage.getItem("vagaSelecionada"));
    const curriculo = JSON.parse(localStorage.getItem("curriculo")) || {};

    if (!vaga || !curriculo || !curriculo.nome || curriculo.nome === "Não cadastrado") return;

    // Cria objeto da candidatura
    const candidatura = {
        vagaId: vaga.id,
        vagaTitulo: vaga.titulo,
        empresa: vaga.empresa,
        data: new Date().toLocaleDateString(),
        status: "Pendente",
        candidato: {
            nome: curriculo.nome || "-",
            email: curriculo.email || "-",
            telefone: curriculo.telefone || "-",
            resumo: curriculo.resumo || "-",
            skills: curriculo.skills || "-",
            experiencia: curriculo.experiencia || "-",
            formacao: curriculo.formacao || "-"
        }
    };

    // Salva candidatura no localStorage
    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];
    candidaturas.push(candidatura);
    localStorage.setItem("candidaturas", JSON.stringify(candidaturas));

    // Fecha popup e exibe mensagem bonita
    popupBg.style.display = "none";
    const sucessoPopup = document.createElement("div");
    sucessoPopup.className = "popup-mensagem-sucesso";
    sucessoPopup.textContent = "Candidatura enviada com sucesso!";
    document.body.appendChild(sucessoPopup);
    setTimeout(() => sucessoPopup.remove(), 2500);
});
