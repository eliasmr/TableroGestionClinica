import { Component, OnInit,Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.component.html',
  styleUrls: ['./agendamiento.component.css']
})
export class AgendamientoComponent implements OnInit {
  @Input() id: string;
  private element: any;
  constructor() { }

  ngOnInit() {
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modalAgendamiento');
}
}
