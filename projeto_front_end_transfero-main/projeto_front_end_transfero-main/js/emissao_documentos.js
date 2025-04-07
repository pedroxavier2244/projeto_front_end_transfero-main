document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-emissao-documentos");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 


        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const tipoDocumento = form.querySelector('select').value;

        // Validação básica
        if (!nome || !email || tipoDocumento === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert(`Solicitação enviada com sucesso!`);
        form.reset(); 
    });
});