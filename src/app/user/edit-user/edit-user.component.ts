import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    const userId = window.localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['users/list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      mobileNumber: ['', Validators.required],
    });
    this.userService.getUserById(+userId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['users/list-user']);
        },
        error => {
          alert(error);
        });
  }
}

