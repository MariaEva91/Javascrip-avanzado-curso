//agarrra el formulario
//asignar el evento submit
//cancelar el default
//agarrar el valor del input y del text area
//con la info que agarramos crear un elemento <li>
//agregarlo al <ul>

//EJERCICIO FORMULARIOS

let form = document.querySelector("form");
let ul = document.querySelector("ul");

form.addEventListener("submit", e=>{
    e.preventDefault();
    
    let nombre = e.target[0].value;
    let text = e.target[1].value;

    console.log(nombre, text);

    
let li = document.createElement('li');
li.innerText = nombre + " : " + text;

ul.appendChild(li);

})





