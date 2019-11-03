import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component'
import { AssignmnetViewComponent } from './assignmnet-view/assignmnet-view.component'
import { AuthGuard } from './auth/auth.guard';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StudentCanvasComponent } from './student-canvas/student-canvas.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'canvas', component: StudentCanvasComponent },
  { path: 'admindash', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'studentdash', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'teacherdash', component: TeacherDashboardComponent, canActivate: [AuthGuard] },  
  { path: 'assignmentview', component: AssignmnetViewComponent, canActivate: [AuthGuard] },
  { path: 'usersearch', component: UserSearchComponent},  
  { path: 'userdetails/:id', component: UserDetailsComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
