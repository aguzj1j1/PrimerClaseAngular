import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/users.service';
import { Inscription } from '../models/inscription.model';
import { UserAuth } from '../models/users.model';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'email', 'curso','duracion'];
  admin: boolean;
  auth: any;
  subscriptions: Subscription;
  inscriptions: any;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  dataSource: MatTableDataSource<Inscription>;
  constructor(private inscription: InscriptionService,private route: Router) {
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
      this.inscription.getInscripciones().subscribe((val) => {
        this.inscriptions = val;
      })
    );
    this.dataSource = new MatTableDataSource<Inscription>(this.inscriptions);
  }

}
