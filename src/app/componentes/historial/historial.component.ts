import { Component, Input } from '@angular/core';
import { RegistroHistorial } from '../../modelo/registro-historial';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  @Input() public historial!: RegistroHistorial;
}
