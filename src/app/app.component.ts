import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';
import { tipoSeccion } from './modelo/tipo-seccion';
import { RegistroHistorial } from './modelo/registro-historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnos : Array<Alumno> = [
  {
    rut: '18794009-5',
    nombre: 'Jesus',
    apellido: 'Zarate',
    edad: 28,
    seccion: {
      id: 1
    }
  },
  {
    rut: '11111111-1',
    nombre: 'AA',
    apellido: 'BB',
    edad: 18,
    seccion: {
      id: 2
    }
  }

  ];


  public secciones : Array<tipoSeccion> = [
    {
      id: 1,
      nombre: '001D'
    },
    {
      id: 2,
      nombre: '002D'
    },
    {
      id: 3,
      nombre: '003D'
    },
    {
      id: 4,
      nombre: '004D'
    }
    ];

    public guardarNuevoAlumno(alumno: Alumno ): void {
      const id = this.alumnos.length +1;
      alumno.id = id;
      this.alumnos.push(alumno);
    }

    public guardarNuevoSeccion(seccion: tipoSeccion ): void {
      const id = this.secciones.length +1;
      seccion.id = id;
      this.secciones.push(seccion);
    }
}
