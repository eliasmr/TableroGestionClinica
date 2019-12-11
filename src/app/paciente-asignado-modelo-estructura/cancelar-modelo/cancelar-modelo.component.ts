import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancelar-modelo',
  templateUrl: './cancelar-modelo.component.html',
  styleUrls: ['./cancelar-modelo.component.css']
})
export class CancelarModeloComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
