import { Component, Input } from '@angular/core';
import { tipoSeccion } from '../../modelo/tipo-seccion';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {

  @Input() public seccion!: tipoSeccion;

}
