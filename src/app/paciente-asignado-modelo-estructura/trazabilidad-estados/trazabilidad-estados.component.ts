import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface PeriodicElement {
  estado: string;
  usuario: string;
  fechahora: string;
  proceso: string;
  obervaciones: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {estado: 'Ordenado', usuario: 'Alber Lopez Figueroa', fechahora: '01/03/2019 12:15', proceso: 'Orden Medica',obervaciones:''},
  {estado: 'Iniciado', usuario: 'Juan Piedrahita', fechahora: '14/04/2019 11:30', proceso: 'Asesoria Pretratamiento',obervaciones:''},
];

@Component({
  selector: 'app-trazabilidad-estados',
  templateUrl: './trazabilidad-estados.component.html',
  styleUrls: ['./trazabilidad-estados.component.css']
})
export class TrazabilidadEstadosComponent implements OnInit {

  displayedColumns: string[] = ['estado', 'usuario', 'fechahora', 'proceso','obervaciones'];
  dataSource = ELEMENT_DATA;

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
