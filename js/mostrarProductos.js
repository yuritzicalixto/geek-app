import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(titulo, precio, img){
    const producto = document.createElement("div");
    producto.className="product-card";
    producto.innerHTML = `
    <img src="${img}" alt="">
        <div class="product-info">
          <div>
            <p>$ ${precio}</p>
            <p>${titulo}</p>
          </div>
          <figure>
            <img src="./assets/icons/papelera-xmark.png" alt="">
          </figure>
        </div>
    `;
    
    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.titulo, producto.precio, producto.img)));
}

listarProductos()