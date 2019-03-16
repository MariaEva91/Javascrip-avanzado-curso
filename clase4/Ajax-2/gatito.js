//control de descargas
let p = querySelector('p');

let xhr = new XMLHttpRequest;
xhr.open("GET", "descarga.jpg");

xhr.addEventListener("progress", (e) => {
    if(e.lengthComputable){
        let porcentaje = e.loaded / e.total * 100;
        porcentaje.toFixed(1);
        p.innnerText = "Tu descarga va " + porcentaje +"%";

    }else{
        //aca mostramos un gif de descarga de tiempo indeterminado
    }
    console.log('Descargando')
})



xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
        console.log('termino el pedido')
    }
})
//4)envio mi pedido
xhr.send();

