import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './views/employees/employees.component';

const routes: Routes = [
  {path: 'views/employees', component: EmployeesComponent },
  {path: '', redirectTo: '/views/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
