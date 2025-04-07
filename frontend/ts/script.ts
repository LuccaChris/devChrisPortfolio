async function carregarCurriculo() {
    const response = await fetch("http://localhost:5281/api/curriculo");
    const data = await response.json();
  
    document.getElementById("nome")!.textContent = data.nome;
    document.getElementById("cidade")!.textContent = data.cidade;
    document.getElementById("email")!.textContent = data.email;
    document.getElementById("telefone")!.textContent = data.telefone;
    document.getElementById("educacao")!.textContent = data.educacao;
    document.getElementById("experiencia")!.textContent = data.experiencia;
    document.getElementById("habilidades")!.textContent = data.habilidades;
  }
  
  carregarCurriculo();