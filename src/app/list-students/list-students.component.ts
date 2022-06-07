import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../models/students.model';
import { StudentsService } from '../services/students.service';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  auth: any;
  displayedColumns: string[] = ['name', 'note', 'course', 'email', 'aprobado'];
  admin: boolean;
  subscriptions: Subscription;
  students: any;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  dataSource: MatTableDataSource<Student>;
  constructor(private route: Router, private student: StudentsService) {
    this.auth = localStorage.getItem('user');
    let objeto = JSON.parse(this.auth);
    this.admin = objeto['admin'];
    if (this.admin) {
      this.displayedColumns.push('actions');
    }
  }
  goToViewStudent(id: number): void {
    this.route.navigate(['/students/view/', id]);
  }
  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.student.getStudents().subscribe((val) => {
        this.students = val;
      })
    );
    this.dataSource = new MatTableDataSource<Student>(this.students);
  }
  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
