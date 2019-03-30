
//Callback of Hell / Pyramid of Doom
/*
ajax("primera_url",respuesta=>{
    ajax("segunda_url",respuesta=>{
        ajax("tercer_url",respuesta=>{
            
        })
    })
})
*/

/*
function ajax(url,callback){
    let xhr = new XMLHttpRequest
    xhr.open("get",url)
    xhr.addEventListener("load",()=>{
        if (xhr.status == 200) {
            callback(xhr.response)
        }
    })
    xhr.send()
}
*/

//Fetch = XHR + Promise
let url = "http://jsonplaceholder.typicode.com/"

let promesa = fetch(url+"users")
/*
promesa
.then(res=>{
    //Esto es lo que quiero hacer cuando la promesa se haya resuelto
    return res.json()
})
.then(res=>{
    let id = res[4].id //5
    return fetch(url+"posts?userId="+id)
})
.then(res=>{
    return res.json()
})
.then(res=>{
    let array_de_promesas = []
    res.forEach(post=>{
        let id_post = post.id
        array_de_promesas.push(fetch(url+"comments?postId="+id_post))
    })
    return Promise.all(array_de_promesas)
})
.then(res=>{
    let array_de_promesas = []
    res.forEach(response=>{
        array_de_promesas.push(response.json())
    })
    return Promise.all(array_de_promesas)
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    //Esto es lo que quiero hacer cuando la promesa se haya rechazado
})
*/


promesa
.then(res=>res.json())
.then(res=>fetch(url+"posts?userId="+res[4].id))
.then(res=>res.json())
.then(res=>Promise.all(res.map(post=>fetch(url+"comments?postId="+post.id))))
.then(res=>Promise.all(res.map(response=> response.json())))
.then(res=>{
    console.log(res)
})
.catch(err=>{
})


/**
 * fetch()     =>     Promise
 * Promise     =>     .then().catch()
 * Response    =>     Response.metodo() (Ej.: res.json())
 * {Promise}   =>     return Promise
 * 
 * Promise : 
 * 
 * tienen estado : pending - resolved - rejected
 * y tienen valor : el valor que querias prometer si todo sale bien ó el error si todo sale mal
 * 
 * 
 * 
 */


 let arr = [1,2,3,4,5]
//Sentencia
 arr.forEach((e,i)=>{})

 //Expresion
 let a = arr.map((e,i)=>{
     return e +1 
 })

 //arr.filter(()=>{})

 //arr.sort(()=>{})

 // Reduce
 /*
 arr.reduce((primer,segundo)=>{
    return primer + segundo //26
 },20)
 */

