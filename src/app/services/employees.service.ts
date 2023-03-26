import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees : Employee[];
  constructor(private http: HttpClient) {
    this.employees = [
      {id: 1, name: 'Benjamin Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'},
      {id: 2, name: 'Danny Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'},
      {id: 1, name: 'Liora Shapira', phone: '050-8296483', email: 'maale.conservatory.dir@gmail.com'}
    ]
  }

  getAll(){
    return this.employees;
  }

  getById(id: number) {
    return this.employees.find(employee => employee.id === id);
  }
}
