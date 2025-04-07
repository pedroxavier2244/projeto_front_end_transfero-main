document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-reconhecimento-firma");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 


        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const arquivo = form.querySelector('input[type="file"]').files[0];


        if (!nome || !email || !arquivo) {
            alert("Por favor, preencha todos os campos.");
            return;
        }


        alert(`Solicitação enviada com sucesso!`);
        form.reset(); 
    });
});