import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroGestionClinicaComponent } from './tablero-gestion-clinica/tablero-gestion-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacienteAsignadoModeloComponent } from './paciente-asignado-modelo-estructura/paciente-asignado-modelo/paciente-asignado-modelo.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { DiagnosticosActivosComponent } from './paciente-asignado-modelo-estructura/diagnosticos-activos/diagnosticos-activos.component';
import { PacienteAsignadoModeloBusquedaComponent } from './paciente-asignado-modelo-estructura/paciente-asignado-modelo-busqueda/paciente-asignado-modelo-busqueda.component';
import { AlertasAdministracionPacienteComponent } from './paciente-asignado-modelo-estructura/alertas-administracion-paciente/alertas-administracion-paciente.component';
import { CancelarModeloComponent } from './paciente-asignado-modelo-estructura/cancelar-modelo/cancelar-modelo.component';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from './MaterialModule';


const modules = [
  BrowserAnimationsModule
];
const routes: Routes = [
  { path: 'Tablero/Gestion/Clinica', component: TableroGestionClinicaComponent, pathMatch: 'full' },  
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})export class Modules {};

@NgModule({
  declarations: [
    AppComponent,
    TableroGestionClinicaComponent,
    DiagnosticosActivosComponent,
    PacienteAsignadoModeloComponent,
    FiltrosComponent,
    PacienteAsignadoModeloBusquedaComponent,
    AlertasAdministracionPacienteComponent,
    CancelarModeloComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Modules,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  entryComponents: [
    TableroGestionClinicaComponent,
    PacienteAsignadoModeloComponent,
    DiagnosticosActivosComponent,
    FiltrosComponent,
    PacienteAsignadoModeloBusquedaComponent,
    AlertasAdministracionPacienteComponent,
    CancelarModeloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));