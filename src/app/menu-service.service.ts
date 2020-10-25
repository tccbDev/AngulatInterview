import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private jsonUrl = '../assets/model/menu.json';
  constructor(private http: HttpClient) {

   }

   // tslint:disable-next-line: typedef
   public getJSON(){
     return this.http.get(this.jsonUrl);
   }

}
