document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var idade = document.getElementById("idade").value.trim();
    var rua = document.getElementById("rua").value.trim();
    var bairro = document.getElementById("bairro").value.trim();
    var estado = document.getElementById("estado").value.trim();
    var biografia = document.getElementById("biografia").value.trim();

    if (biografia.length > 250) {
        biografia = biografia.substring(0, 250); 
    }

    if (nome === "" || idade === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    document.getElementById("nomeUsuario").textContent = nome;
    document.getElementById("idadeUsuario").textContent = idade;
    document.getElementById("ruaUsuario").textContent = rua;
    document.getElementById("bairroUsuario").textContent = bairro;
    document.getElementById("estadoUsuario").textContent = estado;


    var biografiaUsuario = document.getElementById("biografiaUsuario");
    biografiaUsuario.textContent = biografia;
    biografiaUsuario.style.wordWrap = "break-word";

    document.getElementById("biografia").value = "";
});
