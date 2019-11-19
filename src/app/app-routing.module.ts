import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'users', loadChildren : () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
