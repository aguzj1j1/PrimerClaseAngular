import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[] = [
    {
      nombre: 'react',
      duracion: '3 meses',
      profesor: 'prueba 1',
      fechaInicio: '21/02/2023',
      id:1
    },
    {
      nombre: 'react',
      duracion: '3 meses',
      profesor: 'prueba 1',
      fechaInicio: '21/02/2023',
      id:2
    },
  ];
  constructor() {}
  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
  getCourseById(id:number): Observable<Course> {
    return of(this.courses.filter((actual) => actual.id==id)[0]);
  }
  addCourse(course:Course): Observable<Course[]> {
    this.courses.push(course)
    return of(this.courses);
  }
  updateCourse(course:Course): Observable<Course[]>{
    this.courses[this.courses.findIndex((i) => (i.id = course.id))] = course;
    return of(this.courses);
  }
  deleteCourseByCourseId(id:number): Observable<Course[]>{
    this.courses = this.courses.filter(actual=> actual.id!= id)
    return of(this.courses);
  }
}
