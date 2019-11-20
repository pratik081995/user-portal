import { User } from './user.model';
import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';


@Component({
    selector: 'detail-user',
    templateUrl: 'details.component.html'
})
export class DetailsComponent {
    user = new User('Steve', 20);
    msg: string = 'Hello';

    onFormSubmit(userForm: NgForm) {
        let name = userForm.controls['name'].value;
        let age = userForm.controls['age'].value;
        this.user = new User(name, age);
    }
}
