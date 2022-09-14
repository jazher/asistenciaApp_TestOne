import { TipoSeccion } from "./tipo-seccion";

export interface Alumno {
  rut: string;
  nombre: string;
  apellido: string;
  edad: number;
  seccion: TipoSeccion;
}
