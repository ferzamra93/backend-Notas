import { Schema, model } from "mongoose";

const MateriaSchema = new Schema(
  {
    nombreMateria: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Materia", MateriaSchema);