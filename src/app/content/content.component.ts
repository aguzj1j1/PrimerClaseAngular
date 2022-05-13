import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  listPeoples =[
    {
      "nombre":"hernan",
      "años" : 23,
      "domicilio": "Alberto marciano 348",
      "mayorDeEdad" : true
    },
    {
      "nombre":"agustina",
      "años" : 24,
      "domicilio": "Alberto marciano 348",
      "mayorDeEdad" : false
    },
    {
      "nombre":"hernan",
      "años" : 23,
      "domicilio": "Alberto marciano 340",
      "mayorDeEdad" : true
    },
    {
      "nombre":"florencia",
      "años" : 2,
      "domicilio": "Alberto marciano 30",
      "mayorDeEdad" : true
    },{
      "nombre":"pepe",
      "años" : 20,
      "domicilio": "Alberto marciano 3108",
      "mayorDeEdad" : false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
