import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  getListUser(username: string, password: string): Observable<UserAuth[]> {
    return of(
      this.user.filter(
        (us) => us.username === username && us.password === password
      )
    );
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
}
