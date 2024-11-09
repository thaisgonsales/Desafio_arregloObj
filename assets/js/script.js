//Llamando el Nav

const nav_menu =[
    {
        nombreNav : "Inmobiliaria ADL",
        navVenta : "En venta",
        navAlquiler : "Alquiler",
        title: "Encuentra tu nueva propiedad"
    }
]


//Propriedades venta


const propriedad_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4 Habitaciones",
        banos: "4 Baños",
        precio: 5000,
        mascota: false,
        smoke: false,
        imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"

    },
    {
        nombre: "Apartamento acogedor en la montaña",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road,Summit Peaks, CA 23456",
        habitaciones: "2 Habitaciones",
        banos: "1 Baños",
        precio: 1200,
        mascota: true,
        smoke: true,
        imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica convistas espectaculares",
        direccion: "567 Skyline Avenue,Skyview City, CA 56789",
        habitaciones: "3 Habitaciones",
        banos: "3 Baños",
        precio: 4500,
        mascota: true,
        smoke: false,
        imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"
    }

]

function permisos(mascota, smoke) {
    let mensajeMascota = mascota ? "<i class='fas fa-paw'></i> Mascotas Permitidas" : "<i class='fas fa-ban'></i> No permitidas mascotas";
    let mensajeFumar = smoke ? "<i class='fas fa-smoking'></i> Permitido fumar" : "<i class='fas fa-smoking-ban'></i> No permitido fumar";

    return { mensajeMascota, mensajeFumar };
}


// VENTAS

const elementoVentas = document.querySelector("#venta")
let conjuntoVentas = ""

for (let propriedad of propriedad_venta) {
    permisosPropiedad = permisos(propriedad.mascota, propriedad.smoke);


    conjuntoVentas += `
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
    `
}


elementoVentas.innerHTML = `
  <div class="propriedad-cards">
    ${conjuntoVentas}
  </div>
`

// NavBar

let conjuntoMenu = "";
const elementoMenu = document.querySelector(".navbar");

for (let navegador of nav_menu) {
    conjuntoMenu += `
      <div class="container">
        <a class="navbar-brand" href="./index.html">${navegador.nombreNav}</a>
        <div class="navbar-links">
          <a class="nav-link" href="./propriedades_venta.html">${navegador.navVenta}</a>
          <a class="nav-link" href="./propriedades_alquiler.html">${navegador.navAlquiler}</a>
        </div>
      </div>
    </nav>
    <main class="main-section">
      <h1 class="main-title">${navegador.title}</h1>
    </main>
    `
}

elementoMenu.innerHTML = `
    <nav class="navbar">
    ${conjuntoMenu}
    </div>
`




