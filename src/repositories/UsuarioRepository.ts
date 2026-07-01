import Estudiante from "../database/models/Estudiante";
import bcrypt from "bcrypt";

export default class EstudianteRepository {


  async getAll() {
    return await Estudiante.find();
  }

 
  async getById(id: string) {
    return await Estudiante.findById(id);
  }

 
  async create(data: any) {
    return await Estudiante.create(data);
  }

  async update(id: string, data: any) {
    return await Estudiante.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

 
  async delete(id: string) {
    return await Estudiante.findByIdAndDelete(id);
  }
   async getAuthByCarnet(carnet: string) {
    return await Estudiante.findOne({
      carnet_identidad: carnet,
    }).select("+password");
  }

  async comparePassword(plain: string, hash: string) {
    return await bcrypt.compare(plain, hash);
  }


}