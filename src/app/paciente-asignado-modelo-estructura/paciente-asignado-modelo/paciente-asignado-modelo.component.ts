import { Component, OnInit,Input } from '@angular/core';
import { DiagnosticosActivosComponent } from '../diagnosticos-activos/diagnosticos-activos.component';
import { AlertasAdministracionPacienteComponent } from '../alertas-administracion-paciente/alertas-administracion-paciente.component';
import { CancelarModeloComponent } from '../cancelar-modelo/cancelar-modelo.component';
import { MatDialog } from '@angular/material/dialog';

import {pacienteAsignados} from '../../filtros/interfacesFiltros';
import {DataServiceService} from '../../services/data-service.service';
@Component({
  selector: 'app-paciente-asignado-modelo',
  templateUrl: './paciente-asignado-modelo.component.html',
  styleUrls: ['./paciente-asignado-modelo.component.css']
})
export class PacienteAsignadoModeloComponent implements OnInit {

   filtros : pacienteAsignados[];


  panelOpenState = false;

  constructor(public dialog: MatDialog, public dataServiceService : DataServiceService) {

  }

  ngOnInit() {
    this.dataServiceService.datosObservable.subscribe(pacientesAsig =>{
      this.filtros = pacientesAsig;
  })
}

  expandPanel(matExpansionPanel, event): void {
    event.stopPropagation(); 
    
    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.close(); 
    }
  }

  closeOpened(matExpansionPanel, event): void {
    event.stopPropagation(); 
    
    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.open(); 
    }
  }
  
  private _isExpansionIndicator(target: EventTarget): boolean {
    const expansionIndicatorClass = 'mat-expansion-indicator';

    return (target['classList'] && target['classList'].contains(expansionIndicatorClass) );
  }

  openDiagnosticoActivosDialog(): void {
    const dialogRef = this.dialog.open(DiagnosticosActivosComponent, {
    });
  }

  openAlertasAdministrativasDialog(): void {
    const dialogRef = this.dialog.open(AlertasAdministracionPacienteComponent, {
    });
  }

  openCancelarModeloDialog(): void {
    const dialogRef = this.dialog.open(CancelarModeloComponent, {
    });
  }
}
