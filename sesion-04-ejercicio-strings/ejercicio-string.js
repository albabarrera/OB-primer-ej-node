let nombre = "Alba";
let apellido = "Barrera";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let estudianteLenght = estudiante.length;

let nombreFirstLetter = nombre[0];

//Variable que contenga la última letra del Apellido
let apellidoLength = apellido.length;
let apellidoLastLetter = apellido.charAt(apellidoLength - 1);
//

let estudianteNoSpaces = estudiante.replace(/ /g, '');

let nombreInEstudiante = estudiante.includes(nombre);