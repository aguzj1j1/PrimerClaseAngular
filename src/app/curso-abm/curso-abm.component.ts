import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-curso-abm',
  templateUrl: './curso-abm.component.html',
  styleUrls: ['./curso-abm.component.scss']
})
export class CursoAbmComponent implements OnInit {
  firstFormGroup: FormGroup;
  course :Course;
  idCourse:number;
  labelButton:string;
  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute,private router:Router,private _courseService:CourseService) {
    if (this.route.snapshot.params['id']) {
      this.idCourse = this.route.snapshot.params['id'];
      this.createFormWithData();
      this.labelButton = 'Actualizar curso';
    } else {
      this.createFormEmpty();
      this.labelButton = 'Crear curso';
    }
  }

  ngOnInit(): void {

  }
  createFormWithData() {
    let actualStudent = this.getCourseById(this.idCourse);
    this.firstFormGroup = this._formBuilder.group({
      nombre: [actualStudent.nombre, Validators.required],
      fechaInicio: [this.course.fechaInicio, Validators.required],
      profesor: [this.course.profesor, Validators.required],
      duracion: [this.course.duracion, Validators.required],
    });
  }
  createFormEmpty() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      profesor: ['', Validators.required],
      duracion: ['', Validators.required],
    });
  }
  getCourseById(idCourse: number):Course {
    this._courseService.getCourseById(idCourse).subscribe((val) => {
      this.course = val;
    });
    return this.course;
  }
  guardar(){
    let course:Course={
      nombre: this.firstFormGroup.controls['nombre'].value,
      duracion: this.firstFormGroup.controls['duracion'].value,
      profesor: this.firstFormGroup.controls['profesor'].value,
      fechaInicio: this.firstFormGroup.controls['fechaInicio'].value,
      id: this.idCourse ? this.idCourse : Math.random(),
    }
    if (this.idCourse){
      this._courseService.updateCourse(course).subscribe((val) => {
        this.router.navigate(['/course/']);
      })
    }else{
      this._courseService.addCourse(course).subscribe((val) => {
        this.router.navigate(['/course/']);
      })
    }
  }
  deleteCourse(){
    this._courseService.deleteCourseByCourseId(this.idCourse).subscribe((val) => {
      this.router.navigate(['/course/']);
    })
  }

}
