import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Employee } from '../employee/employee';
import { EmployeeInterface } from '../../../models/EmployeeInterface.model';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  private fb = inject(FormBuilder);
  @Output() addEmployeeEvent = new EventEmitter<EmployeeInterface>();
  @Output() editEmployeeEvent = new EventEmitter<EmployeeInterface>();
  @Input() detailEmployee = {} as EmployeeInterface;

  form  = this.fb.group({
    _id:  '', // new FormControl(''),
    name: ['', [Validators.required, Validators.maxLength(30)]], // new FormControl('', [Validators.required, Validators.maxLength(30)]),
    department: ['', Validators.required], // new FormControl('', Validators.required),
    level: ['', Validators.required], // new FormControl('', Validators.required),
  });

  onSubmit() {
    const {_id, name, department, level} = this.form.value;
    const employee = { _id, name, department, level };
    console.log(employee);
    if (employee._id !== null) {
      this.editEmployeeEvent.emit(employee as EmployeeInterface);
      return;
    }
    this.addEmployeeEvent.emit(employee as EmployeeInterface);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['detailEmployee'].currentValue !== changes['detailEmployee'].previousValue) {
      this.form.patchValue(this.detailEmployee);
    }
  }
}
