//En ES6,aparece CLASS
//los parametros los paso, en la funcion constructor


class Persona{

    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludo(){
        console.log("hola")
    }

}

let a = new Persona("A",1)

///HERENCIA EN ES6
//Podes traer todo(prototipo y propiedades) o nada. Se le agregar con el EXTENDS.

class Empleado extends Persona {

    constructor(sueldo,nombre,edad){
        super(nombre,edad)//ejecuta el constructor de la clase padre, sino no anda porque no las trae realmente
        this.sueldo = sueldo
    }

    trabajar(){
        console.log("pagame mas")
    }

}

let b = new Empleado(1,"cristina",65)