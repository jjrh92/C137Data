// Inicio

// Elementos del DOM.

const contenedorHijo = document.querySelector (".contenedorHijo");

// Cada boton muestra resultados distintos.

// Mostrando a los Rick.

// Obteniendo datos desde la API.

function obtenerPersonajes (listo) {

    let url = "https://rickandmortyapi.com/api/character/?name=jerry";
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
        tarjetaInformacion.setAttribute ("style", "background-color: black; height: 9rem; width: 22rem");
        tarjetaInformacion.setAttribute ("class", "rounded-3 d-flex flex-row align-items-center");
        const contenido = 
            `
                <img style="height: 9rem; width: 7rem;" class="rounded-start-3" src="${personaje.image}">
                <div class="d-flex flex-column ps-2 gap-1">
                <a class="text-decoration-none text-warning" href="${personaje.url}"><span class="text-info fw-semibold">${personaje.name}
                </a></span>
                    <div class="d-flex flex-column">
                        <span class="text-light fw-semibold">Status: ${personaje.status}</span>
                        <span class="text-light fw-semibold">Species: ${personaje.species}</span>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <span class="fw-bolder text-light">Last known location:</span>
                        <a style="font-size: 80%" class="text-decoration-none text-warning" href="${personaje.location.url}"><span class="text-info fw-semibold">${personaje.location.name}</a></span>
                    </div>
    
                </div>
            `;
        tarjetaInformacion.innerHTML = contenido;
        contenedorHijo.appendChild (tarjetaInformacion);
        
    });
        
});

Swal.fire ({

    toast: "true",
    position: "center",
    icon: "info",
    iconColor: "cyan",
    color: "cyan",
    background: "black",
    html: '<span style="font-weight: bolder; font-size: 16px;">Mostrando Jerrys.</span>',
    showConfirmButton: false,
    timer: 2000,
});


// Fin
// Julio Reyes 26ABR2023