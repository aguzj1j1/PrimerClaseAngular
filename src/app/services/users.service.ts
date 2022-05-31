import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    { username: 'agonzalez2@gmail.com',
      password: 'prueba1234',
      admin: false
    }
  ];
  getListUser(username: string,password:string) {
    return this.user.filter(us => us.username === username && us.password === password)
  }
}
