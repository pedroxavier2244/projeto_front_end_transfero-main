document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-certidoes");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 


        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const tipoCertidao = form.querySelector('select').value;


        if (!nome || !email || tipoCertidao === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }


        alert(`Solicitação enviada com sucesso!`);
        form.reset(); 
    });
});