import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnoComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    HistorialComponent,
    AlumnoComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
