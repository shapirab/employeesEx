import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  id:any;
  employeeOfTheMonth: Employee;
  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeesService.getAll()
                .subscribe(employees => this.employees = employees);
    // this.employeesService.getByParams()
    //             .subscribe(data => console.log(data));
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    //This throws an error because my url is the json file, not a real address.
    //In a real service, the get request can search for a single entry, but
    //the json file cannot do that. TODO: Check the chatGPT conversation I had on this.
    this.employeesService.getByID(this.id)
              .subscribe(emp => console.log(emp));
  }

  showEmployee(employee: Employee){
    console.log(employee);
  }
}
