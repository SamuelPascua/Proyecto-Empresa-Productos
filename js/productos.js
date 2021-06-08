window.onload = main;

function main(){
    const imagenes = document.querySelectorAll('.img-galeria');

    imagenes.forEach(imagen =>{
        imagen.addEventListener('click', () =>{
            abrirPaginaProducto(imagen.getAttribute('src'));
        })
    })

    const abrirPaginaProducto = (imagen)=>{
        if(imagen == "../img/uno.jpg"){
            //Abrir página producto 1
            window.open("../html/producto1.html", "_self");
        }
        else if(imagen == "../img/dos.jpg"){
            //Abrir página producto 2
            window.open("../html/producto2.html", "_self");
        }
        else if(imagen == "../img/tres.jpg"){
            //Abrir página producto 3
            window.open("../html/producto3.html", "_self");
        }
        else if(imagen == "../img/cuatro.jpg"){
            //Abrir página producto 4
            window.open("../html/producto4.html", "_self");
        }
        else if(imagen == "../img/cinco.jpg"){
            //Abrir página producto 5
            window.open("../html/producto5.html", "_self");
        }
        else{
            //Abrir página producto 6
            window.open("../html/producto6.html", "_self");
        }
    }
}