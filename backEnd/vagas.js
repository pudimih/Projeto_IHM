// Lista FAKE de vagas (para testes)
const vagas = [
    {
        id: 1,
        titulo: "Estágio em Desenvolvimento",
        area: "TI",
        tipo: "Estágio",
        empresa: "Inatel",
        local: "Santa Rita do Sapucaí",
        descricao: "Participar do desenvolvimento de sistemas internos, atuar com JavaScript, HTML e CSS.",
        requisitos: ["Conhecimento básico em programação", "Vontade de aprender", "Disponibilidade para 20h semanais"]
    },
    {
        id: 2,
        titulo: "Estágio em Engenharia Elétrica",
        area: "ENG",
        tipo: "Estágio",
        empresa: "Heliodinâmica",
        local: "Pouso Alegre",
        descricao: "Auxílio em projetos elétricos e testes laboratoriais.",
        requisitos: ["Cursando Engenharia Elétrica", "Conhecimento em circuitos", "Boa organização"]
    },
    {
        id: 3,
        titulo: "Assistente Administrativo",
        area: "ADM",
        tipo: "Júnior",
        empresa: "Empresa XPTO",
        local: "Itajubá",
        descricao: "Atuar com rotinas administrativas, atendimento e organização de documentos.",
        requisitos: ["Ensino médio completo", "Boa comunicação", "Domínio básico de informática"]
    }
];


// ----------------------------
// 🔥 FUNÇÃO QUE ABRE O DETALHE
// ----------------------------
function abrirDetalhe(vaga) {
    sessionStorage.setItem("vagaSelecionada", JSON.stringify(vaga));
    window.location.href = "vagaDetalhe.html";
}


// ----------------------------
// 🔥 CARREGAR VAGAS NA TELA
// ----------------------------
function carregarVagas(lista) {
    const container = document.getElementById("lista-vagas");
    container.innerHTML = "";

    lista.forEach(vaga => {
        const card = document.createElement("div");
        card.classList.add("vaga-card");

        card.innerHTML = `
            <h2 class="vaga-titulo">${vaga.titulo}</h2>
            <p class="vaga-info"><strong>Empresa:</strong> ${vaga.empresa}</p>
            <p class="vaga-info"><strong>Local:</strong> ${vaga.local}</p>
            <p class="vaga-info"><strong>Área:</strong> ${vaga.area}</p>
            <p class="vaga-info"><strong>Tipo:</strong> ${vaga.tipo}</p>

            <button class="btn-ver-mais">
                Ver mais
            </button>
        `;

        // EVENTO PARA ABRIR O DETALHE
        card.querySelector(".btn-ver-mais").addEventListener("click", () => {
            abrirDetalhe(vaga);
        });

        container.appendChild(card);
    });
}


// ----------------------------
// 🔥 FILTROS DA PÁGINA
// ----------------------------
document.getElementById("btnFiltrar").addEventListener("click", () => {
    const area = document.getElementById("filtro-area").value;
    const tipo = document.getElementById("filtro-tipo").value;
    const busca = document.getElementById("busca").value.toLowerCase();

    const filtradas = vagas.filter(v => {
        return (
            (area === "" || v.area === area) &&
            (tipo === "" || v.tipo === tipo) &&
            (busca === "" || v.titulo.toLowerCase().includes(busca))
        );
    });

    carregarVagas(filtradas);
});


// ----------------------------
// 🔥 Carregamento inicial
// ----------------------------
carregarVagas(vagas);
