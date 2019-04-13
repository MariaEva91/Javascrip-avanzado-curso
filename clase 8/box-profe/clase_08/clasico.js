let a = {}
//let a = new Object()
//let a = Object.create(Object.prototype)
let sin_proto = Object.create(null)

//window.Persona = function Persona(){}
//var Persona = function Persona(){}
function Persona(nombre,edad){
	this.nombre = nombre
	this.edad = edad
	//this.saludo = () => console.log("Hola")
	Persona.prototype.saludo = () => console.log("Hola")
}

let juan = new Persona("Horacio",29)
let ana = new Persona("Ana",29)


function Empleado(sueldo,nombre,edad){
	this.sueldo = sueldo
	//Composicion de clase
	//Superclass.apply(this,[params])
	//Superclass.call(this,...params)
	Persona.apply(this,[nombre,edad])

	Empleado.prototype.trabajar = () => console.log("Pagame mas")
}

//Herencia
//Subclass.prototype = Object.create(Superclass.protype)
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

let carlos = new Empleado(1,"Carlos",29)



function Programador(leng,sueldo,nombre,edad){
	this.leng = leng
	Empleado.apply(this,[sueldo,nombre,edad])
	Programador.prototype.programar = () => console.log("console.log(...")
}

Programador.prototype = Object.create(Empleado.prototype)
Programador.prototype.constructor = Programador

let horacio = new Programador("JS",1,"horacio",29)


