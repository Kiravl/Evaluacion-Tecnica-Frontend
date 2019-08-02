import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pagina } from 'src/app/models/pagina';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { UserResponseComponent } from 'src/app/components/user-response/user-response.component';
import { UserViewComponent } from 'src/app/components/user-view/user-view.component';
import { UserDeleteComponent } from 'src/app/components/user-delete/user-delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pagina: Pagina;

  constructor(private usrSrv: UserService, private modalService: NgbModal) {
    this.usrSrv.pagina.subscribe(data => this.pagina = data);
  }

  ngOnInit() {
    this.usrSrv.getUsers(1);
  }

  accion(args: any) {
    let modalRef: NgbModalRef;
    switch (args.tipo) {
      case 'editar': modalRef = this.modalService.open(UserEditComponent); break;
      case 'ver': modalRef = this.modalService.open(UserViewComponent); break;
      case 'eliminar': modalRef = this.modalService.open(UserDeleteComponent); break;
      default:
        break;
    }
    modalRef.componentInstance.id = args.id;
    modalRef.result.then(data => this._procesarResponse(data)).catch(error => console.log(error));
  }

  nuevo() {
    const modalRef = this.modalService.open(UserEditComponent);
    modalRef.componentInstance.id = 0;
    modalRef.result.then(data => this._procesarResponse(data)).catch(error => console.log(error));
  }

  private _procesarResponse(data) {
    if (!data || data == 'Close click') return;
    const modalRef = this.modalService.open(UserResponseComponent);
    modalRef.componentInstance.data = data;
  }

  onPageChange(page: number){
    this.usrSrv.getUsers(page);
  }

}