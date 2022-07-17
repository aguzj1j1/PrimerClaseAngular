import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { UserAuth } from '../models/users.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserAuth[] = [
    {
      id: 1,
      username: 'agonzalez@gmail.com',
      password: 'prueba123',
      admin: true,
      nombre: 'agustin',
      apellido: 'gonzalez',
    },
    {
      id: 2,
      username: 'agonzalez2@gmail.com',
      password: 'prueba1234',
      admin: false,
      nombre: 'prueba',
      apellido: 'prueba2',
    },
  ];
  url = ' https://demo9641218.mockable.io/';
  http: any;
  isLogin: boolean = false;
  constructor(private _httpCliente: HttpClient) {}
  getListUser() {
    return this._httpCliente
      .get<UserAuth[]>(`${this.url}getAllUsers`)
      .pipe(catchError(this.handleError));
  }
  addUser(user: UserAuth): Observable<UserAuth[]> {
    this.user.push(user);
    return of(this.user);
  }
  deleteUser(id: Number): Observable<UserAuth[]> {
    this.user = this.user.filter((item) => item.id != id);
    return of(this.user);
  }
  updateUser(user: UserAuth): Observable<UserAuth[]> {
    this.user[this.user.findIndex((i) => (i.username = user.username))] = user;
    return of(this.user);
  }
  getUserById(id: Number): Observable<UserAuth[]> {
    return of(this.user.filter((us) => us.id == id));
  }
  getUsers(): Observable<UserAuth[]> {
    return of(this.user);
  }

  getUserName() {
    let userLog: any;
    let userActual = localStorage.getItem('user') || '';
    userActual = JSON.parse(userActual);
    for (const iterator of userActual) {
      userLog = iterator;
    }
    return userLog != null ? userLog.username : null;
  }

  setLogged() {
    localStorage.setItem('logueado', 'true');
  }
  setSignOut() {
    localStorage.removeItem('logueado');
    localStorage.removeItem('user');
  }

  getIsLoged(): Boolean {
    let logeado: boolean =
      localStorage.getItem('logueado') === 'true' ? true : false;
    return logeado;
  }

  getListUserPromise(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (
        this.user.filter(
          (us) => us.username === username && us.password === password
        ).length > 0
      ) {
        setTimeout(() => {
          resolve(
            this.user.filter(
              (us) => us.username === username && us.password === password
            )
          );
        }, 100);
      } else {
        reject('error');
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error) {
      console.warn(
        `Error de backend tipo ${error.status} con el mensaje de ${error.message}`
      );
    }
    return throwError('Error de comunicacion http');
  }
}
