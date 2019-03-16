//AJAX

//1) crear un objeto del tipo XHR
let xhr = new XMLHttpRequest;

//2)Tengo que configurar el objeto XHR

xhr.open("GET","texto.txt");

//3)Asinarle un evento "load"

xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState == 2){
        //si el estado es 2 yo ya tengo los headers del servidor
        let headers = xhr.getAllResponseHeaders();
        //console.log(headers);

        let tipo = xhr.getResponseHeader("content-type");
      //  console.log(tipo);

        //Como usarlos para seguridad informatica. Si ela rchivo no es lo html, abortar el pedido
        if(tipo != "text/html"){
            xhr.abort();
        }
    }
})

xhr.addEventListener("load",()=>{
    if(xhr.status === 200){
        console.log(xhr.response)
    }
   
})
 //4)envio mi pedido
xhr.send();