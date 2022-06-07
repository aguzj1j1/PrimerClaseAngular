import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';
import { UserAuth } from '../models/users.model';
import { Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.checkIsUser(
        this.formLogin.get('Username')?.value,
        this.formLogin.get('Password')?.value
      )
    ) {
      localStorage.setItem('user', JSON.stringify(this.ActualUser[0]));
      this.route.navigate(['/students']);
    }
  }
  isUserLogin() {
    console.log(localStorage.getItem('user'));
  }
  checkIsUser(userName: string, password: string): boolean {
    this.userService.getListUser(userName, password).subscribe((val) => {
      this.ActualUser = val;
    });
    if (this.ActualUser.length > 0) {
      return true;
    }
    return false;
  }

  checkIsUserWithPromise(userName: string, password: string): boolean {
    this.userService.getListUserPromise(userName, password).then((val) => {
      this.ActualUser = val;
    })

    if (this.ActualUser.length > 0) {
      return true;
    }
    return false;
  }
}
