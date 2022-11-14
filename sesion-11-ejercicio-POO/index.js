class Estudiante {
  nombre;
  asignaturas = [];
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const primerEstudiante = new Estudiante("Pepe");
console.log(primerEstudiante.obtenDatos());
