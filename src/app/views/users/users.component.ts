import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pagina } from 'src/app/models/pagina';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pagina: Pagina;

  constructor(private usrSrv: UserService) {
    this.usrSrv.pagina.subscribe(data => this.pagina = data);
  }

  ngOnInit() {
    this.usrSrv.getUsers(1);
  }

  accion(args: any) {
    console.log(args)
  }

  onPageChange(page: number){
    this.usrSrv.getUsers(page);
  }

}
