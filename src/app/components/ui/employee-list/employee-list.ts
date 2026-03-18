import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';
import { LevelPipe } from '../../../pipes/level-pipe';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../../../services/employeeService';

@Component({
  selector: 'app-employee-list',
  providers: [EmployeeService],
  imports: [LevelPipe, Employee],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList {
  @Input() employees: EmployeeInterface[] = [];
  @Output() edit = new EventEmitter<String>();
  @Output() delete = new EventEmitter<String>();

  showDetails: boolean = false;

  onEditEmployee(id: String) {
    this.edit.emit(id);
  }

  onDeleteEmployee(id: String) {
    this.showDetails = false;
    this.delete.emit(id);
  }

  onDetailsEmployee(employee: EmployeeInterface) {
    this.showDetails = !this.showDetails;
  }
}
