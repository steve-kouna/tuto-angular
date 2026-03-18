import { Component } from '@angular/core';
import { EmployeeService } from './services/employeeService';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [EmployeeService],
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  usernameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  isMajorCtrl = new FormControl(true);
  // data = {
  //   username: '',
  //   isMajor: true
  // };

  form = new FormGroup({
    username: this.usernameCtrl,
    isMajor: this.isMajorCtrl
  })
}
