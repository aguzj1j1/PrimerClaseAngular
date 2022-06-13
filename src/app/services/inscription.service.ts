import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inscription } from '../models/inscription.model';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  inscripciones :Inscription[]= [
    {nombre:'Agustin',email:'agonzalez@gmail.com',curso: 'angular',duracion:'3 meses'},
    {nombre:'Rocio',email:'rogonzalez@gmail.com',curso: 'react',duracion:'2 meses'},
    {nombre:'prueb',email:'rogonzalez2@gmail.com',curso: 'html',duracion:'2 meses'}
  ];
getInscripciones():Observable<Inscription[]>{
  return of(this.inscripciones)
}
  constructor() { }
}
