/*

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

class Cotizador {
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
    const costoAlquiler = new Cotizador (vehiculo, seguro, dias)
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
const btnCotizar = document.querySelector("#btnCotizar")
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

*/



const selectAuto = document.querySelector("#selectAuto")
const selectSeguro = document.querySelector("#selectSeguro")
const inputDias = document.querySelector("#inputDias")

const btnCotizar = document.querySelector("#btnCotizar")
const btnCancelar = document.querySelector("#cancelar")
const valorAlquiler = document.querySelector("#valorAlquiler")


const arrayModeloDeVehiculo = [{"modelo": "Audi A3 Sportback", "precio": 10500, "anio": 2020}, 
                            {"modelo": "Citroen C4 Picasso", "precio": 11000, "anio": 2015},
                            {"modelo": "Mercedes B Class", "precio": 12500, "anio": 2021},
                            {"modelo": "Opel Zafira", "precio": 15400, "anio": 2018},
                            {"modelo": "Renault Kadjar", "precio": 17800, "anio": 2017}]


const arraySeguro = [{"seguro": "Seguro base", "precio": 2500},
                    {"seguro": "Seguro integral", "precio": 4000}]



class Cotizador {
    constructor(vehiculoSelec, seguroSelec, diasSelec){
        this.vehiculo = vehiculoSelec
        this.seguro = seguroSelec
        this.dias = diasSelec
    }

    calcularAlquiler = () => {
        const resultado = (this.vehiculo + this.seguro) * dias
            return parseFloat(resultado)
    }
}

const cargarModeloDeVehiculo = () => {
    let optionMDV
        for (let elemento of arrayModeloDeVehiculo) {
            optionMDV += `<option value= "${elemento.precio}">${elemento.modelo}</option>`
        }
        return optionMDV
}

const cargarSeguro = () => {
    let optionSeg
        for (let elemento of arraySeguro) {
            optionSeg += `<option value= "${elemento.precio}">${elemento.seguro}</option>`
        }
        return optionSeg
}

const datosNoIngresados = () => {
    return (isNaN(inputDias.value) || selectAuto.value == "" || selectSeguro.value == "")
}

const cotizarAlquiler = () => {
    //debugger
    if (datosNoIngresados()) {
        alert("Por favor, complete todos los campos para cotizar.")
        return
    }
    else{
        factorVehiculo = parseFloat(selectAuto.value)
        factorSeguro = parseFloat(selectSeguro.value)
        dias = parseInt(inputDias.value)
        valorDeAlquiler = Cotizacion.calcularAlquiler()
        valorAlquiler.innerText = `$ ${valorDeAlquiler.toFixed(2)}`
    }
}

const Cotizacion = new Cotizador(arrayModeloDeVehiculo, arraySeguro, dias)

selectAuto.innerHTML += cargarModeloDeVehiculo()
selectSeguro.innerHTML += cargarSeguro()

btnCotizar.addEventListener("click", cotizarAlquiler)



//Storage

const guardarDatosJSON = () => {
    const datosForm = {modelo: "", precio: 0}
        datosForm.modelo = selectAuto.value
        datosForm.precio = selectSeguro.value
        localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
        console.info("Se ha almacenado el array en LS.")
}

btnCotizar.addEventListener("click", guardarDatosJSON)


const guardoDatos = () => {
    localStorage.setItem("modelo", selectAuto.value)
    localStorage.setItem("precio", selectSeguro.value)
}

const recuperoDatos = () => {
    selectAuto.value = localStorage.getItem("modelo")
    selectSeguro.value = localStorage.getItem("precio")
}

const limparLS = () => {
    const resp = confirm("¿Desea eliminar todos los datos almacenados?")
        if (resp) {
            localStorage.clear()
            console.log("Se han eliminado todos los datos.")
        }
}

btnCotizar.addEventListener("click", () => guardoDatos())

recuperoDatos()