// Inicio

// Elementos del DOM.

const contenedorHijo = document.querySelector (".contenedorHijo");
const tarjetaInformacion = document.getElementById ("tarjetaInformacion");
const personajes = document.getElementById ("botonPersonajes");
const sitios = document.getElementById ("botonSitios");
const episodios = document.getElementById ("botonEpisodios");

// Logica.

const url = "https://rickandmortyapi.com/api/character";

const listadoPersonajes = fetch (url).then ((respuesta) => {

return respuesta.json ();

})

.then ((data) => {

    let personajes = data;
    console.log (personajes);

});




// Fin
// Julio Reyes 24ABR-2023