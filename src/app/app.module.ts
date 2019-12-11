import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
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

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



const modules = [
  BrowserAnimationsModule,
  MatRadioModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule
];
const routes: Routes = [
  { path: 'Tablero/Gestion/Clinica', component: TableroGestionClinicaComponent, pathMatch: 'full' },  
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})export class MaterialModule {};

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
    MaterialModule,
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
