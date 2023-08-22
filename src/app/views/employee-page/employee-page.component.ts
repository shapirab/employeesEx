import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  @Input() employee: Employee | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
