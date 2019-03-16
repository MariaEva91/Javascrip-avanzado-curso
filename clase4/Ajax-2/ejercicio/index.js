let perfil = document.querySelector('#perfil');
let portfolio = document.querySelector('#portfolio');
let contacto = document.querySelector('#contacto');
let main =  document.querySelector('main');




//ajax perfil
perfil.addEventListener("click",(e)=>{
   e.preventDefault();
    let xhr = new XMLHttpRequest;
    xhr.open("GET","perfil.html");
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        } 
    })
    xhr.send();
    
})

//ajax portfolio
portfolio.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let xhr = new XMLHttpRequest;
    xhr.open("GET","portfolio.html");
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
    })
    
    xhr.send();

})

//ajax contacto
contacto.addEventListener("click",(e)=>{
    e.preventDefault();
   
    let xhr = new XMLHttpRequest;
    xhr.open("GET","contacto.html");
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
    })
     //4)envio mi pedido
    xhr.send();

});

//opción 2. Mas corta.

let links = document.querySelectorAll('a');

links.forEach((link)=>{
link.addEventListener("click",manejarAjax)
})

function manejarAjax(e){
    e.preventDefault();
   
    let xhr = new XMLHttpRequest;
    xhr.open("GET", e.target.href);
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
    })
     
    xhr.send();

}
