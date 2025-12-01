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
    const vaga = JSON.parse(sessionStorage.getItem("vagaSelecionada")); // pega a vaga atual
    const curriculo = JSON.parse(localStorage.getItem("curriculo")) || {};

    if (!vaga) return;

    // Cria objeto da candidatura
    const candidatura = {
        vagaId: vaga.id,
        vagaTitulo: vaga.titulo,
        empresa: vaga.empresa,
        data: new Date().toLocaleDateString(),
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

    // Puxa a lista de candidaturas ou cria uma nova
    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];
    candidaturas.push(candidatura);

    // Salva novamente no localStorage
    localStorage.setItem("candidaturas", JSON.stringify(candidaturas));

    alert("Candidatura enviada!");
    popupBg.style.display = "none";
});

