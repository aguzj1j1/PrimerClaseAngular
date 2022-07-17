import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';
import { UserAuth } from '../models/users.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { loadFeatureLoginsSuccess } from '../store/login/login.actions';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = false;
  errorMessage: any;
  formLogin: any;
  ActualUser: UserAuth[];
  observable: Observable<any>;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
    private store : Store<any>
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
    const array = [1, 2, 3, 4, 5, 6, 7];
    this.observable = of(array);
    this.observable.subscribe(
      (val) => console.log(val),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }

   onSubmit() {
    this.store.dispatch(login({prueba:"hola"}))

    this.userService.getListUser().subscribe((val) => {

      let value = val.filter(data => data.username === this.formLogin.get('Username')?.value  && data.password===this.formLogin.get('Password')?.value);
      if(value.length>0){
          this.ActualUser = value;
          this.userService.setLogged();
          localStorage.setItem('user', JSON.stringify(this.ActualUser));
          this.store.dispatch(loadFeatureLoginsSuccess({user:this.ActualUser[0]}))
          this.route.navigate(['/students']);

      }
    });
  }
  isUserLogin() {
    console.log(localStorage.getItem('user'));
  }
  checkIsUserWithPromise(userName: string, password: string): boolean {
    this.userService.getListUserPromise(userName, password).then((val) => {
      this.ActualUser = val;
    });

    if (this.ActualUser.length > 0) {
      return true;
    }
    return false;
  }
}
function login(arg0: { prueba: string; }): any {
  throw new Error('Function not implemented.');
}

