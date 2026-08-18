
let subject = "luzmila"
let year = 20

let favoriteSites = ["netflix", "tiktok", "instagram", "x"];

console.log(favoriteSites[3]); //imprime posicion 3

favoriteSites.pop() //elimina el ultimo elemento

favoriteSites.push("google") //agrega un elemento alfinal del aray




let person = {
    name: "Mike",
    lastName: "Wazowski",
    age: 37
}

console.log("Hola mi nombre es " + person.name + " " + person.lastName + " y tengo " + person.age + " años");

//ejercicio 3

person.sites = favoriteSites;
console.log(person.sites);
console.log(person.sites[1]);

//ejercicio 4
// Array de 6 cursos
let procesandoCurso = [
    {
        nombreDelCurso: "prog",
        descripcionCurso: "..",
        cantidadAlumnos: 33,
        diasCursada: ["lunes", "miercoles", "viernes"]
    },
    {
        nombreDelCurso: "historia",
        descripcionCurso: "..",
        cantidadAlumnos: 22,
        diasCursada: ["lunes", "miercoles", "viernes"]
    },
    {
        nombreDelCurso: "derecho",
        descripcionCurso: "..",
        cantidadAlumnos: 11,
        diasCursada: ["lunes", "miercoles", "viernes"]
    },
    {
        nombreDelCurso: "datos",
        descripcionCurso: "..",
        cantidadAlumnos: 77,
        diasCursada: ["lunes", "miercoles", "viernes"]
    },
    {
        nombreDelCurso: "cultura",
        descripcionCurso: "..",
        cantidadAlumnos: 88,
        diasCursada: ["lunes", "miercoles", "viernes"]
    },
    {
        nombreDelCurso: "sociedad",
        descripcionCurso: "..",
        cantidadAlumnos: 34,
        diasCursada: ["lunes", "miercoles", "viernes"]
    }
];

// 2. Obtener el tercer curso (índice 2)
console.log(procesandoCurso[2]);

// 3. Nombre del cuarto curso (índice 3)
console.log(procesandoCurso[3].nombreDelCurso);

// 4. Agregar un día de cursada al curso número 2 (índice 1)
procesandoCurso[1].diasCursada.push("martes");
console.log(procesandoCurso[1].diasCursada);

// 5. Agregar un array de alumnos a CADA curso
procesandoCurso[0].alumnos = [
    { nombre: "Juan", apellido: "Perez" },
    { nombre: "Pedro", apellido: "Pascal" }
];
procesandoCurso[1].alumnos = [
    { nombre: "Lucia", apellido: "Peralta" },
    { nombre: "Marta", apellido: "Gomez" }
];
procesandoCurso[2].alumnos = [
    { nombre: "Lucia", apellido: "Peralta" },
    { nombre: "Carlos", apellido: "Diaz" }
];
procesandoCurso[3].alumnos = [
    { nombre: "Ana", apellido: "Lopez" }
];
procesandoCurso[4].alumnos = [
    { nombre: "Sofia", apellido: "Ruiz" }
];
procesandoCurso[5].alumnos = [
    { nombre: "Tomas", apellido: "Fernandez" }
];

// 6. Nombre del primer alumno del curso 3 (índice 2)
console.log(procesandoCurso[2].alumnos[0].nombre);


//funciones

//1
let saludar = () => "hola";
console.log(saludar());

//2
let multiplicar = (a,b) =>  a * b;

//3
let anonima = () => "Soy una función sin nombre :("
console.log(anonima());

//4
let esPar = numero =>  numero % 2 === 0;
console.log(esPar(7));
console.log(esPar(10));


//1
let calcularAniosPerrunos = edad =>  "tu perro tiene: " + edad * 7 + " años perrunos"
console.log(calcularAniosPerrunos(2));
console.log(calcularAniosPerrunos(5));

//2a y 2b: Celsius a Fahrenheit
let celsiusAFahrenheit = temperatura => {
    let resultado = (temperatura * 9/5) + 32;
    return temperatura + "°C son " + resultado + "°F";
};

console.log(celsiusAFahrenheit(0));   // 0°C son 32°F
console.log(celsiusAFahrenheit(100)); // 100°C son 212°F
console.log(celsiusAFahrenheit(25));  // 25°C son 77°F

//2c y 2d: Fahrenheit a Celsius
let fahrenheitACelsius = temperatura => {
    let resultado = (temperatura - 32) * 5/9;
    return temperatura + "°F son " + resultado + "°C";
};

console.log(fahrenheitACelsius(32));  // 32°F son 0°C
console.log(fahrenheitACelsius(212)); // 212°F son 100°C
console.log(fahrenheitACelsius(98.6)); // 98.6°F son 37°C

//3
let cambiarElUltimo = (array, dato) => {
        let resultado = array.pop().push(dato);
        return resultado;

};

//4
let libro = {
    nombre: "oscuro",
    genero: "terror",
    cantidadDePaginas: 333,
    contenidoInfantil: false,

    describirse: function() {
        return "El libro se llama " + this.nombre + " y es del género " + this.genero;
    },

    puedeLeerlo: function(edad) {
        if (this.contenidoInfantil && edad < 12) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(libro.describirse());
console.log(libro.puedeLeerlo(10));
console.log(libro.puedeLeerlo(15));

//condicionales
//1
let diaSemana = "lunes";

if (diaSemana === "lunes") {
    console.log("Feliz lunes, arrancamos la semana con todo");
} else if (diaSemana === "martes") {
    console.log("Ya es martes, vamos que se puede");
} else if (diaSemana === "miercoles") {
    console.log("Miércoles, mitad de semana");
} else if (diaSemana === "jueves") {
    console.log("Jueves, ya se siente el fin de semana cerca");
} else if (diaSemana === "viernes") {
    console.log("Viernes, último esfuerzo");
} else if (diaSemana === "sabado") {
    console.log("Sábado, a disfrutar el finde");
} else if (diaSemana === "domingo") {
    console.log("Domingo, a descansar");
} else {
    console.log("Ese no es un día válido");
} 

//b
let persona = {
    nombre: "Luzmila",
    apellido: "Centurion",
    edad: 20,
    ciudad: "Buenos Aires"
};

let tieneCiudad = persona.ciudad !== undefined 

// menor de edad
if (persona.edad < 18 && !tieneCiudad) {
    console.log("Hola " + persona.nombre + " " + persona.apellido + " criatura viajera!");
} else if (persona.edad < 18 && tieneCiudad) {
    console.log("Hola mini " + persona.nombre + " " + persona.apellido + " de " + persona.ciudad);
}

// mayor de edad
if (persona.edad >= 18 && !tieneCiudad) {
    console.log("Hola " + persona.nombre + " " + persona.apellido + " eminencia viajera!");
} else if (persona.edad >= 18 && tieneCiudad) {
    console.log("Hola mayor " + persona.nombre + " " + persona.apellido + " de " + persona.ciudad);
}

// nombre corto
if (persona.nombre.length < 4) {
    console.log("Ay pero que nombre cortito!");
}

// Winterfell
if (persona.ciudad === "Winterfell") {
    console.log("Winter is coming");
}










