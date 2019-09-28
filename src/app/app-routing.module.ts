import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'admindash', component: AdminDashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
