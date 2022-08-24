function insertarHTML(ubicarEn) {
    const idElement = document.getElementById(ubicarEn)
    idElement.innerHTML += `${Object.values(titulos).map((x, y) => 
        crearMenuLateral(x, y)).join("")}`
}

function crearMenuLateral(arreglo,indice){
    titulos[indice].id =  `${indice}`
    return `
        <p><a href='${page}#${indice}'>${indice+1}. ${arreglo.innerText}</a></p>
    `
}


const path = window.location.pathname;
const page = path.split("/").pop();
const titulos = document.getElementsByTagName("h2")
insertarHTML("menuLateral")


