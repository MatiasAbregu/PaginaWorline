let nov1 = document.getElementById("img1");
let nov2 = document.getElementById("img2");
let nov3 = document.getElementById("img3");
let contenedorModal = document.getElementById("modal");
let modal = document.getElementById("informacionModal");
const flechaDer = document.getElementById("flechaDer"), flechaIzq = document.getElementById("flechaIzq");
let numeroNovedad = 1;
let intervaloM;

const mostrarNovedad = (numeroNovedad) => {
    if (numeroNovedad == 1) {
        nov1.src = "img/AppleNovedades.png";
        document.querySelector(".nov1").id = "appleNovedad";
        nov2.src = "img/LacosteNovedad.png";
        document.querySelector(".nov2").id = "lacosNovedad";
        nov3.src = "img/AdidasNovedades.png";
        document.querySelector(".nov3").id = "adidasNovedad";
    } else if (numeroNovedad == 2) {
        nov1.src = "img/LacosteNovedad.png";
        document.querySelector(".nov1").id = "lacosNovedad";
        nov2.src = "img/AdidasNovedades.png";
        document.querySelector(".nov2").id = "adidasNovedad";
        nov3.src = "img/VictoriaSecretNovedades.png";
        document.querySelector(".nov3").id = "vsNovedad";
    } else if (numeroNovedad == 3) {
        nov1.src = "img/AdidasNovedades.png";
        document.querySelector(".nov1").id = "adidasNovedad";
        nov2.src = "img/VictoriaSecretNovedades.png";
        document.querySelector(".nov2").id = "vsNovedad";
        nov3.src = "img/geforce-rtx-4090.png";
        document.querySelector(".nov3").id = "nvidiaNovedad";
    } else if (numeroNovedad == 4) {
        nov1.src = "img/VictoriaSecretNovedades.png";
        document.querySelector(".nov1").id = "vsNovedad";
        nov2.src = "img/geforce-rtx-4090.png";
        document.querySelector(".nov2").id = "nvidiaNovedad";
        nov3.src = "img/GalaxyA14.png";
        document.querySelector(".nov3").id = "samsungNovedad";
    } else if (numeroNovedad == 5) {
        nov1.src = "img/geforce-rtx-4090.png";
        document.querySelector(".nov1").id = "nvidiaNovedad";
        nov2.src = "img/GalaxyA14.png";
        document.querySelector(".nov2").id = "samsungNovedad";
        nov3.src = "img/AppleNovedades.png";
        document.querySelector(".nov3").id = "appleNovedad";
    } else if (numeroNovedad == 6) {
        nov1.src = "img/GalaxyA14.png";
        document.querySelector(".nov1").id = "samsungNovedad";
        nov2.src = "img/AppleNovedades.png";
        document.querySelector(".nov2").id = "appleNovedad";
        nov3.src = "img/LacosteNovedad.png";
        document.querySelector(".nov3").id = "lacosNovedad";
    }
}

