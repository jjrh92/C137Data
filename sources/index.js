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
        tarjetaInformacion.setAttribute ("style", "background-color: black; height: 10rem; width: 22rem");
        tarjetaInformacion.setAttribute ("class", "rounded-3 d-flex flex-row align-items-center");
        const contenido = 
            `
                <img style="height: 10rem; width: 9rem;" class="rounded-start-3" src="${personaje.image}">
                <div class="d-flex flex-column ps-2 gap-1">
                <span class="text-info fw-semibold">${personaje.name}</span>
                    <div class="d-flex flex-column">
                        <span class="text-light fw-semibold">Status: ${personaje.status}</span>
                        <span class="text-light fw-semibold">Species: ${personaje.species}</span>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <span class="fw-bolder text-light">Last known location:</span>
                        <span class="text-info fw-semibold">${personaje.location.name}</span>
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
    html: '<span style="font-weight: bolder; font-size: 16px;">Bienvenid@.<br> Estas en el indice.<br>Cualquier feedback es bien recibido :D.</span>',
    showConfirmButton: true,

});


// Fin
// Julio Reyes 26ABR2023