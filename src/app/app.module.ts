import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroGestionClinicaComponent } from './tablero-gestion-clinica/tablero-gestion-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacienteAsignadoModeloComponent } from './paciente-asignado-modelo/paciente-asignado-modelo.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

const modules = [
  MatExpansionModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule
];
const routes: Routes = [
  { path: 'Tablero/Gestion/Clinica', component: TableroGestionClinicaComponent, pathMatch: 'full' },  
];
@NgModule({
  imports: [...modules, BrowserAnimationsModule],
  exports: [...modules],
  declarations: []
})export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    TableroGestionClinicaComponent,
    PacienteAsignadoModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  entryComponents: [
    TableroGestionClinicaComponent,
    PacienteAsignadoModeloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
