import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './modules/pages/users/list-users/list-users.component';
import { ListCoursesComponent } from './modules/pages/courses/list-courses/list-courses.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { EditCourseComponent } from './modules/pages/courses/edit-course/edit-course.component';
import { EditUserComponent } from './modules/pages/users/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/:id', component: EditUserComponent },
  { path: 'users/new', component: EditUserComponent },
  { path: 'courses', component: ListCoursesComponent },
  { path: 'courses/:id', component: EditCourseComponent },
  { path: 'courses/new', component: EditCourseComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
