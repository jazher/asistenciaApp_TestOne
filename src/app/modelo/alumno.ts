import { tipoSeccion } from "./tipo-seccion";

export interface Alumno {
  id?: number;
  rut: string;
  nombre: string;
  apellido: string;
  edad: number;
  seccion: tipoSeccion;
}
