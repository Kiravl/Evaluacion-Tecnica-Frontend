import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() id: number;
  data = {};

  constructor(private usrSrv: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.usrSrv.getUser(this.id).then(data => this.data = data);
  }

}
