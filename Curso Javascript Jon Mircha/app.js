// VIDEO 1 / 2 / 3 / 4 / 5 
let nombre = 'Luciano';
let apellido = 'Gonzalez';
let edad = 20; 
console.log('Datos: ',nombre, apellido, 'edad: ', edad);

let objeto = ["blanco", "negro", "azul"];

let objetos = {
    equipo: 'PSG',
    posicion: 'Delantero'
}

console.log(objetos.posicion);

/// VIDEO 6
let saludo = `Mi nombre es ${nombre} ${apellido}`;
console.log(saludo);

/// VIDEO 7 
let a = 2;
let b = new Number(1);
let c = 7.19;

console.log(c.toFixed(1)); // RECORTA LOS NUMEROS PARA NO MOSTRAR TANTOS DECIMALES.
console.log(parseInt(c)); // ME DEVUELVE SOLO LA PARTE ENTERA
let d = parseFloat(c) - parseInt(c); /// PARA MOSTRAR SOLO LA PARTE FLOTANTE, LE RESTO LA PARTE ENTERA.
console.log('Numero: ' + d.toFixed(2)); 

console.log(typeof c); // ME DICE EL TIPO DE DATO.

/// VIDEO 8
let verdadero = true;
let falso = false;
console.log(verdadero, falso); /// NOS IMPRIME EL VALOR
let v = Boolean(true);
let f = Boolean(false);

console.log(Boolean(0)); /// EL 0 TIENDE A FALSO.
console.log(Boolean(-1)); /// NUMERO NEGATIVO TIENDE A VERDADERO. En Developper Mozilla podemos ver los valores que tienden a negativo y positivo.

/// VIDEO 9

let nulo = null; /// Es un valor especial que indica la ausencia de un valor.
let indefinido = undefined; /// Indica que no se ha inicializado una variable y que el valor esta ausente.
/// NaN = Nos lo indica la consola cuando intentamos hacer operaciones con algo que no sean numeros, nan signfica no es un numero.

/// VIDEO 10
function estoEsUnaFuncion(){ /// DECLARACION DE LA FUNCION
    console.log("La funcion se ejecuta.");
    console.log("La funcion se ejecuta.");
    console.log("La funcion se ejecuta.");
}

estoEsUnaFuncion(); /// INVOCACION

function devuelveValor(){
    console.log('Anduvo');
    return "La funcion retorno una cadena de texto"; /// RETURN: Retorna un valor.
}

let retornado = devuelveValor(); /// Le asigno a la variable el valor de lo que retorne la funcion.
console.log(retornado);

function saludar(nombre){ /// Le paso por parametros una variable que va a ser utilizada dentro de la funcion.
    console.log( `Bienvenido: ${nombre}`);
}

saludar(nombre); /// Invoco la funcion.

