import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentGradesComponent } from './student-grades/student-grades.component'; //TODO: 
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { StudentCanvasComponent } from './student-canvas/student-canvas.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'canvas', component: StudentCanvasComponent },
  { path: 'admindash', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'studentgradesdash', component: StudentGradesComponent}, //TODO: 
  { path: 'studentdash', component: StudentDashboardComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
