import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {
  myData: Subscription
  users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.myData = this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  editUser(user: User): void {
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['users/edit-user']);
  }

  addUser(): void {
    this.router.navigate(['users/add-user']);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    if (this.myData) {
      this.myData.unsubscribe();
      console.log("destroy method called");
    }
  }
}





