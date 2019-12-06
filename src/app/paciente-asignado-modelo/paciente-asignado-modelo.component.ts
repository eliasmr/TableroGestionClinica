import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-asignado-modelo',
  templateUrl: './paciente-asignado-modelo.component.html',
  styleUrls: ['./paciente-asignado-modelo.component.css']
})
export class PacienteAsignadoModeloComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

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
    event.stopPropagation(); // Preventing event bubbling
    
    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.close(); // Here's the magic
    }
  }
  
  private _isExpansionIndicator(target: EventTarget): boolean {
    const expansionIndicatorClass = 'mat-expansion-indicator';

    return (target['classList'] && target['classList'].contains(expansionIndicatorClass) );
  }
}
