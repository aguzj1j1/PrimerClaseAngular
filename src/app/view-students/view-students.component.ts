import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {
  formStudents: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  createFormEmpty() {

  }

}
