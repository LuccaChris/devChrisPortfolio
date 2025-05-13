using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CurriculoController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var curriculo = new Curriculo
        {
            Nome = "Christian Amaral",
            Cidade = "Guarulhos - SP",
            Email = "chris_lla@hotmail.com",
            Telefone = "+55 (11) 98124-2403",
            Educacao = "Análise e Desenvolvimento de Sistemas - ENIAC (2023 - 2025)",
            Experiencia = "Auxiliar de Transporte (Setembro de 2021 - Setembro de 2023)\nTécnico em Suporte de T.I Júnior (Setembro de 2023 - Presente)",
            Habilidades = "HTML, CSS/CSS3,\nJavaScript, TypeScript\nSQL, NoSQL\nJava, Android, UML, Angular, NodeJS\nGit, GitHub\nMetodologias Ágeis,\nNegócios em TI - Canvas\nPython, C, C#, PHP\nBanco de Dados\n\n"
        };

        return Ok(curriculo);
    }
}