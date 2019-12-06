import { Component, OnInit } from '@angular/core';

import { list} from './interfacesFiltros';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  favoriteSeason: string;
  seleccionados: string;
  radioButtonPacientes: string[] = [
    'Pacientes asignados a un modelo',
    'Pacientes agendados para una fecha',
    'Pacientes por agendar'];
  list: list[] = [
    { value: 1, nombre: 'sede centro' },
    { value: 2, nombre: 'sede centro' },
    { value: 2, nombre: 'sede centro' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
