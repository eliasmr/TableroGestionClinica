import { Injectable } from '@angular/core';
import {pacienteAsignados} from '../filtros/interfacesFiltros';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  pacientesAsignados : pacienteAsignados[];
  private modals: any[] = [];

  private datosService = new Subject<pacienteAsignados[]>();
  datosObservable = this.datosService.asObservable();
  constructor() { 
  
  }
  datos(pacientesAsignados: pacienteAsignados[]){
    this.pacientesAsignados = pacientesAsignados;
    this.datosService.next(pacientesAsignados);
  }
  open(id: string) {
    const modal = this.modals.find(x => x.id === id);
    modal.open();
    }

}

