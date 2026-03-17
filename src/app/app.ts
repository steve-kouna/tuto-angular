import { Component, inject, signal } from '@angular/core';
import { Employee } from './components/ui/employee/employee';
import { EmployeeInterface } from './models/EmployeeInterface.model';
import { EmployeeList } from './components/ui/employee-list/employee-list';
import { EmployeeService } from './services/employeeService';

@Component({
  selector: 'app-root',
  providers: [EmployeeService],
  imports: [EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  employees: EmployeeInterface[] = [];
  employeeService = inject(EmployeeService);

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  onEdit(id: String) {
    console.log('Edit employee with id:', id);
  }

  onDelete(id: String) {
    console.log('Delete employee with id:', id);
    this.employees = this.employeeService.deleteEmployee(id);
  };
}
