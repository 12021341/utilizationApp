import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonForCreation } from '../interface/registration.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeService } from '../services/employee.service';
// import { DataSource } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../interface/employee.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['count', 'employee id', 'first name', 'last name', 'project', 'email', 'status', 'actions'];

  dataSource = new UserDataSource(this.employeeService);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService) { }
  ngOnInit() { }
  
  deleteUser(id){
    return this.employeeService.deleteUser(id);
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private employeeService: EmployeeService) {
    super();
  }
  connect(): Observable<Employee[]> {
    return this.employeeService.getUser();
  }
  disconnect() { }

}