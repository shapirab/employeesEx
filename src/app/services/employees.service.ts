import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  //employees : Employee[];
  private _url = '/assets/data/employees.json';
  constructor(private http: HttpClient) {
    // this.employees = [
    //   {id: 1, name: 'Benjamin Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'},
    //   {id: 2, name: 'Danny Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'},
    //   {id: 1, name: 'Liora Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'}
    // ]
  }

  getAll(): Observable<Employee[]> {
    //return this.employees;
    return this.http.get<Employee[]>(this._url);
  }

  getByID(id:number):Observable<any>{
    let url = `${this._url}/${id}`;
    return this.http.get<Employee>(url);
  }
}
