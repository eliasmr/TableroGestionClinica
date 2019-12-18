import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-datos-demograficos',
  templateUrl: './datos-demograficos.component.html',
  styleUrls: ['./datos-demograficos.component.css']
})
export class DatosDemograficosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