//<></>
const mostrarModalContenido = (marca) => {
    if (marca == "appleNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Apple';
        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad1.jpg';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "50vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Apple, todas la tecnología en un solo lugar! Puedes encontrar todos los productos mostrados y más en el local de Apple, " +
            "simplemente ve a Marcas y a Apple, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("apple");
    } else if (marca == "lacosNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Lacoste';
        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad1.jpg';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "70vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Lacoste, desde remeras hasta maletas! Puedes encontrar todos los productos mostrados y más en el local de Lacoste, " +
            "simplemente ve a Marcas y a Lacoste, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("lacoste");
    } else if (marca == "adidasNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Adidas';
        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad1.png';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "50vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Adidas, desde zapatillas hasta indumentaria! Puedes encontrar todos los productos mostrados y más en el local de Adidas, " +
            "simplemente ve a Marcas y a Adidas, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("adidas");
    } else if (marca == "vsNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Victoria Secret';
        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad1.jpg';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "50vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Victoria Secret, desde perfumes hasta indumentaria! Puedes encontrar todos los productos mostrados y más en el local de Victoria Secret, " +
            "simplemente ve a Marcas y a Victoria Secret, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("victoriaS");
    } else if (marca == "nvidiaNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Nvidia';
        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad1.jpg';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "55vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Nvidia, todas las GPU en un solo lugar! Puedes encontrar todos los productos mostrados y más en el local de Nvidia, " +
            "simplemente ve a Marcas y a Nvidia, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("nvidia");
    } else if (marca == "samsungNovedad") {
        document.getElementById("modalTitulo").innerHTML = 'Novedades de Samsung';
        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad1.jpg';
        document.getElementById("modalImagen1").style.width = "auto";
        document.getElementById("modalImagen1").style.height = "50vh";
        document.getElementById("modalTexto").innerText = "¡Mira las novedades de Samsung, todos los electrodomesticos en un solo lugar! Puedes encontrar todos los productos mostrados y más en el local de Samsung, " +
            "simplemente ve a Marcas y a Samsung, ¡Y podras comenzar a mirar las exclusivas!";
        mostrarImagenesEnIntervalo("samsung");
    }
}

const mostrarImagenesEnIntervalo = (marca) => {
    let numeroDeImagen = 1;

    if (marca == "terminar") {
        clearInterval(intervaloM);
    }

    intervaloM = setInterval(() => {
        if (marca == "apple") {

            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad1.jpg';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad2.jpg';
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad3.jpg';
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad4.jpg';
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'appleNovedades/Novedad5.png';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        } else if (marca == "lacoste") {

            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad1.jpg';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad2.jpg';
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad3.jpg';
                        document.getElementById("modalImagen1").style.width = "90%";
                        document.getElementById("modalImagen1").style.height = "40vh";
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad4.jpg';
                        document.getElementById("modalImagen1").style.width = "auto";
                        document.getElementById("modalImagen1").style.height = "70vh";
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'lacosteNovedades/Novedad5.jpg';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        } else if (marca == "adidas") {

            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad1.png';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad2.jpg';
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad3.jpg';
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad4.jpg';
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'adidasNovedades/Novedad5.jpg';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        } else if (marca == "victoriaS") {

            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad1.jpg';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad2.jpg';
                        document.getElementById("modalImagen1").style.height = "40vh";
                        document.getElementById("modalImagen1").style.width = "90%";
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad3.jpg';
                        document.getElementById("modalImagen1").style.height = "50vh";
                        document.getElementById("modalImagen1").style.width = "auto";
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad4.png';
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'vsNovedades/Novedad5.jpg';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        } else if (marca == "nvidia") {

            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad1.jpg';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad2.jpg';
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad3.jpg';
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad4.png';
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'nvidiaNovedades/Novedad5.png';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        } else if (marca == "samsung") {
            if (numeroDeImagen < 6) {
                switch (numeroDeImagen) {
                    case 1:
                        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad1.jpg';
                        break;
                    case 2:
                        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad2.png';
                        break;
                    case 3:
                        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad3.jpg';
                        break;
                    case 4:
                        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad4.jpg';
                        break;
                    case 5:
                        document.getElementById("modalImagen1").src = 'samsungNovedades/Novedad5.jpg';
                        break;
                }
                numeroDeImagen++;
            } else {
                numeroDeImagen = 1;
            }

        }
    }, 3500);
}

flechaDer.addEventListener("click", () => {

    if (numeroNovedad < 6) {
        numeroNovedad++;
    } else {
        numeroNovedad = 1;
    }

    mostrarNovedad(numeroNovedad);
})

flechaIzq.addEventListener("click", () => {

    if (numeroNovedad > 1) {
        numeroNovedad--;
    } else {
        numeroNovedad = 6;
    }

    mostrarNovedad(numeroNovedad);
})

