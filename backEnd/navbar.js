// Abre e fecha o menu
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Função global de navegação
function go(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {
    const btnLimparStorage = document.getElementById("btnLimparStorage");

    if(btnLimparStorage){
        btnLimparStorage.addEventListener("click", () => {
            if(confirm("Tem certeza que quer limpar o storage?")) {
                localStorage.clear();
                sessionStorage.clear();
                alert("Storage limpo com sucesso!");
                location.reload();
            }
        });
    }
});

