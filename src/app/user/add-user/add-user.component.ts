import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  submitted: boolean = false;
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
      mobileNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['users/list-user']);
      });
    if (this.submitted = true)
      alert("User added successfully");
  }
}

