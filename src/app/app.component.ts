import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  constructor(){
    let variable:number;
  }
variable = 1;
  title = 'primeraclase';
  ngOnInit(): void {

  }

}
