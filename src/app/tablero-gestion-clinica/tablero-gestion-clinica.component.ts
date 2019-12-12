import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero-gestion-clinica',
  templateUrl: './tablero-gestion-clinica.component.html',
  styleUrls: ['./tablero-gestion-clinica.component.css']
})
export class TableroGestionClinicaComponent implements OnInit {
  showFiller: boolean = true;
  public prueba :string ;
  constructor() { 
    this.prueba = 'TableroGestionClinicaComponent'
  }

  ngOnInit() {
  }

}
