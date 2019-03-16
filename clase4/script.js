/**
 * AJAX 
 */

//1) Crear un objeto del tipo XHR
let xhr = new XMLHttpRequest
//2) Tengo que configurar el objeto XHR
xhr.open("GET","texto.txt")
//3) Asignarle un evento "load"
xhr.addEventListener("readystatechange",()=>{

    if (xhr.readyState == 2) {
        //Si el estado es 2 yo ya tengo los headers del servidor
        let headers = xhr.getAllResponseHeaders()
        //console.log(headers)
        /**
         * Content-Type : Determina el tipo de archivo
         * Content-Length : Determina el tamaño del archivo
         * Server : Determina el tipo de servidor
         */
        let tipo = xhr.getResponseHeader("content-type")
        if (tipo != "text/html") {
            xhr.abort()
        }
    }

    if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response)
    }
})

xhr.addEventListener("load",()=>{
    if (xhr.status == 200) {
        console.log(xhr.response)
    }
})
//4) Envio mi pedido
xhr.send()



/**
 * 
 * Eventos de AJAX : 
 * 
 * readystatechange : Se dispara cada vez que el objeto XHR cambia de estado 
 * 
 * load : Se dispara cuando el estado del objeto XHR es finalizado (readyState === 4)
 * 
 * 
 * Estados : XHR.readyState
 * 
 * 0- Objeto inicializado
 * 1- Objeto configurado
 * 2- HEADERS enviados y recibidos 
 * 3- Descargando informacion
 * 4- Pedido finalizado 
 * 
 * 
 * 
 * HTTP 
 * 
 * REQUEST(cliente)
 * METODO URL VERSION
 * METAINFORMACION
 * 
 * GET /index.html HTTP/1.1
 * Host : www.google.com
 * Cookies : nombre=horacio
 * Content-Type : text/html
 * 
 * 
 * RESPONSE(servidor)
 * VERSION CODIGO MENSAJE
 * 
 * HTTP/1.0 200 OK
 * Content-Type : text/html
 * Content-Length : 20
 * Sever : Apache/PHP7.0
 */