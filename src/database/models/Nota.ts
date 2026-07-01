import { Schema, model } from "mongoose";

const NotaSchema = new Schema(
  {
    idEstudiante: {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
      required: true,
    },

    idMateria: {
      type: Schema.Types.ObjectId,
      ref: "Materia",
      required: true,
    },

    primerTrimestre: {
      type: Number,
      required: true,
    },

    segundoTrimestre: {
      type: Number,
      required: true,
    },

    tercerTrimestre: {
      type: Number,
      required: true,
    },

    promedio: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Nota", NotaSchema);