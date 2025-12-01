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
