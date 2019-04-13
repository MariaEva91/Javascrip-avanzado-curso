
class Persona {

	constructor(nombre,edad){
		this.nombre = nombre
		this.edad = edad
	}

	saludo(){
		console.log("Hola")
	}

}


class Empleado extends Persona {

	constructor(sueldo,nombre,edad){
		super(nombre,edad)
		this.sueldo = sueldo
	}

	trabajar(){
		console.log("Pagame mas")
	}

}

let a = new Empleado(1,"A",29)