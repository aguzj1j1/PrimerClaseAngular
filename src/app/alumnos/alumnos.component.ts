import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/students.model';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  idStudent : number;
  labelButton: String;
  students:Student;
  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute,private router:Router,private _studentsService: StudentsService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.idStudent = this.route.snapshot.params['id'];
      this.createFormWithData();
      this.labelButton = 'Actualizar usuario';
    } else {
      this.createFormEmpty();
      this.labelButton = 'Crear usuario';
    }
  }
  createFormWithData() {
    let actualStudent = this.getStudentsById(this.idStudent);
    this.firstFormGroup = this._formBuilder.group({
      nombre: [actualStudent.name, Validators.required],
      apellido: [actualStudent.lastName, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: [actualStudent.email, Validators.required],
      course: [actualStudent.course, Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      note: [actualStudent.note, Validators.required],
      aprobado: [actualStudent.aprobado, Validators.required],
    });
  }
  createFormEmpty() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: ['', Validators.required],
      course: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      note: ['', Validators.required],
      aprobado: ['', Validators.required],
    });
  }
  getStudentsById(id: Number) {
    this._studentsService.getStudentsById(id).subscribe((val) => {
      this.students = val;
    });
    return this.students;
  }
  guardar() {
    debugger;
    let actualStudent: Student;
    actualStudent = {
      name: this.firstFormGroup.controls['nombre'].value,
      lastName: this.firstFormGroup.controls['apellido'].value,
      note: this.thirdFormGroup.controls['note'].value,
      course: this.secondFormGroup.controls['course'].value,
      email: this.secondFormGroup.controls['mail'].value,
      aprobado: this.thirdFormGroup.controls['aprobado'].value,
      id: this.idStudent ? this.idStudent : Math.random(),
    };

    if (this.idStudent){

      this._studentsService.updateStudent(actualStudent).subscribe((val) => {
        this.students = val[0];
        this.router.navigate(['/students/']);
      });
    }else{
      this._studentsService.addStudent(actualStudent).subscribe((val) => {
        this.students = val[0];
        this.router.navigate(['/students/']);
      });
    }
  }
  deleteStudent(){
    this._studentsService.deleteStudent(this.idStudent).subscribe((val) => {
      this.students = val[0];
      this.router.navigate(['/students/']);
    });
  }

}
