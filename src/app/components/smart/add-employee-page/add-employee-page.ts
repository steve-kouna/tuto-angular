import { Component, inject } from '@angular/core';
import { EmployeeForm } from '../../ui/employee-form/employee-form';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';
import { EmployeeService } from '../../../services/employeeService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-page',
  imports: [EmployeeForm],
  templateUrl: './add-employee-page.html',
  styleUrl: './add-employee-page.scss',
})
export class AddEmployeePage {
  employeeService = inject(EmployeeService);
  router = inject(Router);
  onAddEmployee(employee: EmployeeInterface) {
    console.log('Employee to add:', employee);
    this.employeeService.addEmployee(employee);
    this.router.navigate(['/employees']);
  };
}
