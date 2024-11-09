// Llamando el Nav
const nav_menu = [
    {
        nombreNav: "Inmobiliaria ADL",
        navVenta: "En venta",
        navAlquiler: "Alquiler",
        title: "Encuentra tu nueva propiedad"
    }
];

// ALQUILER
const propriedad_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        banos: "2 Baños",
        precio: 2000,
        mascota: false,
        smoke: true,
        imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
        direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3 Habitaciones",
        banos: "3 Baños",
        precio: 2500,
        mascota: true,
        smoke: true,
        imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        nombre: "Condominio moderno en zona residencial",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
        direccion: "890 Residential Blvd, Greenfield, CA 34567",
        habitaciones: "2 Habitaciones",
        banos: "2 Baños",
        precio: 1800,
        mascota: false,
        smoke: false,
        imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    }
];

function permisos(mascota, smoke) {
    let mensajeMascota = mascota ? "<i class='fas fa-paw'></i> Mascotas Permitidas" : "<i class='fas fa-ban'></i> No permitidas mascotas";
    let mensajeFumar = smoke ? "<i class='fas fa-smoking'></i> Permitido fumar" : "<i class='fas fa-smoking-ban'></i> No permitido fumar";

    return { mensajeMascota, mensajeFumar };
}

const elementoAlquiler = document.querySelector("#alquiler");
let conjuntoAlquiler = "";

// Recorrer alquiler
for (let propriedad of propriedad_alquiler) {
    let permisosPropiedad = permisos(propriedad.mascota, propriedad.smoke);

    conjuntoAlquiler += `
    <div class="card">
        <img
            src="${propriedad.imagen}"
            class="card-img-top"
            alt="${propriedad.nombre}"
        />
        <div class="card-body">
            <h5 class="card-title">${propriedad.nombre}</h5>
            <p class="card-text">${propriedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propriedad.direccion}</p>
            <p><i class="fas fa-bed"></i> ${propriedad.habitaciones} | <i class="fas fa-bath"></i> ${propriedad.banos}</p>
            <p><i class="fas fa-dollar-sign"></i> ${propriedad.precio}</p>
            <p class="${propriedad.mascota ? 'text-success' : 'text-danger'}">${permisosPropiedad.mensajeMascota}</p>
            <p class="${propriedad.smoke ? 'text-success' : 'text-danger'}">${permisosPropiedad.mensajeFumar}</p>
        </div>
    </div>
    `;
}

elementoAlquiler.innerHTML = `
  <div class="propriedad-cards">
    ${conjuntoAlquiler}
  </div>
`;


// NavBar
const elementoMenu = document.querySelector(".navbar");
let conjuntoMenu = "";

//alquiler
for (let navegador of nav_menu) {
    conjuntoMenu = `
    <div class="container">
        <a class="navbar-brand" href="./index.html">${navegador.nombreNav}</a>
        <div class="navbar-links">
            <a class="nav-link" href="./propriedades_venta.html">${navegador.navVenta}</a>
            <a class="nav-link" href="./propriedades_alquiler.html">${navegador.navAlquiler}</a>
        </div>
    </div>
    <main class="main-section">
        <h1 class="main-title">${navegador.title}</h1>
    </main>
    `;
}

elementoMenu.innerHTML = `
    <nav class="navbar">
        ${conjuntoMenu}
    </nav>
`;
