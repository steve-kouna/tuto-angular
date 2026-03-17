import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../models/EmployeeInterface.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: EmployeeInterface[] = [
    {
      _id: '69b8abe67d15fe99c8008ece',
      name: 'Patricia Mercer',
      department: 'Marketing',
      level: 'M',
    },
    {
      _id: '69b8abe6e886a0a1960de576',
      name: 'Oconnor Barnes',
      department: 'IT',
      level: 'J',
    },
    {
      _id: '69b8abe68744911deae6fbca',
      name: 'Coleman Francis',
      department: 'HR',
      level: 'M',
    },
    {
      _id: '69b8abe68c3da72760c0678f',
      name: 'Nora Leblanc',
      department: 'HR',
      level: 'S',
    },
    {
      _id: '69b8abe633a389b1be1329c7',
      name: 'Mcmahon Velez',
      department: 'HR',
      level: 'J',
    },
    {
      _id: '69b8abe65428aecfd9c6067a',
      name: 'Lamb Jones',
      department: 'Marketing',
      level: 'J',
    },
    {
      _id: '69b8abe662095b110f289427',
      name: 'Sheryl Sawyer',
      department: 'HR',
      level: 'M',
    },
  ];

  constructor() {}

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: String) {
    return this.employees.find(employee => employee._id === id);
  }

  deleteEmployee(id: String) {
    return this.employees = this.employees.filter(employee => employee._id !== id);
  }
}
