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
  getStudentsById(id: Number): Observable<Student> {
    return of(this.students.filter((us) => us.id == id)[0]);
  }
  updateStudent(student: Student): Observable<Student[]> {
    debugger;
    this.students[this.students.findIndex((i) => (i.email = student.email))] = student;
    return of(this.students);
  }
  addStudent(student: Student): Observable<Student[]> {
    this.students.push(student);
    return of(this.students);
  }
  deleteStudent(id :number): Observable<Student[]> {
    this.students = this.students.filter(actual => actual.id != id);
    return of(this.students);
  }

}
