// Inicio

// Elementos del DOM.

const contenedorHijo = document.querySelector (".contenedorHijo");

// Cada boton muestra resultados distintos.

// Mostrando a los Rick.

// Obteniendo datos desde la API.

function obtenerPersonajes (listo) {

    let url = "https://rickandmortyapi.com/api/character/";
    const resultado = fetch (url);

    resultado
        .then(response => response.json())
        .then(data => {

            listo(data);

        });

};

// Definiendo la manera en que se muestran los datos.

obtenerPersonajes (data => {

    data.results.forEach(personaje => {

        const tarjetaInformacion = document.createElement ("div");
        tarjetaInformacion.setAttribute ("style", "background-color: black; height: 13rem; width: 30rem");
        tarjetaInformacion.setAttribute ("class", "rounded-3 d-flex flex-row align-items-center");
        const contenido = 
            `
                <img style="height: 13rem; width: 12rem;" class="rounded-start-3" src="${personaje.image}">
    
                <div class="d-flex flex-column ps-3 gap-1">
                <a class="text-decoration-none text-warning" href="${personaje.url}"><span class="fs-4 text-info fw-semibold">${personaje.name}
                </a></span>
                    <div>
                        <span class="text-light fs-5 fw-semibold">Status: ${personaje.status} Species: ${personaje.species}</span>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <span class="fs-5 fw-bolder text-light">Last known location:</span>
                        <a class="text-decoration-none text-warning" href="${personaje.location.url}"><span class="fs-6 text-info fw-semibold">${personaje.location.name}
                        </a></span>
                    </div>
    
                </div>
            `;
        tarjetaInformacion.innerHTML = contenido;
        contenedorHijo.appendChild (tarjetaInformacion);
        
    });
        
});


Swal.fire ('Bienvenid@. Mediante la API de Rick y Morty mostraremos 20 personajes por sección. Dejame tu feedback :D.')



// Fin
// Julio Reyes 25ABR2023