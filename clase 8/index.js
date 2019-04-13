//REPASO: Paradigma de prototipos----------------------------------------
let a = { x: 1 };
//let a = new Object()
// let a = Objetc.create(Objetc.prototype)

//Contexto

function Persona(nombre,edad) {
    //let this ={}
    this.nombre = nombre
    this.edad = edad
   // this.saludo = ()=> console.log("hola!") //los metodos que sean iguales para todos las instancias de una misma clase, no van a la intancia(this), sino al prototipo
   Persona.prototype.saludo = ()=> console.log("hola!")
   //return this

    console.log(this)
}
//me devuelve el objeto window, que es el lo contiene
Persona()
//crea un objeto nuevo
let juan = new Persona("juan", 35)
let ana = new Persona("ana",67)


//Hay una manera de crear un objeto sin prototipo
//si o si le tengo que pasar un parametro o null
let sin_proto = Object.create(null)

//HERENCIA--------------------------------------------------------------------------------

//qué pasa si tengos dos funciones constructoras? si quiero que hereden de una clase a otra
//Empleado es una nueva clase y horacio, una instancia de una clase

function Empleado(sueldo,nombre,edad){
    this.sueldo = sueldo
    //composicion de clase
    //le indica el nuevo valor de this(horacio) en esta funcion
    Persona.apply(this,[nombre,edad])

    Empleado.prototype.trabajar = ()=> console.log("pagame más")
}
//Cómo hago, para que Empleado, tengo dentro el prototipo Persona

//Subclass.prototype = Object.create(superclass.prototype)
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;
//le agrego a mano otro prototipo

let horacio = new Empleado(1,"horacio",29);

//hago herencia una tercera funcion: hereda de dos prototipos

function Programador(lenguajes,sueldo,nombre,edad){
    this.lenguajes = lenguajes
    Empleado.apply(this,[sueldo,nombre,edad])
    Programador.prototype.programar = ()=> console.log("console.log")
}
Programador.prototype = Object.create(Empleado.prototype)
Programador.prototype.constructor = Programador;

let carlos = new Programador("JS",1,"carlos",45)






