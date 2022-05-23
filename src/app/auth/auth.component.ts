import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  formEstudiante:FormGroup = this.fb.group({
    Usuario:['',[Validators.required,Validators.minLength(3),Validators.email]],
    Password:['',[Validators.maxLength(3),Validators.max(110),Validators.required]]
  });
  constructor( private fb : FormBuilder) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formEstudiante.valid) {
      console.log(this.formEstudiante.value);
    } else {
      alert("ERROR!");
    }
  }
}
