import { Component } from '@angular/core';
import * as Http from "http";
import {HttpClient} from "@angular/common/http";
import {Departament} from '../departament';

@Component({
  selector: 'app-proves-ex-marc-rubio',
  templateUrl: './proves-ex-marc-rubio.component.html',
  styleUrls: ['./proves-ex-marc-rubio.component.css']
})
export class ProvesExMarcRubioComponent {

  constructor(private http: HttpClient) {

    this.http.get<any>('http://localhost:3080/llistaAssiInfo').subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error);
    });

    this.http.post<any>('http://localhost:3080/modifCorreu', {}).subscribe(res => {
        console.log(res);
      }, error => {
        console.error(error);
      });

    const departament = new Departament(7,"ProvaExMarc","Ubi Prova","986721","2100")

    this.http.post<any>("http://localhost:3080/afegirDepartament", departament).subscribe((data)=>{
      console.log(data)});

  }
}
