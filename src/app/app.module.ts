import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroGestionClinicaComponent } from './tablero-gestion-clinica/tablero-gestion-clinica.component';
const modules = [
  
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
    TableroGestionClinicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  entryComponents: [
    TableroGestionClinicaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
