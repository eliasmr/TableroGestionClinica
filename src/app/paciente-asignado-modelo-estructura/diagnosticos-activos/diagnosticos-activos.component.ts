import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-diagnosticos-activos',
  templateUrl: './diagnosticos-activos.component.html',
  styleUrls: ['./diagnosticos-activos.component.css']
})
export class DiagnosticosActivosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
