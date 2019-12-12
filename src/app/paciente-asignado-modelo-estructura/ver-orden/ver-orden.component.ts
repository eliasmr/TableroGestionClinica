import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-orden',
  templateUrl: './ver-orden.component.html',
  styleUrls: ['./ver-orden.component.css']
})
export class VerOrdenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
