import { Schema, model } from "mongoose";

const EstudianteSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    apellido: {
      type: String,
      required: true,
    },

    curso: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Estudiante", EstudianteSchema);