import { Injectable } from '@angular/core';
import {pacienteAsignados} from '../filtros/interfacesFiltros';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  pacientesAsignados : pacienteAsignados[];

  private datosService = new Subject<pacienteAsignados[]>();
  datosObservable = this.datosService.asObservable();
  constructor() { 
  
  }
  datos(pacientesAsignados: pacienteAsignados[]){
    this.pacientesAsignados = pacientesAsignados;
    this.datosService.next(pacientesAsignados);
  }
}
