//manejo de descargas
//ej. imagen
//para una cargar una barra de progresion

let progress = document.querySelector("progress");
let youtube = document.querySelector("#youtube-loader");

let xhr = new XMLHttpRequest
xhr.open("GET","imagen.jpg");
xhr.responseType = "blob" //autodecodifica la imagen en archivo blob
xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState == 2){
        progress.classList.toggle("hidden");

    }
})
xhr.addEventListener("progress", e =>{
    if(e.lengthComputable){
        let porcentaje = e.loaded / e.total * 100;
        progress.value = porcentaje;
        youtube.style.width = porcentaje+"%"
    } else{
        //no puedo calcular cuanto va a demorar la descarga

    }

})
xhr.addEventListener("load",()=>{
    console.log("termino la descarga");
    progress.classList.toggle  = "hidden";
    youtube.style.width = "";
    let url =URL.createObjectURL(xhr.response);

    let imagen = document.createElement("img");
    imagen.src = url;
    document.body.appendChild(imagen);
    console.log(xhr)

    //para abrir lo que traje en otra pestaña

    let a = document.createElement("a");
    a.href = url;
    //a.target = "_blank";
    a.download = "minuevaimagen"; //para descargar la imagen al recargar la pagina
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
xhr.send()



