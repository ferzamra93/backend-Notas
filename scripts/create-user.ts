import "dotenv/config";

import inquirer from "inquirer";
import chalk from "chalk";
import bcrypt from "bcrypt";

import { connectDB } from "../src/database/connection";
import Estudiante from "../src/database/models/Estudiante";


async function createEstudiante() {
  try {

    await connectDB();

    console.log(
      chalk.yellow("=== Crear Estudiante ===")
    );


    const questions = [
      {
        type: "input",
        name: "nombre",
        message: "Nombre:",
      },
      {
        type: "input",
        name: "apellido",
        message: "Apellido:",
      },
      {
        type: "input",
        name: "curso",
        message: "Curso:",
      },
      {
        type: "input",
        name: "carnet_identidad",
        message: "Carnet de identidad:",
      },
      {
        type: "password",
        name: "password",
        message: "Contraseña:",
        mask: "*",
      },
    ];

    const answers = await inquirer.prompt(questions);



    const existe = await Estudiante.findOne({
      carnet_identidad: answers.carnet_identidad,
    });

    if (existe) {
      console.log(
        chalk.red(
          "❌ Ya existe un estudiante con ese carnet."
        )
      );

      process.exit(1);
    }


    const hashedPassword = await bcrypt.hash(
      answers.password,
      10
    );

    const estudiante = await Estudiante.create({
      nombre: answers.nombre,
      apellido: answers.apellido,
      curso: answers.curso,
      carnet_identidad: answers.carnet_identidad,
      password: hashedPassword,
    });

    console.log(
      chalk.green(
        `✅ Estudiante creado: ${estudiante.nombre}`
      )
    );

    process.exit(0);

  } catch (error) {
    console.error(
      chalk.red("❌ Error creando estudiante"),
      error
    );

    process.exit(1);
  }
}

createEstudiante();