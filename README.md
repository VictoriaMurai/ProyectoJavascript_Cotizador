# Proyecto final de JavaScript
***

Este proyecto es una aplicación web interactiva desarrollada durante el curso JavaScript de Coderhouse.

El sitio es un cotizador de alquiler de vehículos que toma los datos seleccionados por el usuario y devuelve el costo estimado del alquiler.

El archivo index.html contiene el simulador. Se modifica el DOM cargando los arrays de modelo de vehículo y seguro a partir de ciclos. El cálculo se hace siguiendo la clase Cotizador, y se dispara como respuesta al evento de usuario cuando este pulsa "Cotizar". La carga incompleta de datos por parte del usuario genera una advertencia personalizada con la librería SweetAlert.

La página "Flota" hace uso de fetch para cargar datos desde el archivo local flota.json, y se simula el tiempo de espera de carga con setTimeout.

GitHub Pages site: https://victoriamurai.github.io/ProyectoJavascript_Cotizador/