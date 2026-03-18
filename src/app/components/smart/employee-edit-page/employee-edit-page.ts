import { Component, inject, input, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EmployeeService } from '../../../services/employeeService';
import { Employee } from '../../ui/employee/employee';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';
import { EmployeeForm } from '../../ui/employee-form/employee-form';

@Component({
  selector: 'app-employee-edit-page',
  imports: [Employee, EmployeeForm],
  templateUrl: './employee-edit-page.html',
  styleUrl: './employee-edit-page.scss',
})
export class EmployeeEditPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  employeeService = inject(EmployeeService);
  employeeDetails: EmployeeInterface = {} as EmployeeInterface;

  id = input();

  constructor() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.route.params
      .pipe(
        map((params) => {
          const id = params['id'];
          return this.employeeService.getEmployeeById(id);
        }),
        takeUntilDestroyed(),
      )
      .subscribe({
        next: (employee) => {
          this.employeeDetails = <EmployeeInterface>employee;
          console.log(this.employeeDetails);
        },
        error: (error) => {
          console.error('Error fetching employee:', error);
        },
      });
  }

  onEditEmployee(employee: EmployeeInterface) {
    this.employeeService.updateEmployee(employee);
    this.router.navigate(['/employees']);
  };
}
