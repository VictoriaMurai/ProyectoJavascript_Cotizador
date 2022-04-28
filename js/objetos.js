class Cotizador {
    constructor(vehiculoSelec, seguroSelec, diasSelec){
        this.vehiculoSelec = vehiculoSelec
        this.seguroSelec = seguroSelec
        this.diasSelec = diasSelec
    }

    calcularAlquiler = () => {
        const resultado = (this.vehiculoSelec + this.seguroSelec) * this.diasSelec
            return parseFloat(resultado)
    }
}