import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroGestionClinicaComponent } from './tablero-gestion-clinica/tablero-gestion-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacienteAsignadoModeloComponent } from './paciente-asignado-modelo/paciente-asignado-modelo.component';
import { FiltrosComponent } from './filtros/filtros.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

const modules = [
  BrowserAnimationsModule,
  MatRadioModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule
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

    PacienteAsignadoModeloComponent,

    FiltrosComponent
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
    FiltrosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
