// - Una función sin parámetros que devuelva siempre "true"

function noParameters() {
    return true  
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const myAsync = setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);


// - Una función generadora de índices pares automáticos

function* evenNumbersGenerator() {
    let id = 0;
    while(true) {
        id++
        if (id > 10) {
            return id
        }
        yield id * 2
    }
}