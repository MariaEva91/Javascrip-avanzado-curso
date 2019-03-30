let perfil = document.querySelector('#perfil');
let portfolio = document.querySelector('#portfolio');
let contacto = document.querySelector('#contacto');
let main = document.querySelector('main');


//ajax perfil
perfil.addEventListener("click", (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "perfil.html");
    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
        }
    })
    xhr.send();

})

//ajax portfolio
portfolio.addEventListener("click", (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest;
    xhr.open("GET", "portfolio.html");
    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
        }
    })

    xhr.send();

})

//ajax contacto
contacto.addEventListener("click", (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest;
    xhr.open("GET", "contacto.html");
    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
        }
    })
    //4)envio mi pedido
    xhr.send();

});

//opción 2. Mas corta.

let links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener("click", manejarAjax)
})

function manejarAjax(e) {
    e.preventDefault();

    let xhr = new XMLHttpRequest;
    xhr.open("GET", e.target.href);
    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
        }
    })

    xhr.send();

}

//control de descargas
//HISTORY API O HASH
//METODO HASH
//mipagina.com/#mipotrfolio

/*let links = document.querySelectorAll("a")
let main = document.querySelector("main")

//falso: undefinded/""/NaN/Null/0
//true: todo lo demás

if (location.hash) {
    cargarContenido()

}

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        let url = link.href
        // ajax(url)
        location.hash = link.innerText;
        //OPCION CON HISTORY
        history.pushState(null,"",link.innerText)

    })
})

//el evento hashchange se dispara cuando cambia el hash
window.addEventListener("hashchange", () => {
    cargarContenido()
})

//EL HISTORY USA UN EVENTO QUE SE LLAMA  POPSTATE: Se dispara cuando volves o avanzas en el historial.

window.addEventListener("popstate",()=>{
console.log("cambio el historial")
 let url = location.pathname.subtr(10)+".html";
 ajax(url)
})


function cargarContenido() {
    let url = location.hash.substr(1) + ".html";
    ajax(url)
}


function ajax(url) {
    let xhr = new XMLHttpRequest
    xhr.open("get", url)
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            main.innerHTML = xhr.response
        }
    })
    xhr.send()

}*/

//metodo history
//history.pushState({ x: 1 }, "", "test")