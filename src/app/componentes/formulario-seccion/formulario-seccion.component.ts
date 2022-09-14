import { Component, EventEmitter, Output } from '@angular/core';
import { tipoSeccion } from '../../modelo/tipo-seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {

  @Output() public seccion = new EventEmitter<tipoSeccion>();

  public newSeccion: tipoSeccion = {
     nombre: ''
    }

    public cambiarNombre(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.newSeccion.nombre = elemento.value;
    }

    public guardarElemento():void{
      const copia: tipoSeccion = {
        ...this.newSeccion
      };
      this.seccion.emit(copia);
      this.newSeccion.nombre = '';
    }

}
