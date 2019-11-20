import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  loginForm: any = {};

  constructor(private router: Router) { }

  onSubmit() {
    if (this.loginForm.email == 'pratik@gmail.com' && this.loginForm.password == 'pra@123') {
      this.router.navigate(['users/list-user']);
    }
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm.email = '';
    this.loginForm.password = '';
  }
}

