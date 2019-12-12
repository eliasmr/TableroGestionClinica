import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reiniciar-modelo',
  templateUrl: './reiniciar-modelo.component.html',
  styleUrls: ['./reiniciar-modelo.component.css']
})
export class ReiniciarModeloComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
