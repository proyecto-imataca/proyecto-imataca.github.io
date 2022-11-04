const dbCategorias = [ 
    {
        enlace: "./gastos-2022.html",
        target: "",
        tituloH3: "Borrador Gastos 2022 expresado en dólares",
        texto: "Borrador gastos 2022 expresados en dólares como referencia para analizar y estimar futuros gastos.",
    }, 
    {
        enlace: "./modelo-recibo-condominio.html",
        target: "",
        tituloH3: "Modelo de Recibo de Condominio",
        texto: "Borrador para la implementación del Recibo de Condominio en el Edificio Imataca",
    },  
    
    {
        enlace: "https://drive.google.com/file/d/1waDDOH8xG67cq8O7f43g7pEYA8RWnA0L/view?usp=sharing",
        target: "_blank",
        tituloH3: "Reglamento Edificio Imataca",
        texto: "Reglamento original del Edificio Imataca",
    },
    {
        enlace: "./guia-practica-condominios.html",
        target: "",
        tituloH3: "Gúia Práctica para Condominios <br> (Alcaldía de Chacao)",
        texto: "Un documento de condominio regula el inmueble en general y establece las normas para la vida común.",
    },
    {
        enlace: "https://drive.google.com/file/d/1yo7Ck5zfYtzk39S2qseYhHBGK0xsNTSF/view?usp=sharing",
        target: "_blank",
        tituloH3: "Ley de Propiedad Horizontal",
        texto: "En Venezuela, la Ley de Propiedad Horizontal regula todo lo relacionado con los derechos y deberes de los propietarios de un inmueble.",
    },
    {
        enlace: "https://curadas.com/2021/03/17/rendir-cuentas-condominio-rafael-viso/",
        target: "_blank",
        tituloH3: "Rendición de Cuentas",
        texto: "Recomendaciones generales para la rendición de cuentas por Rafael Viso",
    }, 
    {
        enlace: "https://fundamemoria.blogspot.com/search/label/Ed.%20Imataca%20y%20Roraima",
        target: "_blank",
        tituloH3: "Fundación de la <br>Memoria Urbana",
        texto: "Bienes Preinventariados y consignados ante la Alcaldía de Chacao para ser protegidos y conservados.",
    }, 
]

function mostrarCategorias() {
    const idElement = document.getElementById("categorias")
    idElement.innerHTML = `${dbCategorias.map(crearCategorias).join("")}`
}

function crearCategorias(registro) {
    return `
<div class="card-texto">
    <a href="${registro.enlace}" target="${registro.target}">
        <h3>${registro.tituloH3}</h3>
        <p>${registro.texto}</p>
    </a>
</div>
    `
}

mostrarCategorias()


