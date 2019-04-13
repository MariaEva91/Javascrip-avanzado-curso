//modelo de prototipos

//Prototipo
let persona = {
    saludo: () => console.log("hola")
}

let ana = Object.create(persona, {
    nombre: {
        value: "Ana",
        writable: false,
        configurable:false,
        enumerable:false

    }
})
//ana.nombre = "ana"
//Por cuestiones de seguridad, en lugar de asignarlo directo el valor, le creo adentro un ojeto de configuracion
//Todas vienen en false por defecto, le tengo que sobreescribir si la quiero pasar a true algo

let juan = Object.create(persona, {
    edad: {
        value: 29
    }
})
//juan.edad = 29


//los sub prototipos son object.create tambien---------------------------------

let empleado = Object.create(persona,{
    trabajar:{
        value : ()=> console.log("pagame mas")
    },
    constructor:{
        value: function sarasa(){}
    }
})

let horacio = Object.create(empleado)