async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/producto");
    const conexionConvertida = conexion.json();
    // console.log(conexionConvertida);
    return conexionConvertida 
}

async function enviarProducto(titulo, precio, img){
    const conexion = await fetch ("http://localhost:3001/producto", {
        method:"POST",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify({
            titulo:titulo,
            precio:precio,
            img:img
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos, enviarProducto
}
// listarProductos();