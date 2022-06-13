import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/users.service';
import { UserAuth } from '../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  email: String;
  nombre: String;
  apellido: String;
  idUser: Number;
  user: UserAuth[];
  labelButton: String;
  checked = false;
  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.idUser = this.route.snapshot.params['id'];
      this.createFormWithData();
      this.labelButton = 'Actualizar usuario';
    } else {
      this.createFormEmpty();
      this.labelButton = 'Crear usuario';
    }
  }
  createFormWithData() {
    let actualUser = this.getUserById(this.idUser);
    this.firstFormGroup = this._formBuilder.group({
      nombre: [actualUser[0].nombre, Validators.required],
      apellido: [actualUser[0].apellido, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: [actualUser[0].username, Validators.required],
      password: [actualUser[0].password, Validators.required],
    });
    this.checked = actualUser[0].admin;
    this.nombre = actualUser[0].nombre;
    this.apellido = actualUser[0].apellido;
    this.email = actualUser[0].username;
  }
  createFormEmpty() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  guardar() {
    let actualUser: UserAuth;
    actualUser = {
      id: this.idUser ? this.idUser : Math.random(),
      username: this.secondFormGroup.controls['mail'].value,
      password: this.secondFormGroup.controls['password'].value,
      admin: this.checked,
      nombre: this.firstFormGroup.controls['nombre'].value,
      apellido: this.firstFormGroup.controls['apellido'].value,
    };
    if (this.idUser){
      this.userService.updateUser(actualUser);
    }else{
      this.userService.addUser(actualUser);
    }
  }
  deleteUser(){
    debugger;
    this.userService.deleteUser(this.idUser);
  }
  getUserById(id: Number) {
    this.userService.getUserById(id).subscribe((val) => {
      this.user = val;
    });
    return this.user;
  }
  changeForm(ev: string) {
    if (ev == 'nombre') {
      this.nombre = this.firstFormGroup.controls['nombre'].value;
    }
    if (ev == 'apellido') {
      this.apellido = this.firstFormGroup.controls['apellido'].value;
    }
    if (ev == 'email') {
      this.email = this.secondFormGroup.controls['mail'].value;
    }
  }
}
