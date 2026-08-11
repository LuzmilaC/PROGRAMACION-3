let numeros = [1, 5, 7, 12, 89, 23];
let numerosDobles = numeros.map(function (num) {
    return numeros * 2
    
})

// ejercicio 2

let string = numeros.map(function (num) {
    return num.toString()
    
})

//ejercicio 3
let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];

let mayuscula = nombres.map(function (name) {
  return  name.toUpperCase()
})

// ejercicio 4

let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombres = personas.map(function (persona) {
    return persona.nombre
});





//ejercicio 5

let matrix = personas.map(function(persona) {
    if (persona.edad >= 60) {
        return persona.nombre + " puede entrar a la Matrix";
    } else {
        return persona.nombre + " es demasiado peque";
    }
});

// utilizo persoa.nombre porque es un array de objetos(en los objetos accedo a una propiedad con el punto)




//matrix en html
// ejercicio 6
let personasHtml = personas.map(function(persona) {
    return "<h2>" + persona.nombre + "</h2><p>" + persona.edad + "</p>";
});
  
//filter

//ejercicio 1
let numerosDos = [66, 3, 2, 5, 26, 101];
 let cincoOMas = numerosDos.filter(function (num) {
    return num > 5;
    
 });

 // ejercicio 2

 let pares = numerosDos.filter(function (num) {
    return num % 2
    
 });

 //ejercicio 3
let words = ["dog", "wolf", "by", "family", "eaten", "camping"];
let menosDeCinco = words.filter(function (w) {
    return w.lenght == 5
    
});

// ejercicio 4

let listaPersonas = [
{ nombre: "Angelina Jolie", afiliado: true },
{ nombre: "Eric Jones", afiliado: false },
{ nombre: "Paris Hilton", afiliado: true },
{ nombre: "Kayne West", afiliado: false },
{ nombre: "Bob Ziroll", afiliado: true }];

let miembroIlluminati = listaPersonas.filter(function (bool) {
    return bool.afiliado == "true";
    
});

// ejercicio 5
let listaEstudiantes = [
{nombre:"Facundo", edad: 18, calificaciones:[{materia: "Matematicas", nota: 7}, {materia:"Estadistica", nota: 9}, {materia: "Programacion", nota: 10}]},
{nombre:"Erika", edad: 22, calificaciones:[{materia: "Matematicas", nota: 9}, {materia:"Estadistica", nota: 8}, {materia: "Programacion", nota: 9}]},
{nombre:"Ignacio", edad: 20, calificaciones:[{materia: "Matematicas", nota: 6}, {materia:"Estadistica", nota: 8}, {materia: "Programacion", nota: 6}]},
{nombre:"Felicitas", edad: 18, calificaciones:[{materia: "Matematicas", nota: 7}, {materia:"Estadistica", nota: 9}, {materia: "Programacion", nota: 8}]},
{nombre:"Catalina", edad: 21, calificaciones:[{materia: "Matematicas", nota: 10}, {materia:"Estadistica", nota: 9}, {materia: "Programacion", nota: 9}]},
]

let estudiantesDestacados = listaEstudiantes.filter(function (promedio) {
    let sumaNota = 0;
    promedio.calificaciones.map(function (n) {
        sumaNota = sumaNota + n.nota
        console.log(sumaNota);
        
    })
    return sumaNota / promedio.calificaciones.lenght
    
})
console.log(estudiantesDestacados);












