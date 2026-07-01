import { Schema, model } from "mongoose";

const ConductaSchema = new Schema(
  {
    idEstudiante: {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
      required: true,
    },

    fecha: {
      type: Date,
      required: true,
    },

    observacion: {
      type: String,
      required: true,
    },

    puntaje: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Conducta", ConductaSchema);