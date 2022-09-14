import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../modelo/alumno';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent  {

  @Input() public listaAlumno!: Array<Alumno>;

}
