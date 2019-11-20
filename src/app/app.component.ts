import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-registration';
  routerLinkList ="/users/list-user";
  routerLinkAdd = "/users/add-user";
  routerLinkLog ="/users/details";

}
