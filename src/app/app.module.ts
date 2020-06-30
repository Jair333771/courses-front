import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCalendarComponent } from './modules/dashboard/dashboard-calendar/dashboard-calendar.component';
import { DashboardChartsComponent } from './modules/dashboard/dashboard-charts/dashboard-charts.component';
import { DashboardContentComponent } from './modules/dashboard/dashboard-content/dashboard-content.component';
import { SidebarListComponent } from './modules/sidebar/sidebar-list/sidebar-list.component';
import { SidebarUserComponent } from './modules/sidebar/sidebar-user/sidebar-user.component';
import { HeaderNavComponent } from './modules/header/header-nav/header-nav.component';
import { ListCoursesComponent } from './modules/pages/courses/list-courses/list-courses.component';
import { ListUsersComponent } from './modules/pages/users/list-users/list-users.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import  { RestSerivesService } from './services/rest-serives.service';
import { EditUserComponent } from './modules/pages/users/edit-user/edit-user.component';
import { EditCourseComponent } from './modules/pages/courses/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCalendarComponent,
    DashboardChartsComponent,
    DashboardContentComponent,
    SidebarListComponent,
    SidebarUserComponent,
    HeaderNavComponent,
    ListCoursesComponent,
    ListUsersComponent,
    DashboardComponent,
    EditUserComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestSerivesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
