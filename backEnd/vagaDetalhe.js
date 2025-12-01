// Seletores
const btnCandidatar = document.getElementById("btnCandidatar");
const popupBg = document.getElementById("popupBg");
const btnConfirmar = document.getElementById("btnConfirmarEnvio");
const btnCancelar = document.getElementById("btnCancelarPopup");

// Elementos do popup para preencher com dados
const popupNome = document.getElementById("popupNome");
const popupEmail = document.getElementById("popupEmail");
const popupTelefone = document.getElementById("popupTelefone");
const popupResumo = document.getElementById("popupResumo");
const popupSkills = document.getElementById("popupSkills");
const popupExperiencia = document.getElementById("popupExperiencia");
const popupFormacao = document.getElementById("popupFormacao");

// ===== Carregar dados da vaga clicada =====
window.addEventListener("load", () => {
    const vaga = JSON.parse(sessionStorage.getItem("vagaSelecionada")); // mudou para sessionStorage
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
    // Puxa dados do currículo do localStorage
    const curriculo = JSON.parse(localStorage.getItem("curriculo")) || {
        nome: "Não cadastrado",
        email: "-",
        telefone: "-",
        resumo: "-",
        skills: "-",
        experiencia: "-",
        formacao: "-"
    };

    // Preenche o popup
    popupNome.textContent = curriculo.nome;
    popupEmail.textContent = curriculo.email;
    popupTelefone.textContent = curriculo.telefone;
    popupResumo.textContent = curriculo.resumo;
    popupSkills.textContent = curriculo.skills;
    popupExperiencia.textContent = curriculo.experiencia;
    popupFormacao.textContent = curriculo.formacao;

    // Mostra o popup
    popupBg.style.display = "flex";
});

// Botão cancelar
btnCancelar.addEventListener("click", () => {
    popupBg.style.display = "none";
});

// Botão confirmar
btnConfirmar.addEventListener("click", () => {
    alert("Candidatura enviada!");
    popupBg.style.display = "none";
});
