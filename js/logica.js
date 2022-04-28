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
    debugger
    const inputDias = document.getElementById("inputDias").value

    if (datosNoIngresados()) {
        Swal.fire({
            title: "Datos no ingresados",
            text: "Por favor, complete todos los campos para cotizar.",
            icon: "warning",
            confirmButtonText: "OK"
        })
        return
    }

    else{
        const Cotizacion = new Cotizador(arrayModeloDeVehiculo[0].precio, arraySeguro[0].precio, inputDias)
        factorVehiculo = parseFloat(selectAuto.value)
        factorSeguro = parseFloat(selectSeguro.value)
        dias = parseInt(inputDias.value)
        _valorAlquiler = Cotizacion.calcularAlquiler()
        valorAlquiler.innerText = `$ ${_valorAlquiler.toFixed(2)}`
    }
}

const Cotizacion = new Cotizador(arrayModeloDeVehiculo, arraySeguro, inputDias)

selectAuto.innerHTML += cargarModeloDeVehiculo()
selectSeguro.innerHTML += cargarSeguro()

btnCotizar.addEventListener("click", cotizarAlquiler)



//Storage

const guardarDatosJSON = () => {
    const datosForm = {modelo: "", precio: 0}
        datosForm.modelo = selectAuto.modelo
        datosForm.precio = selectSeguro.seguro
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
        resp && localStorage.clear(), console.log("Se han eliminado todos los datos.")
}

btnCotizar.addEventListener("click", () => guardoDatos())

recuperoDatos()