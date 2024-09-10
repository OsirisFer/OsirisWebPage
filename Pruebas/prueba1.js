var dentroFuncionVar = "Variable VAR"; //declaradad dentro de una función es local a la función y no se puede acceder desde fuera
var fueraFuncionVar = "Variable VAR"; //declarada fuera de una función es global y se puede acceder desde cualquier parte del programa
let dentroBloqueLet = "Variable LET"; //declarada dentro de un bloque es local al bloque y solo se puede acceder desde ese bloque

//Hoisting: hace que las variables con var suban al principio del codigo, entonces existen siempre para el compilador pero no con su valor asignado, por lo que si se intenta acceder a ellas antes de ser declaradas, se obtiene un valor undefined
//let y const por el contrario no se ven afectadas por el hoisting, por lo que si se intenta acceder a ellas antes de ser declaradas, se obtiene un error
//Ejemplo: si hago console.log(x); sin declarar la variable x antes devuelve undefined
//camelCase: es una convención de nombres de variables en la que se escriben todas las palabras juntas y la primera letra de cada palabra, excepto la primera, se escribe en mayúscula
//Tipos de datos en JavaScript: Number, String, Boolean, Object, Array, Function, Null, Undefined, Symbol, BigInt

let ejNumber = 1; //Number
let ejString = "Hola"; //String
let ejBoolean = true; //Boolean
let eUndefined = undefined; //Undefined
let ejNull = null; //Null devuelve Object debido a un error en el lenguaje pero es un primitivo
let ejObject = { //Object
    nombre: "Juan",
    edad: 30,
    casado: false
};
let ejSymbol = Symbol("Simbolo"); //Symbol
let ejBigInt = BigInt(100); //BigInt

console.log(typeof ejNumber, typeof ejString, typeof ejBoolean, typeof eUndefined, typeof ejNull, typeof ejObject, typeof ejSymbol, typeof ejBigInt); //Devuelve el tipo de dato de cada variable

//Objetos en JavaScript: son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor
const objeto = { nombreObjeto: "Objeto1", numeroObjeto: 30, metodo: function() {console.log("Esto es el objeto "+ objeto.nombreObjeto + " numero " + objeto.numeroObjeto)}}; //Objeto
console.table(objeto); //Devuelve el objeto
objeto.metodo(); //Devuelve el metodo del objeto
//Herencia
let otroObjeto = new objeto("Objeto2", 40); //Otra forma de crear un objeto
otroObjeto.metodo(); //Devuelve el metodo del objeto, esto es herencia de prototipos
//Prototyping: en vez de crear el metodo metodo dentro de objeto, podria haberse creado en el prototipo de objeto para que no se repita en cada objeto creado
//Ejemplo: objeto.prototype.metodo = function() {console.log("Esto es el objeto "+ objeto.nombreObjeto + " numero " + objeto.numeroObjeto)};

//Conversion Implicita: es cuando el lenguaje convierte un tipo de dato a otro sin que el programador lo indique
let a = 10 + "20"; //Devuelve 1020, porque si hay una string en una operación de suma, el resultado es una concatenación
let b = "5" - 20; //Devuelve -10, porque a diferencia de en la suma, la resta, division y multiplicación no trabajan con strings por lo que convierten la string a numero
let c = "5" == 5; //Devuelve true, porque el operador == convierte el tipo de dato de la izquierda al de la derecha para compararlos
let d = "5" === 5; //Devuelve false, porque el operador === compara los tipos de datos y los valores
let e = 0 == false; //Devuelve true, porque el numero 0 se considera falso
let f = null == undefined; //Devuelve true, porque null y undefined son considerados iguales
let g = true + false; //Devuelve 1, porque true es 1 y false es 0
let h = "" + 1; //Devuelve 1 pero como String, porque lo concatena con el vacio y lo convierte a string
let i = "hola" / 2; //Devuelve NaN, porque no se puede dividir una string, ni convertirla a numero, lo mismo con resta y multiplicación
