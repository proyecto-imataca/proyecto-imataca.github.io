function crearHeader() {
    return `
<div class="logo">
    <a href="index.html">
        <figure>  
            <img src="./public/images/proyecto-imataca-logo.jpg" alt="logo proyecto imataca">
        </figure>
    </a>
</div>
<nav class="menu">
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#">Ingresos</a></li>
        <li><a href="#">Gastos</a></li>
    </ul>
</nav>
    `
}

function crearFooter(){
    return `
    <p>Design by J.Martinez.R | 2022 Code R11</p>    
    `
}

function incluirElementos(idName,nameFunction){
    const idElement = document.getElementById(idName)
    idElement.innerHTML = `${nameFunction}`
}

incluirElementos("logo-menu",crearHeader())
incluirElementos("footer-section1",crearFooter())