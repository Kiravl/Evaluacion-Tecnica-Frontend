import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Input() id: number;
  data = {};

  constructor(private usrSrv: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.usrSrv.getUser(this.id).then(data => this.data = data);
  }

  delete() {
    this.usrSrv.updateUser({id: this.id, fchtermino: new Date()})
      .subscribe(data => this.activeModal.close());
  }

}