import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = [
    {
      name: 'agustin',
      lastName: 'gonzalez',
      note: 10,
      course: 'angular',
      email: 'agonzalez@gmail.com',
      aprobado: true,
      id:1
    },
    {
      name: 'leonardo',
      lastName: 'fernandez',
      note: 10,
      course: 'react',
      email: 'lfernandez@gmail.com',
      aprobado: true,
      id:2
    },
    {
      name: 'agustina',
      lastName: 'molina',
      note: 10,
      course: 'data',
      email: 'amoli@gmail.com',
      aprobado: true,
      id:3
    },
    {
      name: 'prueba',
      lastName: 'desaprobado',
      note: 4,
      course: 'angular',
      email: 'aprueba@gmail.com',
      aprobado: true,
      id:4
    },
  ];
  constructor() { }

  getStudents(): Observable<Student[]>{
    return of(this.students)
  }

}
