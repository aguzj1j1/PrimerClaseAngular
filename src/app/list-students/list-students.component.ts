import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../models/students.model';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  auth : any;
  displayedColumns: string[] = ['name', 'note', 'course', 'email','aprobado'];
  admin:boolean;
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
  @ViewChild(MatTable) tabla1: MatTable<any>;
  dataSource: MatTableDataSource<Student>;
  constructor(private route :Router){
    this.auth= localStorage.getItem('user');
    let objeto =  JSON.parse(this.auth)
     this.admin = objeto['admin']
     if (this.admin){
       this.displayedColumns.push("actions")
     }

  }
  goToViewStudent(id:number):void{
    this.route.navigate(['/students/view/',id])
  }
  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<Student>(this.students);
  }
}
