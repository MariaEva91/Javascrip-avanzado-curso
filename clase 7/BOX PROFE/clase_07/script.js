//https://www.youtube.com/watch?v=PMfcsYzj-9M
//https://www.youtube.com/watch?v=pKJG6u2kuFw
//https://www.youtube.com/watch?v=Yvf_kUBZmXg

//Paradigma clasico = CLASES
//Paradigma de prototipos = Object

//Todos los tipos de datos eventualmente se transforman a objetos.

//Todos los objetos si no encuentran una propiedad en si mismo van a bajar tantos prototipos como tengan en su cadena hasta encontrarla o arrojar error 

//El prototipo de un objeto (__proto__) es otro objeto que (en lineas generales) se encuentra dentro de la propiedad prototype de la funcion que lo creo

/*

"hola"   		=> 			new String("hola")
10				=>			new Number(10)
true 			=> 			new Boolean(true)
[]				=> 			new Array()
{}				=> 			new Object()

*/

//Funciones : Son variadicas (no dependen de la cantidad de parametros o argumentos definidos para su funcionamiento), son objetos de primer orden , y tienen ambito(scope) y contexto


//CONTEXTO : En lineas generales es el objeto que contiene a la funcion y esta en la variable "this"

function ctx(a,b){
	console.log("parametros : ",a,b)
	console.log("contexto : ",this)
	console.log("****************************")
}

//ctx(1,2)
//APPLY - BIND - CALL - new
//ctx.apply({contexto:"apply"},[10,20])
//ctx.call({contexto : "call"},100,200)
//document.addEventListener("click",ctx.bind({contexto:"bind"},1,2))

//new : Crea un objeto nuevo vacio y ejecuta la funcion que tenga al lado reasignandole como nuevo contexto ese objeto que creo. Al finalizar la ejecucion, retorna el nuevo objeto. 

//new ctx
//var a = {}
//ctx.apply(a)
//return a

function persona(nombre,edad){
	//Atributos privados
	let n = nombre
	//Atributos publicos
	this.nombre = nombre
	this.edad = edad
	//metodo publico de instancia
	this.getNombre = function(){
		console.log(n)	
	}
	//Metodo Publico de clase
	persona.prototype.getNombreProto = function(){
		console.log(n)
	}	
	/*
	persona.prototype.setNombre = function(v){
		n = v
	}
	*/
}
var a = new persona("horacio",29)
var b  =new persona("juan",29)

/*
HTMLFormElement.prototype.forEach = NodeList.prototype.forEach
let form = document.querySelector("form")
form.addEventListener("submit",e=>{
	e.preventDefault()
	console.dir(e.target)
	e.target.forEach(input=>{
		console.log(input)
	})
})
*/

/*
let obj = {
	x : 1,
	fn : function(){
		console.log(this)
		//let self = this
		setTimeout(()=>{
			//console.log(self)
			console.log(this)
		},0)
	}
}

obj.fn()
*/
//window.foo = function...

/*
function foo(){
	console.log(this)
}

foo()


let obj = {
	x : 1,
	fn : function(){
		console.log(this)
		setTimeout(obj.fn.mifuncion,0)
	}
}

obj.fn.mifuncion = function(){
	console.log(this)
}

//obj.fn.mifuncion()

obj.fn()
*/
//SCOPE : El alcance que tiene una funcion para llegar a una variable (global+local+closure)

//CLOSURE : Espacio de memoria reservado que se crea cuando se define una funcion adentro de otra funcion

/*
class Externa {

	pritave x 

	public function interna(){
		console.log(x)
	}
}
*/

function externa(x){
	//let x = arguments[0]
	console.log(x)
	let b = 50

	return function interna(y){
		console.log(y + x + b)		
	}


}

//var a = externa(10)
//En esta linea paso el Garbage Collector (algoritmo de limpieza) en busca de X
//a(20)

function usuario(dni){
	
	let d = dni

	return {
		dni : dni ,
		verDni : function(){
			console.log(d)
		},
		setDni : function(nuevo){
			d = nuevo
		}
	}
}

let res = usuario(50)


/*
function foo(a){}
foo()


function foo(){
	if (arguments.length > 2) {
		console.log("Hola")
	}else{
		console.log("Chau")
	}
}

foo(1,2,3)

document.addEventListener("click",function(){
	let e = arguments[0]
	console.log(arguments)
})

console.dir(foo)


//window.miFuncion = function(){}
function miFuncion(){
	console.log("Mi Funcion")
}

var a = "miFuncion"
//window.a = "miFuncion"

window[a]()

*/
