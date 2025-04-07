"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function carregarCurriculo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5281/api/curriculo");
        const data = yield response.json();
        document.getElementById("nome").textContent = data.nome;
        document.getElementById("cidade").textContent = data.cidade;
        document.getElementById("email").textContent = data.email;
        document.getElementById("telefone").textContent = data.telefone;
        document.getElementById("educacao").textContent = data.educacao;
        document.getElementById("experiencia").textContent = data.experiencia;
        document.getElementById("habilidades").textContent = data.habilidades;
    });
}
carregarCurriculo();
