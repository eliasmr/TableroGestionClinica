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
import { SuspenderModeloComponent } from './paciente-asignado-modelo-estructura/suspender-modelo/suspender-modelo.component';
import { ReiniciarModeloComponent } from './paciente-asignado-modelo-estructura/reiniciar-modelo/reiniciar-modelo.component';
import { VerOrdenComponent } from './paciente-asignado-modelo-estructura/ver-orden/ver-orden.component';
import { DatosDemograficosComponent } from './paciente-asignado-modelo-estructura/datos-demograficos/datos-demograficos.component';
import { TrazabilidadEstadosComponent } from './paciente-asignado-modelo-estructura/trazabilidad-estados/trazabilidad-estados.component';

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
    CancelarModeloComponent,
    SuspenderModeloComponent,
    ReiniciarModeloComponent,
    VerOrdenComponent,
    DatosDemograficosComponent,
    TrazabilidadEstadosComponent
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
    CancelarModeloComponent,
    SuspenderModeloComponent,
    ReiniciarModeloComponent,
    VerOrdenComponent,
    DatosDemograficosComponent,
    TrazabilidadEstadosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));