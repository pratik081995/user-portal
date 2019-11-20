import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
    { path: 'details', component:DetailsComponent},
    { path: 'add-user', component: AddUserComponent },
    { path: 'list-user', component: ListUserComponent },
    { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class UserRoutingModule { }