import { Component, EventEmitter, Output } from '@angular/core';
import { tipoSeccion } from 'src/app/modelo/tipo-seccion';
import { Alumno } from './../../modelo/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {

  @Output() public alumno = new EventEmitter<Alumno>();

  public newAlumno: Alumno = {
    rut:'',
    nombre: '',
    apellido: '',
    edad: 1,
    seccion: {
      nombre: ''
    }
  }

  public cambiarRut(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.newAlumno.rut = elemento.value;
  }

  public cambiarNombre(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.newAlumno.nombre = elemento.value;
  }

  public cambiarApellido(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.newAlumno.apellido = elemento.value;
  }

  public cambiarEdad(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.newAlumno.edad = Number.parseInt(elemento.value);
  }

  public cambiarTipoSeccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.newAlumno.seccion = elemento.value as tipoSeccion ;
  }

  public guardarElemento():void{
    const copia: Alumno = {
      ...this.newAlumno
    };
    this.alumno.emit(copia);
    this.newAlumno.rut = '';
    this.newAlumno.nombre = '';
    this.newAlumno.apellido = '';
    this.newAlumno.edad = 1;
    this.newAlumno.seccion.id = ; //falta completar aquí.
  }


}
