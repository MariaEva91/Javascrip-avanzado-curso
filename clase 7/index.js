///closure

function externa(x) {
    console.log(x)
    return function interna(y) {
        console.log(y + x)
    }
}

var a = externa(10)
a(20)
//-------------

function usuario(dni) {
    let d = dni
    return {
        dni: dni,
        verDni: function () {
            console.log(d)
        }
    }
}
let res = usuario(50)

//CONTEXTO

function foo() {
    console.log(this)
}
foo()

//---
let obj = {
    x: 1,
    fn: function () {
        console.log(this)
        setTimeout(function () {
            console.log(this)
        }, 0)
    }
}
obj.fn()

//---------------forzar el valor de this

function ctx(a, b) {
    console.log("parametros: ", a, b)
    console.log("contexto: ", this)
    console.log("*************")
}

ctx(1, 2)
//distintas maneras de ejecutar una funcion
//APPLY-CALL-BIND-NEW

//1)APPLY: en el primer paarametro le voy a pasar lo q quiero que valga THIS.
//reemplaza cada this, por este ojeto vacio{}
ctx.apply({ contexto: "apply" }, [10, 20]);

//2)CALL. Lo primero es lo que vos quieras que valga el THIS, y despues los valores de los parametros
ctx.call({ contexto: "call" }, 100, 200)

//3) BIND. Primero el THIS y despues los parametros por separado. Retorna la funcion, no la ejecuta
//le puedo reescribir el THIS, pero lo guarda para cuando la quiera ejecutar, lo usas en la proxima vez.
ctx.bind({})
//le digo, este es tu valor de this y tus parametros, no lo ejecutes, guardalo y usalo cuando te hagan THIS.
document.addEventListener("click", ctx.bind(null, 1, 2))

//4)NEW. Crea un objeto nuevo  vacio y ejecuta la funcion que tenga al lado, reasignandole como nuevo contexto ese objeto que creo, al finalziar la ejecucion retorna el nuevo objeto

//new ctx: esto hace el new por atras:!
//var a ={}
//ctx.apply(a)
//return a

function test() {
    console.log(this)
}
var a = new test

//Este tipo de estructuras es lo que usamos como clases en JS.
//mando una propiedad al prototype, metodos cuando quiero que una funcionalidad compartida entre todos
//asi ocupo un solo lugar y lo usan todos por referencia

//al tener la funcion adentro de persona, puedo jugar con la info publica y privada, del closure

function persona(nombre, edad) {
    //let this ={}
    //Atributos privados
    let n = nombre
    //Atributos publicos
    this.nombre = nombre
    this.edad = edad
    //metodo publico de instancia
    this.getNombre = function () {
        console.log(n)
    }

    //Metodo publico de clase. lo tiene toda la clase persona.
    persona.prototype.getNombreProto = function () {
        console.log(n)
    }
    //return this
}
var a = new persona("horacio", 29)
var b = new persona("juan", 45)