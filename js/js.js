class ModeloDeVehiculo {
    constructor(modelo, precioBase, anio) {
        this.modelo = modelo
        this.precioBase = precioBase
        this.anio = anio

        this.antiguedad = () => {
            let d = new Date(this.anio)
            let anioActual = new Date()
            const antiguedadVehiculo = anioActual.getFullYear() - d
            console.log("Antigüedad del vehículo:", antiguedadVehiculo, "años")
        }
    }
}

class NuevoCotizador {
    constructor(vehiculoSelec, seguroSelec, diasSelec){

        this.vehiculo = vehiculoSelec
        this.seguro = seguroSelec
        this.dias = diasSelec
    }

    getVehiculo = () => {
        switch (this.vehiculo){
            case 1:
            return auto1.precioBase

            case 2: auto2
            return auto2.precioBase

            case 3: auto3
            return auto3.precioBase

            case 4: auto4
            return auto4.precioBase

            case 5: auto5
            return auto5.precioBase
        }
    }

    getSeguro = () => {
        switch (this.seguro) {
            case 1:
                return 2500
    
            case 2:
                return 4000
    
            default:
                return "Error"
        }
    }

    calcularAlquiler = () => {
        const resultado = (this.getVehiculo() + this.getSeguro()) * this.dias
        return parseFloat(resultado)
    }
    
}

function agregarModelosVehiculos(){
    modelosAutos.push(auto1)
    modelosAutos.push(auto2)
    modelosAutos.push(auto3)
    modelosAutos.push(auto4)
    modelosAutos.push(auto5)

    console.info("Cantidad de modelos disponibles:", modelosAutos.length)
    console.table(modelosAutos)
}

function cotizarAlquilerAuto(){
    //debugger
    //const vehiculo = parseInt(prompt("Seleccione el vehículo a alquilar \n 1: Audi A3 Sportback \n 2: Citroen C4 Picasso \n 3: Mercedes B Class \n 4: Opel Zafira \n 5: Renault Kadjar"))
    //const seguro = parseInt(prompt("Seleccione el seguro que desea contratar \n 1: Seguro base \n 2: Seguro integral"))
    //const dias = parseInt(prompt("Ingrese la cantidad de días del alquiler"))
    const vehiculo = parseInt(selectAuto.value)
    const seguro = parseInt(selectSeguro.value)
    const dias = parseInt(inputDias.value)
    const costoAlquiler = new NuevoCotizador (vehiculo, seguro, dias)
    const res = costoAlquiler.calcularAlquiler()

    alert("El costo del alquiler es: ARS ", res)
    console.log("El costo del alquiler es: ARS ", res)
}

function filtrarPorPrecio (){
    const filtroPrecio = prompt("Presupuesto máximo:")
    let resultadoDelFiltro = modelosAutos.filter((auto) => auto.precioBase <= filtroPrecio)
        console.table(resultadoDelFiltro)
}

const modelosAutos = []

const auto1 = new ModeloDeVehiculo ("Audi A3 Sportback", 10500, 2020)
const auto2 = new ModeloDeVehiculo ("Citroen C4 Picasso", 11000, 2015)
const auto3 = new ModeloDeVehiculo ("Mercedes B Class", 12500, 2021)
const auto4 = new ModeloDeVehiculo ("Opel Zafira", 15400, 2018)
const auto5 = new ModeloDeVehiculo ("Renault Kadjar", 17800, 2017)


//EVENTOS


const selectAuto = document.querySelector("#selectAuto")
const selectSeguro = document.querySelector("#selectSeguro")
const inputDias = document.querySelector("#inputDias")
const btnCotizar = document.querySelector("#submit")
const btnCancelar = document.querySelector("#cancelar")

const suCotizacion = document.getElementById("suCotizacion")


btnCotizar.addEventListener("submit", (event) => {
    event.cotizarAlquilerAuto()
    })


const cargarResultado = () => {
    
    for (resultado of cotizarAlquilerAuto.res) {
        const resultadoCotizacion = document.createElement("p")
            resultadoCotizacion.innerText = "Su cotización es de ARS", cotizarAlquilerAuto().res
    }
}