let dropzone = document.querySelector("#dropzone");
let input = document.querySelector("input");

// evento del input
//cuando detecta bque le agregaron un archivo subiendolo a mano
input.addEventListener("change", () => {
    console.log("agregaron un archivo a mano");
    console.dir(e.target.files)
})

//para cuando entro a la dropzone

dropzone.addEventListener("dragcenter", e => {
    e.preventDefault();
    console.log("entraron a la zona de dropzone");
});

//para cuando salen del dropzone

dropzone.addEventListener("dragleave", e => {
    e.preventDefault();
    console.log("salieron del dropzone");
});

//para cuando estan por arriba del dropzone

dropzone.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("encima del dropzone");
});

//para cuando suelto la imagen adentro

dropzone.addEventListener("drop", e => {
    e.preventDefault();
    console.log("me soltaron");
    console.log(e.dataTransfer.files)
})

function manejarSubida(archivos) {
    console.log(archivos)
}

//ejercicio
//URL.createObject(Blob/File)
/* 1) cada vez que me arrastren un archivo mostrarlo adentro del dropzone junto con su nombre de archivo y su tamaño expresadop en MB
2)ademas agregar un boton por fuera del dropzone que diga cancelar.
3)
*/