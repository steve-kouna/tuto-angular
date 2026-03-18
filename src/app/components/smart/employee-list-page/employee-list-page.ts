import { Component, inject } from '@angular/core';
import { EmployeeList } from '../../ui/employee-list/employee-list';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';
import { EmployeeService } from '../../../services/employeeService';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../ui/employee/employee';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeList, Employee],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.scss',
})
export class EmployeeListPage {
  employees: EmployeeInterface[] = [];
  employeeService = inject(EmployeeService);
  router = inject(Router);

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  onEdit(id: String) {
    this.router.navigate([`employees/edit/${id}`]);
  }

  onDelete(id: String) {
    this.employees = this.employeeService.deleteEmployee(id);
  }

  onAddEmployee() {
    this.router.navigate([`employees/new`]);
  }


}
