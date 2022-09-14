import { Component, Input } from '@angular/core';
import { RegistroHistorial } from '../../modelo/registro-historial';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() public listaHistorial!: Array<RegistroHistorial>;
}
