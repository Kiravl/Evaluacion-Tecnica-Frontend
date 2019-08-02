import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  @Input() users: User[];
  @Output() accion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirAccion($event: MouseEvent, tipo: string, id: number) {
    this.accion.emit({tipo: tipo, id: id});
    $event.preventDefault();
  }

}