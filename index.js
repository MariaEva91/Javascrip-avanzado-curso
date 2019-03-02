//la forma veija de trabajar con eventos
function hacerClick() {
    console.log("click");
}

function otraCosa() {
    console.log("otraCosa")
}

let button = document.querySelector("#btn");
button.onclick = hacerClick;

// console.dir(button);
// console.log(button);

/// La forma correcta
//Nodo.addEventListener(string evento, function callback, boolean tipo)

button.addEventListener("click", hacerClick);
button.addEventListener("click", otraCosa);
button.addEventListener("click", () => {
    console.log("arrow function")
});

//agregar eventos a cualquier otro eleemnto del dom que nos e aun boton

let tres = document.querySelector("#tres");
let dos = document.querySelector("#dos");
let uno = document.querySelector("#uno");

tres.addEventListener("click", (e) => {
   // console.log(e)
    e.stopPropagation()
    console.log("tres")
});
dos.addEventListener("click", () => {
  //  console.log("dos")
});

///crea boton que crea un nuevo boton al clickearlo
let crear = document.querySelector("#crear");

crear.addEventListener("click", () => {
    let btn = document.createElement("button");
    btn.innerText = "Nuevo Boton";
    btn.id = "dinamico";
    document.body.appendChild(btn);

});

//como asignarle eventos a elementos creados dinamicamente
//Como no le puedo asignar el evento al mismo eleemnto ya que aun no existe en el DOM.
//Eso me da ERROR//
//Entonces se lo asigno a un elemento superior , intercepto su propagacion

document.body.addEventListener("click", e => {
    console.log(e.target) //e.target es igual a un querySelector de cualquier cosa
    //  console.dir(e.target)
    if (e.target.id == "dinamico") {
       // console.log("Dinamico")
    }
})

//cancelar eventos por default
//por ejemplo con una etiqueta a, si quiero frenar su comportamiento por defecto.

//Ejercicio

let a = document.querySelector("a");

a.addEventListener("click", e => {
    e.preventDefault()
    console.log("link!");
    
let texto = document.createElement("p");
texto.innerText = "Esta seguro que desea salir de la pagina?";
document.body.appendChild(texto);

let botonAceptar = document.createElement("button");
botonAceptar.innerText = "Aceptar";
document.body.appendChild(botonAceptar);
botonAceptar.addEventListener("click",()=>{
    location.href = 'http://google.com';
})


let botonCancelar = document.createElement("button");
botonCancelar.innerText = "Cancelar";
document.body.appendChild(botonCancelar);
})












