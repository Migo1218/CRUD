const API = "http://localhost:5000/autos"

const obtenerProductos = async () => {

    const resp = await fetch(API)
    const datos = await resp.json()

    return datos

}


const mostrarAutos = async () => {

    let data = await obtenerProductos()
    let div = document.querySelector(".grid-autos")
    div.innerHTML = ""

    data.forEach(datos => {
        let { nombre, modelo, descripcion, imagen, precio, categoria } = datos


        let cate = ""

        if (categoria === "1") {

            cate = "nuevo"
        } else if (categoria === "2") {
            cate = "usado"
        }

        div.innerHTML += ` <div class="card mb-3" style="max-width: 1280;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${imagen}"
                    class="img-fluid rounded-start" alt="...">
            </div>
            <div  class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <h6 class="card-text"><strong>MODELO</strong> ${modelo}</h6>
                    <p class="card-text"><strong>DESCRIPCION</strong> ${descripcion}</p>
                    <p class="card-text"><strong>PRECIO USD</strong> ${precio}</p>
                    <p class="card-text"><strong>CATEGORÍA</strong> ${cate}</p>
                </div>
            </div>
        </div>
    </div>`

    });
}

document.addEventListener("DOMContentLoaded", mostrarAutos)




const guardarProducto = async () => {


    let nombre = document.getElementById("nombre").value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let descripcion = document.getElementById("descripcion").value
    let categoria = document.getElementById("categoria").value





    await fetch(API, {
        method: "POST",
        body: JSON.stringify({
            nombre,
            marca,
            modelo,
            descripcion,
            categoria
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })



}


let nuevo = document.getElementById("nuevo")
let usado = document.getElementById("usado")

nuevo.addEventListener("click", async() => {

    let data = await obtenerProductos()
    let div = document.querySelector(".grid-autos")
    div.innerHTML = ""

    data.forEach(datos => {
        let { nombre, modelo, descripcion, imagen, precio, categoria } = datos


        let cate = ""

        if (categoria === "1") {

            cate = "nuevo"
            div.innerHTML += ` <div class="card mb-3" style="max-width: 1280;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${imagen}"
                    class="img-fluid rounded-start" alt="...">
            </div>
            <div  class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <h6 class="card-text"><strong>MODELO</strong> ${modelo}</h6>
                    <p class="card-text"><strong>DESCRIPCION</strong> ${descripcion}</p>
                    <p class="card-text"><strong>PRECIO USD</strong> ${precio}</p>
                    <p class="card-text"><strong>CATEGORÍA</strong> ${cate}</p>
                </div>
            </div>
        </div>
    </div>`


        } 

        
    })
})

usado.addEventListener("click", async() => {

    let data = await obtenerProductos()
    let div = document.querySelector(".grid-autos")
    div.innerHTML = ""

    data.forEach(datos => {
        let { nombre, modelo, descripcion, imagen, precio, categoria } = datos


        let cate = ""

        if (categoria === "2") {

            cate = "usado"
            div.innerHTML += ` <div class="card mb-3" style="max-width: 1280;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${imagen}"
                    class="img-fluid rounded-start" alt="...">
            </div>
            <div  class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <h6 class="card-text"><strong>MODELO</strong> ${modelo}</h6>
                    <p class="card-text"><strong>DESCRIPCION</strong> ${descripcion}</p>
                    <p class="card-text"><strong>PRECIO USD</strong> ${precio}</p>
                    <p class="card-text"><strong>CATEGORÍA</strong> ${cate}</p>
                </div>
            </div>
        </div>
    </div>`


        } 

        
    })
})
