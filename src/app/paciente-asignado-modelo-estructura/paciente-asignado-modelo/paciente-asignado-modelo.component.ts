import { Component, OnInit } from '@angular/core';
import { DiagnosticosActivosComponent } from '../diagnosticos-activos/diagnosticos-activos.component';
import { AlertasAdministracionPacienteComponent } from '../alertas-administracion-paciente/alertas-administracion-paciente.component';
import { CancelarModeloComponent } from '../cancelar-modelo/cancelar-modelo.component';
import { SuspenderModeloComponent } from '../suspender-modelo/suspender-modelo.component';
import { ReiniciarModeloComponent } from '../reiniciar-modelo/reiniciar-modelo.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-paciente-asignado-modelo',
  templateUrl: './paciente-asignado-modelo.component.html',
  styleUrls: ['./paciente-asignado-modelo.component.css']
})
export class PacienteAsignadoModeloComponent implements OnInit {

  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  /**
  panels = [
    {
    title: 'panel 1',
    content: 'content 1'
  },
  {
    title: 'panel 2',
    content: 'content 2'
  },
  ] */

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

  openSuspenderModeloDialog(): void {
    const dialogRef = this.dialog.open(SuspenderModeloComponent, {
    });
  }

  openReiniciarModeloDialog(): void {
    const dialogRef = this.dialog.open(ReiniciarModeloComponent, {
    });

  }
}
