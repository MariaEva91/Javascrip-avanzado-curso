
//Prototipo
let persona = {
	saludo : () => console.log("Hola")	
}

let ana = Object.create(persona,{
	nombre : {
		value : "Ana",
		writable : false,
		configurable : false,
		enumerable : false
	} 
})
//ana.nombre = "ana"

let juan = Object.create(persona,{
	edad : {
		value : 29/*,
		writable : false,
		configurable : false,
		enumerable : false*/
	}
})
//juan.edad = 29


let empleado = Object.create(persona,{
	trabajar : {
		value : () => console.log("Pagame mas")
	},
	constructor : {
		value : function Sarasa(){}
	}
})

let horacio = Object.create(empleado)