let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let main =  document.querySelector('main');

//boton1

boton1.addEventListener("click",()=>{
    let xhr = new XMLHttpRequest;
    xhr.open("GET","pagina1.html");
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
       
    })
     //4)envio mi pedido
    xhr.send();
    
    
});

//boton2

boton2.addEventListener("click",()=>{
    let xhr = new XMLHttpRequest;
    xhr.open("GET","pagina2.html");
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
       
    })
     //4)envio mi pedido
    xhr.send();
})