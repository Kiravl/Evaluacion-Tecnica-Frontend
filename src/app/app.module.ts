import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './views/users/users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { PaginationUsersComponent } from './components/pagination-users/pagination-users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResponseComponent } from './components/user-response/user-response.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableUsersComponent,
    PaginationUsersComponent,
    UserEditComponent,
    UserResponseComponent,
    UserViewComponent,
    UserDeleteComponent
  ], entryComponents: [
    UserEditComponent,
    UserResponseComponent,
    UserViewComponent,
    UserDeleteComponent
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ], providers: [
    NgbActiveModal
  ], bootstrap: [AppComponent]
})
export class AppModule { }
