import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alertas-administracion-paciente',
  templateUrl: './alertas-administracion-paciente.component.html',
  styleUrls: ['./alertas-administracion-paciente.component.css']
})
export class AlertasAdministracionPacienteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
