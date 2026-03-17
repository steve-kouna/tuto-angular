import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeInterface } from '../models/EmployeeInterface.model';
import { LevelPipe } from '../pipes/level-pipe';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-list',
  imports: [LevelPipe, Employee],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList {
  @Input() employees: EmployeeInterface[] = [];
  @Output() edit = new EventEmitter<String>();
  @Output() delete = new EventEmitter<String>();
  employeeDetails: EmployeeInterface = {} as EmployeeInterface;
  showDetails: boolean = false;

  onEditEmployee(employee: EmployeeInterface) {
    this.showDetails = !this.showDetails;
    this.employeeDetails = employee;
  }

  onDeleteEmployee(id: String) {
    this.delete.emit(id);
  }

  onDetailsEmployee(id: String) {
    this.edit.emit(id);
  };
}
