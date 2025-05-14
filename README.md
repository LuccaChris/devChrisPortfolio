# 📄 devChrisPortfolio

Um portfólio interativo desenvolvido por Christian Amaral para apresentar suas habilidades, experiências e formação acadêmica como desenvolvedor de sistemas. O projeto está sendo construído com **HTML, CSS, JavaScript/TypeScript no frontend** e **C# com ASP.NET Core no backend**.

---

## 🚧 Status do Projeto

> **Em desenvolvimento** – novas funcionalidades, ajustes visuais e melhorias na integração estão sendo implementadas.

---

## 🧩 Estrutura do Projeto


- devChrisPortfolio
- assets # Imagens e recursos estáticos
    - profile picture.png
- backend # Backend ASP.NET Core
  - Controllers
    - CurriculoController.cs
  - Models
    - Curriculo.cs
 - Program.cs
- appsettings.json
- frontend # Frontend HTML + CSS + JS/TS
   - css
     - style.css
   -j
    - script.js
  - ts
     - script.ts
     - tsconfig.json
 - index.html
- devChrisPortfolio.sln # Solução do projeto



---

## 🌐 Tecnologias Utilizadas

### Frontend:
- HTML5
- CSS3
- JavaScript
- TypeScript

### Backend:
- C#
- ASP.NET Core
- API RESTful

---

## ⚙️ Funcionalidades

- Exibição dinâmica de:
  - Nome
  - Cidade
  - E-mail
  - Telefone
  - Formação acadêmica
  - Experiência profissional
  - Habilidades técnicas
- Integração com API via `fetch`
- Layout responsivo e estilizado com CSS puro

---

## 🔧 Como Executar Localmente

### Pré-requisitos:
- [.NET 6 ou superior](https://dotnet.microsoft.com/)
- Navegador Web moderno (Chrome, Edge, Firefox...)
- Editor como Visual Studio, VS Code ou Rider

### Passos:

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/devChrisPortfolio.git
```

2. Execute o backend:
```bash
cd backend
dotnet run
```

3. Abra `index.html` no navegador (diretamente ou com uma extensão como Live Server).

---

## 🔒 CORS e API

A API está configurada com CORS liberado para facilitar o desenvolvimento:
```csharp
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", policy => {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
```

---

## 👨‍💻 Autor

Christian Amaral  
📧 chris_lla@hotmail.com  
📍 Guarulhos - SP, Brasil

---

## 📌 Observações Finais

Este projeto é parte do portfólio pessoal e está em constante evolução. A proposta é apresentar de forma clara e dinâmica os dados profissionais e habilidades de Christian Amaral.

Contribuições, ideias e sugestões são bem-vindas!
