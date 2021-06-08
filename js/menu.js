window.onload = main;

function main(){
    const icono = document.getElementById('icono-menu');
    const menu = document.getElementById('menu-navegacion');

    icono.addEventListener('click', ()=>{
        menu.classList.toggle("mostrar");
        icono.classList.toggle("ocultar");
    })


    window.addEventListener('click', (e)=>{
        if(menu.classList.contains('mostrar') && e.target != menu && e.target != icono){
            menu.classList.toggle("mostrar");
            icono.classList.toggle("ocultar");
        }
    })
}