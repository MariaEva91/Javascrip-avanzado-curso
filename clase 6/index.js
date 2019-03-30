//PROMESAS
//La nueva manera de hacer AJAX
//los pedidos me quedan encadenados pero no anidados.
//para esto usamos la api de FETCH, mezcla de la api de XHR + PROMISE

let url = "http://jsonplaceholder.typicode.com/"

let promesa = fetch(url + "users")

//1)traer todos los usuarios
//2)traer todos los posteos de un usuario(id=5)
//3) traer todos los comentarios de todos los posteos

promesa
    .then(res => {
        //esto es lo que quiero hacer cuando la promesa se haya resuelto
        return res.json()
    })
    .then(res => {
        console.log(res)
        let id = res[4].id
        return fetch(url + "posts?userId=" + id)
    })
    .then(res => {
        return res.json()

    })
    .then(res => {
        console.log(res)
        let array_de_promesas = []
        res.forEach(post => {
            let id_post = post.id
            array_de_promesas.push(fetch(url + "comments?postId=" + id_post))
        })
        return Promise.all(array_de_promesas)
    })
    .then(res => {
        console.log(res)//este ya no anda
        let array_de_promesas = []
        res.forEach(response => {
            array_de_promesas.push(response.json())
        })
        return Promise.all(array_de_promesas)
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        // y aca cuando se haya rechazado
    })

//GEOLOCALIZACION

//mi ubicacion la busco en 
// navigator.geolocation()
//buscar mi ubicacion actual

navigator.geolocation.getCurrentPosition((u) => {
    //  console.log(u)
    let lat = u.coords.latitude
    let lon = u.coords.longitude

    fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
})

//apis bloqueadas

let urls = "https://glosbe.com/gapi/translate?from=es&dest=en&phrase=hola&format=json"