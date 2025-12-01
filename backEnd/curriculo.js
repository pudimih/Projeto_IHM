function go(page) {
    window.location.href = page;
}

// Carregar informações salvas
window.onload = () => {
    const dados = JSON.parse(localStorage.getItem("curriculo"));

    if (dados) {
        document.getElementById("nome").value = dados.nome;
        document.getElementById("email").value = dados.email;
        document.getElementById("telefone").value = dados.telefone;
        document.getElementById("resumo").value = dados.resumo;
        document.getElementById("skills").value = dados.skills;
        document.getElementById("experiencia").value = dados.experiencia;
        document.getElementById("formacao").value = dados.formacao;
    }
};

// Salvar ao clicar no botão
document.getElementById("formCurriculo").addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        resumo: document.getElementById("resumo").value,
        skills: document.getElementById("skills").value,
        experiencia: document.getElementById("experiencia").value,
        formacao: document.getElementById("formacao").value
    };

    localStorage.setItem("curriculo", JSON.stringify(dados));

    alert("Currículo salvo com sucesso!");
});
