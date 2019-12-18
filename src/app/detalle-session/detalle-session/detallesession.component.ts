import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service'
@Component({
  selector: 'app-detallesession',
  templateUrl: './detallesession.component.html',
  styleUrls: ['./detallesession.component.css']
})
export class DetallesessionComponent implements OnInit {
public session1 : boolean = false;
form : boolean = true;
form2 : boolean = true;

constructor(private dataServiceService : DataServiceService) { 
}
  open(value : number){
  console.log(value)
  if(value == 1){
    this.form = false;
  }
  if(value == 2){
    this.form2 = false;
  }
  
  
  }
  close(value : number){

    if(value == 1){
      this.form = true
    }
    if(value == 2){
      this.form2 = true;
    }
  }
  ngOnInit() {

  }
  showModal(id) {
    console.log(id)
    this.dataServiceService.open(id);
}


}
