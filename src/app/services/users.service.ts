import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserAuth } from '../models/users.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserAuth[] = [
    {
      username: 'agonzalez@gmail.com',
      password: 'prueba123',
      admin: true,
    },
    { username: 'agonzalez2@gmail.com', password: 'prueba1234', admin: false },
  ];
  getListUser(username: string, password: string): Observable<UserAuth[]> {
    return of(
      this.user.filter(
        (us) => us.username === username && us.password === password
      )
    );
  }
   getListUserPromise(username: string,password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.user.filter((us) => us.username === username && us.password === password).length > 0) {
        setTimeout(() => {
          resolve(this.user.filter((us) => us.username === username && us.password === password));
        }, 100);
      } else {
        reject('error');
      }
    });
  }
}
