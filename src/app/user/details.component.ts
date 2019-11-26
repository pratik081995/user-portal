import { User } from './user.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'detail-user',
    templateUrl: 'details.component.html'
})
export class DetailsComponent {
    user = new User('Steve', 20000);
    msg: string = 'Hello';

    onFormSubmit(userForm: NgForm) {
        let name = userForm.controls['name'].value;
        let salary = userForm.controls['salary'].value;
        this.user = new User(name, salary);
    }
}
