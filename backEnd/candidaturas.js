function go(page) {
    window.location.href = page;
}

window.onload = () => {
    const lista = JSON.parse(localStorage.getItem("candidaturas")) || [];
    const container = document.getElementById("listaCandidaturas");

    if (lista.length === 0) {
        container.innerHTML = "<p>Você ainda não possui candidaturas.</p>";
        return;
    }

    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${item.vaga}</h3>
            <p><strong>Empresa:</strong> ${item.empresa}</p>
            <p><strong>Local:</strong> ${item.local}</p>
            <p><strong>Data da candidatura:</strong> ${item.data}</p>
            <p class="status">Status: ${item.status}</p>
        `;

        container.appendChild(card);
    });
};
