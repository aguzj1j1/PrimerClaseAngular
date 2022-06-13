import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses : Course[] =[{
    nombre:'react',
    duracion:'3 meses',
    profesor:"prueba 1",
    fechaInicio:'21/02/2023'
  },{nombre:'react',
  duracion:'3 meses',
  profesor:"prueba 1",
  fechaInicio:'21/02/2023'
  }
]
  constructor() { }
  getCourses():Observable<Course[]>{
    return of(this.courses);
  }
}
