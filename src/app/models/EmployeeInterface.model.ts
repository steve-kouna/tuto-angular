import { Department } from './Department.model';
import { Level } from './Level.model';


export interface EmployeeInterface {
  _id: string;
  name: string;
  department: Department;
  level: Level;
}
