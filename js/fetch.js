//Fetch

let cardsFlota = ""
let contenidoJSON = []

const URL = `${window.location.origin}/js/flota.json`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")


const retornoCardsContenido = (contenido) => {
    const {img, nombre, categoria, capacidad, cajaDeCambio} = contenido
        let HTMLCard = ""
            HTMLCard += `<div class="card" style="width: 18rem;">
                            <img src=${img}" class="card-img-top margins" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nombre}</h5>
                                    <p class="card-text">Categoría: ${categoria}</p>
                                    <p class="card-text">Capacidad: ${capacidad}</p>
                                    <p class="card-text">Caja: ${cajaDeCambio}</p>
                                    <a href="#" class="btn btn-primary">Reservá ahora</a>
                                </div>
                        </div>`

        return HTMLCard
}

const obtengoContenido = (URL) => {
    //debugger
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const infoVehiculo = data
        infoVehiculo.forEach(contenido => {
            cardsFlota += retornoCardsContenido(contenido)
            contenidoDOM.innerHTML = cardsFlota
        })
    })
    .finally(data => cargandoDOM.innerHTML = "")
}

//obtengoContenido(URL)


//setTimeout

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtengoContenido(URL)
    }, 2000)
    
})
