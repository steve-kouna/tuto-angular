import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';
import { LevelPipe } from '../../../pipes/level-pipe';

@Component({
  selector: 'app-employee',
  imports: [LevelPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  @Input() employee!: EmployeeInterface;
  @Output() nameClick = new EventEmitter<String>();

  onNameClick(id: String) {
    this.nameClick.emit(id);
  }
}
