
let links = document.querySelectorAll("a")
let main = document.querySelector("main")

//FASLE | undefined | "" | NaN | NULL | 0 
if (location.hash) {
    cargarContenido()
}

links.forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault()
        let url = link.href
        ajax(url)
        //location.hash = link.innerText
        history.pushState(null,"",link.innerText)
    })
})


//El evento popstate se dispara cuando : 
/**
 * 1) Cuando el usuario hace click en los botones de navegacion
 * 2) Cuando el usuario escribe alt+ < / >
 * 3) Cuando se ejecuta desde consola history.back()/history.forward()
 */
window.addEventListener("popstate",()=>{
    let url = location.pathname.substr(10)+".html"
    ajax(url)
})

//el evento hashchange se dispara cuando el hash cambia
window.addEventListener("hashchange",()=>{
    cargarContenido()
})

function cargarContenido(){
    let url = location.hash.substr(1)+".html"
    ajax(url)
}

function ajax(url){
    let xhr = new XMLHttpRequest
    xhr.open("get",url)
    xhr.addEventListener("load",()=>{
        if (xhr.status == 200) {
            main.innerHTML = xhr.response
        }
    })
    xhr.send()
}

/**
 * Hash :  mipagina.com/#portfolio
 * 
 * 
 * History API
 * 
 * Optimistic UI
 */