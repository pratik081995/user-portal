import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent, EditUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: []
})

export class UserModule { }
