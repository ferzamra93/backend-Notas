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

  carnet_identidad: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
},
{
  timestamps: true,
}
);

export default model("Estudiante", EstudianteSchema);