// VIDEO 12 
const persona = { // IMPORTANTE usar const cuando usamos objetos.
    nombre: 'Luciano',
    apellido: 'Gonzalez',
    edad: 20,
    deporte: 'Boxeo',
    carrera: 'Tecnico Universitario en Programacion',
    soltero: false,
    pasatiempos: ['Futbol', 'Amigos', 'Cine'],
    contacto: {
        celular: 2235486445,
        email: 'gonzalezfrontend@gmail.com'
    },
    saludo: function(){
        console.log('HOLA BRO')
    },
    miNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`) // THIS: (ESTE) , hace referencia al mismo objeto, ESTE.
    }
}
console.log(persona);
console.log(persona['nombre']);
console.log(persona.contacto.celular);
console.log(persona.pasatiempos[2]);
persona.saludo(); // FORMA DE LLAMAR A LA FUNCION QUE ESTA DENTRO DE UN OBJETO
persona.miNombre();

console.log(Object.keys(persona)); /// ME LISTA LAS PROPIEDADES DEL OBJETO EN UN ARREGLO
console.log(Object.values(persona)); /// ME LISTA EL VALOR DE LAS PROPIEDADES DEL OBJETO EN UN ARREGLO
console.log(persona.hasOwnProperty("nombre")); /// VERIFICA QUE UNA PROPIEDAD EXISTA
console.log(persona.hasOwnProperty("nacimiento"));

// VIDEO 13
console.log(9 > 8);
console.log(8 <= 9);
console.log(7 > 64);


let siete = '7'; // = igual es asignacion de variable
console.log(7 == siete); // == comparacion de valores | Devuelve true porque ambos son 7
console.log(7 === siete); // === comparacion de valores y tipo de dato | Devuelve false porque uno es de tipo numero y otro es cadena de texto

// OPERADORES LOGICOS: ! NOT \ || OR \ && AND 
console.log('Operador Not: ' + !true); 
console.log('Operador OR: ' + (9 === 9 || 8 === 7)); 
console.log('Operador AND: ' + (9 === 9 && 8 === 7));

// VIDEO 14
let variableEdad = 20;

if(variableEdad >= 18){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}

let hora = 17;
if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
}
else if(hora >= 6 && hora <= 11){
    console.log("Buenos Dias");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas Tardes");
}
else{
    console.log('Buenas Noches');
}

console.log("Operador Ternario");
let eresMayor = (variableEdad >= 18) 
? "Eres mayor de edad" 
: "Eres menor de edad";

console.log(eresMayor);

let dia = 2;

// OPERADOR SWITCH - CASE

switch(dia){
    case 0:
        console.log("Hoy es: Lunes");
        break;
    case 1:
        console.log("Hoy es: Martes");
        break;
    case 2:
        console.log("Hoy es: Miercoles");
        break;
}

// VIDEO 15
let contador = 0;

console.log('BUCLE WHILE');
while(contador < 10){ 
    console.log('WHILE: ', contador);
    contador++;
}
console.log('BUCLE FOR: ');
for (let index = 0; index < 10; index++) {
    console.log("FOR: ", index);
}

let numeros = [10,20,30,40,50,60,70,80,90];

for (let i = 0; i < numeros.length; i++) { /// FOR NORMAL
    console.log(numeros[i]);
}

for (const propiedad in persona) { /// FOR IN
    console.log(`Key: ${propiedad}, Value: ${persona[propiedad]}`);
}

for (const elemento of numeros) { /// FOR OF
    console.log(elemento);
}

// VIDEO 16

try {
    console.log("EN EL TRY SE AGREGA EL CODIGO A EVALUAR");
    noExiste; // VARIABLE QUE NO EXISTE
    console.log("SEGUNDO TRY") // NO EJECUTA PORQUE HAY ERROR
} catch (error) { // SE EJECUTA EL CATCH PORQUE CAPTURO UN ERROR EN EL TRY
    console.log("CAPTURA CUALQUIER ERROR SURGIDO O LANZADO EN EL TRY");
    console.log(error);
} finally{ // SIEMPRE SE EJECUTA AL FINAL DE UN TRY-CATCH
    console.log("SE EJECUTARA SIEMPRE AL FINAL DE UN BLOQUE TRY-CATCH");
}

try {
    let numeroTry = "L";
    if(isNaN(numeroTry)){
        throw new Error("El caracter introducido no es un numero");
    }
    console.log(numeroTry * numeroTry);
} catch (error) {
    console.log(`Se produjo el siguiente error ${error}`);
}

// VIDEO 17

for(let i = 0; i < numeros.length; i++){
    if(i === 5){ // SI... i ES IGUAL A 5 
        break; // SALE DEL FOR
    }
    console.log(numeros[i]);
}
console.log("-------------------");

for(let i = 0; i < numeros.length; i++){
    if(i === 5){ // SI... i ES IGUAL A 5 
        continue; // OMITE LA POSICION 5, EL CONTINUE LO QUE HACE ES OMITIR.
    }
    console.log(numeros[i]);
}

// VIDEO 18 - DESTRUCTURACION 
const arregloNumeros = [1,2,3];

// Sin destructuracion
let uno = arregloNumeros[0],
 dos = arregloNumeros[1],
 tres = arregloNumeros[2];

console.log(uno,dos,tres);

// Con destructuracion
const[one, two, three] = arregloNumeros;
console.log(one, two, three);

let personaP = {
    nombres: 'Lucho',
    apellidos: 'Gonzalez',
    edads: 20
}

let {nombres, apellidos ,edads} = personaP; /// ES IMPORTANTE QUE AL DESTRUCTURAR OBJETOS USEMOS LOS MISMOS NOMBRES.
console.log(nombres, apellidos, edads);

// VIDEO 19 - OBJETOS LITERALES
let apodo = 'Pancho',
anios = 6;

const perro = {
    apodo, // SI LAS VARIABLES SE LLAMAN IGUAL NO HACE FALTA IGUALARLAS
    anios,
    raza: 'callejero'
}
console.log(perro);

// VIDEO 20 - PARAMETROS REST Y OPERADOR SPREAD
function sumar(a,b, ...c){ // PARAMETROS REST, LO USAMOS CUANDO NO SABEMOS CUANTOS PARAMETROS VAMOS A RECIBIR
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    })

    return resultado;
}

console.log(sumar(1,2,3,8,9,12,4,5,7,1));

const arr1 = [1,2,3,4,5],
arr2 = [6,7,8,9,0];

const arr3 = [...arr1, ...arr2]; // UNE LOS DOS ARREGLOS
console.log(arr3);

// VIDEO 21 - ARROW FUNCTIONS

const saludoH = function(){ // FUNCION NORMAL
    console.log('Hola, soy una funcion');
}

const saludoL = () => console.log('Hola, soy una Arrow Function'); // ARROW FUNCTION: CUIDADO!! SON INDEPENDIENTES DEL CONTEXTO

const saludoNombre = nombre => console.log(`Hola, ${nombre}`); // SI LE PASO UN SOLO PARAMETRO NO HACE FALTA EL PARENTESIS

const sumarNumeros = (a,b) => a + b; // NO HACE FALTA EL RETURN

const funcionDeVariasLineas = () => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

saludoH();
saludoL();
saludoNombre("Marangoni");
console.log(sumarNumeros(18, 7));
funcionDeVariasLineas();

// VIDEO 22 - PROTOTIPOS

/* POO (PROGRAMACION ORIENTADA A OBJETOS):
- Clases - Modelo a seguir
- Objetos - Es una instancia de una clase
 Atributos - Es una caracteristica o propiedad del objeto (variables dentro de un objeto)
 Metodos - Acciones que un objeto pueda realizar (son funciones dentro de un objeto)
*/

const animal = { // OBJETO LITERAL
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal);


function Animal(nombre, genero){ // FUNCION CONSTRUCTORA V1
    this.nombre = nombre;
    this.genero = genero;

    this.sonar = function(){ // METODO
        console.log("Hago sonidos porque estoy vivo");
    }
}

const snoopy = new Animal("Snoopy", "Macho"), // CREO UN OBJETO
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);



function Animal(nombre, genero){ // FUNCION CONSTRUCTORA V1
    this.nombre = nombre;
    this.genero = genero;

    
}
this.sonar = function(){ // METODO
        console.log("Hago sonidos porque estoy vivo");
    }