setInterval(() => {
    if (numeroNovedad < 6) {
        numeroNovedad++;
    } else {
        numeroNovedad = 1;
    }

    mostrarNovedad(numeroNovedad)

}, 5000);

document.querySelector(".nov1").addEventListener("click", () => {
    contenedorModal.style.display = "block";
    modal.style.backgroundColor = "rgb(255, 115, 115)";
    modal.style.color = "white";
    modal.style.animation = "aparecerDer 1s normal";
    mostrarModalContenido(document.querySelector(".nov1").id);
})

document.querySelector(".nov2").addEventListener("click", () => {
    contenedorModal.style.display = "block";
    modal.style.backgroundColor = "rgb(255, 197, 90)";
    modal.style.color = "white";
    modal.style.animation = "aparecerAbajo 1s normal";
    mostrarModalContenido(document.querySelector(".nov2").id);
})

document.querySelector(".nov3").addEventListener("click", () => {
    contenedorModal.style.display = "block";
    modal.style.backgroundColor = "rgb(81, 162, 255)";
    modal.style.color = "white";
    modal.style.animation = "aparecerIzq 1s normal";
    mostrarModalContenido(document.querySelector(".nov3").id);
})

document.getElementById("cerrar").addEventListener("click", () => {
    mostrarImagenesEnIntervalo("terminar");
    contenedorModal.style.display = "none"
})

//console.log(window.screen.height);
//console.log(window.scrollY);

const marcas = document.getElementById("marcas");
const promociones = document.getElementById("promociones");
const contacto = document.getElementById("contacto");

window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("novedades").style.animation = "aparecerDesdeAbajo normal 1s";

    let tipoDePromos = 1 + Math.round(Math.random() * 4);
    console.log(tipoDePromos)

    if (tipoDePromos == 1){
        document.getElementById("imgP1").src = "LogosMarcas/adidasLogo.png";
        document.getElementById("pP1").innerText = "Visita la tienda de Adidas y ¡Encuentra promociones únicas! \n-20% off en zapatillas \n-10% off en remera \n-15% off en camperas";

        document.getElementById("imgP2").src = "LogosMarcas/samsungLogo.png";
        document.getElementById("pP2").innerText = "Visita la tienda de Samsung y ¡Encuentra promociones únicas! \n-20% off en televisores \n-10% off en celulares \n-5% off en aires acondicionados";

        document.getElementById("imgP3").src = "LogosMarcas/chanelLogo.png";
        document.getElementById("pP3").innerText = "Visita la tienda de Chanel y ¡Encuentra promociones únicas! \n-10% off en bolsos \n-10% off en perfumes \n-5% off en maquillajes";
    } else if(tipoDePromos == 2){
        document.getElementById("imgP1").src = "LogosMarcas/nikeLogo.png";
        document.getElementById("pP1").innerText = "Visita la tienda de Nike y ¡Encuentra promociones únicas! \n-15% off en zapatillas \n-10% off en remeras \n-10% off en camperas";

        document.getElementById("imgP2").src = "LogosMarcas/appleLogo.png";
        document.getElementById("pP2").innerText = "Visita la tienda de Apple y ¡Encuentra promociones únicas! \n-5% off en computadoras \n-5% off en celulares \n-5% off en tablets";

        document.getElementById("imgP3").src = "LogosMarcas/vsLogo.png";
        document.getElementById("pP3").innerText = "Visita la tienda de Victoria Secret y ¡Encuentra promociones únicas! \n-10% off en bolsos \n-10% off en perfume \n-5% off en maquillajes";
    } else if(tipoDePromos == 3){
        document.getElementById("imgP1").src = "LogosMarcas/dcShoesLogo.png";
        document.getElementById("pP1").innerText = "Visita la tienda de DC Shoes y ¡Encuentra promociones únicas! \n-10% off en zapatillas \n-10% off en remeras \n-10% off en camperas";

        document.getElementById("imgP2").src = "LogosMarcas/intelLogo.png";
        document.getElementById("pP2").innerText = "Visita la tienda de Intel y ¡Encuentra promociones únicas! \n-10% off en placas madre \n-10% off en procesadores";

        document.getElementById("imgP3").src = "LogosMarcas/nikeLogo.png";
        document.getElementById("pP3").innerText = "Visita la tienda de Nike y ¡Encuentra promociones únicas! \n-15% off en zapatillas \n-10% off en remeras \n-10% off en camperas";
    } else if(tipoDePromos == 4){
        document.getElementById("imgP1").src = "LogosMarcas/lacosteLogo.png";
        document.getElementById("pP1").innerText = "Visita la tienda de Lacoste y ¡Encuentra promociones únicas! \n-15% off en zapatillas \n-15% off en remeras \n-5% off en perfumes";

        document.getElementById("imgP2").src = "LogosMarcas/amdLogo.png";
        document.getElementById("pP2").innerText = "Visita la tienda de AMD y ¡Encuentra promociones únicas! \n-10% off en placas madre \n-10% off en procesadores \n10% off en placas de video";

        document.getElementById("imgP3").src = "LogosMarcas/nvidiaLogo.png";
        document.getElementById("pP3").innerText = "Visita la tienda de Nvidia y ¡Encuentra promociones únicas! \n-10% off en placas de video";
    } 
});

