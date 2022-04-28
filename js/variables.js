//Cotizador

const arrayModeloDeVehiculo = [{"modelo": "Opel Corsa 4 DR", "precio": 10500, "anio": 2020}, 
                            {"modelo": "Ford Fiesta", "precio": 11000, "anio": 2015},
                            {"modelo": "Ford C-Max 5 Pax", "precio": 12500, "anio": 2021},
                            {"modelo": "Volkswagen T-Roc", "precio": 15400, "anio": 2018},
                            {"modelo": "Renault Espace 7 Pax", "precio": 17800, "anio": 2017}]

const arraySeguro = [{"seguro": "Seguro base", "precio": 2500},
                    {"seguro": "Seguro integral", "precio": 4000}]

const selectAuto = document.querySelector("#selectAuto")
const selectSeguro = document.querySelector("#selectSeguro")

const btnCotizar = document.querySelector("#btnCotizar")
const btnCancelar = document.querySelector("#cancelar")
const valorAlquiler = document.querySelector("#valorAlquiler")
let _valorAlquiler = 0

let factorVehiculo = "valorInicialBasura"
let factorSeguro = "valorInicialBasura"
let dias = "valorInicialBasura"

//Flota

let cardsFlota = ""
let contenidoJSON = []

const URL = `${window.location.origin}/js/flota.json`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")