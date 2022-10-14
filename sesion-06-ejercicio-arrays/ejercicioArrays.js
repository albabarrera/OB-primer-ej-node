const listaCompra = ["pan", "tomate", "jamon", "queso", "aguacate"];

listaCompra.push("Aceite de Girasol");

listaCompra.pop();


const peliculasFavoritas = [{
    titulo : "Paris, je t'aime",
    director: "Isabel Coixet",
    fecha: 2006
    }, 
    {titulo : "Parasite",
    director: "Bong Joon Ho",
    fecha: 2019
    }, 
    {titulo : "Dolly Parton: Here I Am",
    director: "Francis Whately",
    fecha: 2019
    }
];

const peliculasDesde2010 = peliculasFavoritas.filter(peliculas => peliculas.fecha > 2010);

const directoresPeliculas = peliculasFavoritas.map(peliculas => peliculas.director);

const titulosPeliculas = peliculasFavoritas.map(peliculas => peliculas.titulo);

const directoresYtitulosConcat = directoresPeliculas.concat(titulosPeliculas);

const directoresYtitulosFPropag = [...directoresPeliculas, ...titulosPeliculas];