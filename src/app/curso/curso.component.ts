import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {
  displayedColumns: string[] = [
    'Nombre',
    'Duracion',
    'Profesor',
    'FechaInicio'
  ];
  admin: boolean;
  auth: any;
  subscriptions: Subscription;
  course: any;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  dataSource: MatTableDataSource<Course>;
  constructor(private route: Router,private _course :CourseService) {
    this.auth = localStorage.getItem('user');
    debugger;
    let objeto = JSON.parse(this.auth);
    this.admin = objeto[0]['admin'];
    if (this.admin) {
      this.displayedColumns.push('actions');
    }
  }

  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this._course.getCourses().subscribe((val) => {
        this.course = val;
      })
    );
    this.dataSource = new MatTableDataSource<Course>(this.course);
  }
  goToCourse(id:number){
    this.route.navigate(['/course/view/', id]);
  }
}
