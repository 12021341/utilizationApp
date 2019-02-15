import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCheckboxModule, MatSlideToggleModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { PagesComponent } from './pages/pages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { RepositoryService } from './shared/repository.service';
import { UtilizationComponent } from './utilization/utilization.component';
import { TaskComponent } from './task/task.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateTaskComponent } from './task/task.component';
import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewEmployeeComponent } from './dashboard/view-employee.component';
import { EmployeeService } from './services/employee.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'utilization', component: UtilizationComponent},
  { path: 'task', component: TaskComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'view-employee', component: ViewEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PagesComponent,
    NavigationComponent,
    UtilizationComponent,
    TaskComponent,
    ReportsComponent,
    CreateTaskComponent,
    ScheduleComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule, 
    MatInputModule, 
    MatSelectModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HighchartsChartModule,
    HttpClientModule,
    // MatDialog,
    SharedModule,
    ChartModule
  ],
  entryComponents: [CreateTaskComponent],
  providers: [RepositoryService, EmployeeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
