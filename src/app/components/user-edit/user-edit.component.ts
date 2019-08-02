import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() id: number;
  titulo: string = "Nuevo";
  formulario = this.fb.group({
    id: [this.id],
    nombre: ['', [Validators.required]],
    apellidopat: ['', [Validators.required]],
    apellidomat: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    fchnac: ['', [Validators.required]],
    fchingreso: [new Date(), [Validators.required]],
  });

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private usrSrv: UserService) { }

  ngOnInit() {
    if (this.id > 0) this.titulo = "Editar";
    this.usrSrv.getUser(this.id).then(data => {
      this.formulario.patchValue(data);
    }).catch(error => console.log(error))
  }

  send() {
    console.log(this.formulario)
    this._send().subscribe(data => this.activeModal.close(data));
  }

  private _send() {
    if (this.id > 0)
      return this.usrSrv.updateUser(this.formulario.value);
    else
      return this.usrSrv.createUser(this.formulario.value);
  }

}