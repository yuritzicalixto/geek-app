import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const img = document.querySelector("[data-img]").value;

    await conexionAPI.enviarProducto(titulo, precio, img);
}

formulario.addEventListener("submit", evento => crearProducto(evento));