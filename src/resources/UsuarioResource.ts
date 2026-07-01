export default class EstudianteResource {
  private estudiante: any;

  constructor(estudiante: any) {
    this.estudiante = estudiante;
  }

  item() {
    return {
      id: this.estudiante._id,

      nombre: this.estudiante.nombre,
      apellido: this.estudiante.apellido,
      curso: this.estudiante.curso,

      createdAt: this.estudiante.createdAt,
      updatedAt: this.estudiante.updatedAt,
    };
  }
}