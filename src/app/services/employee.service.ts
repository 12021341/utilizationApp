import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Employee } from '../interface/employee.models';
import { Observable, of, throwError, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }

    private baseUrl: string = 'http://localhost:3000/';
    private serviceUrl: string = 'http://localhost:3000/Employees';
    private postServiceUrl = 'http://localhost:3000/Employees';

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
    getUser(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.serviceUrl);
    }

    addUser(employee): Observable<Employee[]> {
        return this.http.post<Employee[]>(this.postServiceUrl, employee);
    }

    updateUser(employee): Observable<Employee[]> {
        return this.http.put<Employee[]>(this.baseUrl + "/" + employee.id, employee);
    }

    deleteUser(id: string) {
        return this.http.delete(this.postServiceUrl + "/" + id)
            .subscribe(res => console.log("successfully deleted ", id));
    }


}