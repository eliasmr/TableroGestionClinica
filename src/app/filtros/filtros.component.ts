import { Component, OnInit,Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { listas} from './listas';
import {filtros} from './filtrosBusqueda';

import {mAT_DATE_LOCALE,DateAdapte,momentDateAdapter,mAT_MOMENT_DATE_ADAPTER_OPTIONS,mAT_DATE_FORMATS,mAT_MOMENT_DATE_FORMATS} from './date-picker-formate'
import {DataServiceService} from '../services/data-service.service'


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css'],
  providers: [
    {provide: mAT_DATE_LOCALE, useValue: 'es'},
    {
      provide: DateAdapte,
      useClass: momentDateAdapter,
      deps: [mAT_DATE_LOCALE, mAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: mAT_DATE_FORMATS, useValue: mAT_MOMENT_DATE_FORMATS},
    ]
})
export class FiltrosComponent implements OnInit {
  public filtro : filtros = new filtros();
   pacientesAsignados = new listas();
  public lista : listas = new listas();
  form = new FormGroup({
    ltsEsAdm: new FormControl(this.lista.LstestructuraAdministrativa),
    ltsRes: new FormControl(this.lista.Lstresponsable),
    ltsEsp: new FormControl(this.lista.Lstespacialidad),
  });
  
  constructor(private dataServiceService : DataServiceService) { 
  }
  
  ngOnInit() {
    this.dataServiceService.datosObservable.subscribe(pacientesAsig =>{
      this.pacientesAsignados.listaPacientesAsignados = pacientesAsig;
  })
  }

  filtros(){
    this.filtro.listaSelect = this.form.value;
    this.dataServiceService.datos(this.pacientesAsignados.listaPacientesAsignados)
  }

 
}
