import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './views/users/users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { PaginationUsersComponent } from './components/pagination-users/pagination-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableUsersComponent,
    PaginationUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