window.addEventListener("scroll", ()=>{
    if (marcas.offsetHeight + -1000 <= window.scrollY){
        document.getElementById("textoMarca").style.animation = "aparecerPagIzq normal 2s";
        document.getElementById("textoMarca").style.opacity = "1";
        document.getElementById("ladoDerechoM").style.animation = "aparecerPagIzq normal 2s";
        document.getElementById("ladoDerechoM").style.opacity = "1";
    } 

    if (promociones.offsetHeight <= window.scrollY){
      document.querySelector(".pa1").style.animation = "aparecerPagDer normal 2s";
      document.querySelector(".pa1").style.opacity = "1";
      setTimeout(() => {
        document.querySelector(".pa2").style.animation = "aparecerPagDer normal 2s";
        document.querySelector(".pa2").style.opacity = "1";
      }, 200);
      setTimeout(() => {
        document.querySelector(".pa3").style.animation = "aparecerPagDer normal 2s";
        document.querySelector(".pa3").style.opacity = "1";
      }, 200);
    } 

    if(contacto.offsetHeight <= window.scrollY){
        document.getElementById("formulario").style.animation = "aparecer normal 3s";
        document.getElementById("formulario").style.opacity = "1";
        document.getElementById("quienSomos").style.animation = "aparecer normal 3s";
        document.getElementById("quienSomos").style.opacity = "1";
    }
});

document.getElementById("adidas").addEventListener("click", ()=>{
    window.open("https://www.adidas.com.ar/");
});

document.getElementById("nike").addEventListener("click", ()=>{
    window.open("https://www.nike.com.ar/");
});

document.getElementById("lacoste").addEventListener("click", ()=>{
    window.open("https://www.lacoste.com/ar/");
});

document.getElementById("victoriaSec").addEventListener("click", ()=>{
    window.open("https://www.victoriassecret.com/ar/");
});

document.getElementById("chanel").addEventListener("click", ()=>{
    window.open("https://www.chanel.com/lx/");
});

document.getElementById("dcshoes").addEventListener("click", ()=>{
    window.open("https://www.dcshoes.com.ar/");
});

document.getElementById("samsung").addEventListener("click", ()=>{
    window.open("https://www.samsung.com/ar/");
});

document.getElementById("apple").addEventListener("click", ()=>{
    window.open("https://www.apple.com/la/");
});

document.getElementById("intel").addEventListener("click", ()=>{
    window.open("https://www.intel.la/content/www/xl/es/homepage.html");
});

document.getElementById("amd").addEventListener("click", ()=>{
    window.open("https://www.amd.com/es.html");
});

document.getElementById("nvidia").addEventListener("click", ()=>{
    window.open("https://www.nvidia.com/es-la/");
});