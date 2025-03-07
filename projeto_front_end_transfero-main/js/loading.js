// Exibe a tela de carregamento ao clicar em um link
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Seleciona todos os links

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            // Verifica se o link é para uma página externa
            if (link.href && !link.href.startsWith("javascript:")) {
                e.preventDefault(); // Impede o comportamento padrão do link
                document.getElementById("loading-screen").style.display = "flex"; // Exibe a tela de carregamento

                // Redireciona para a nova página após um pequeno delay (opcional)
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); // 500ms de delay
            }
        });
    });
});

// Oculta a tela de carregamento quando a página termina de carregar
window.addEventListener("load", function () {
    document.getElementById("loading-screen").style.display = "none";
});