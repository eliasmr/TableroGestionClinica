import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-suspender-modelo',
  templateUrl: './suspender-modelo.component.html',
  styleUrls: ['./suspender-modelo.component.css']
})
export class SuspenderModeloComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<''>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
