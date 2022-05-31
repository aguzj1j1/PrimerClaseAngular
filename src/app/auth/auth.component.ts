import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';
import { UserAuth } from '../models/users.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any;
  formLogin:any;
  ActualUser: UserAuth[];

  constructor(private fb:FormBuilder, private userService : UserService, private route :Router ) {

  }

  ngOnInit():void {
    this.formLogin =  this.fb.group({
      Username:['',Validators.required],
      Password:['',Validators.required]
    })

  }

  onSubmit() {
    if (this.checkIsUser(this.formLogin.get('Username')?.value,this.formLogin.get('Password')?.value)){
      localStorage.setItem('user',JSON.stringify(this.ActualUser[0]));
      this.route.navigate(['/students'])
    }
  }
  isUserLogin(){
    console.log(localStorage.getItem('user'));
  }

  checkIsUser(userName:string,password:string) :boolean{

   if(this.userService.getListUser(userName,password).length>0){
     debugger;
    this.ActualUser = this.userService.getListUser(userName,password);
     return true;
   }
   return false
  }
}
