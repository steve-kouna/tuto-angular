import { Routes } from '@angular/router';
import { EmployeeListPage } from './components/smart/employee-list-page/employee-list-page';
import { EmployeeEditPage } from './components/smart/employee-edit-page/employee-edit-page';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListPage },
  { path: 'employees/edit/:id', component: EmployeeEditPage},
  { path: '', redirectTo: '/employees', pathMatch: 'full'}
];
