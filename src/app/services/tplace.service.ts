import { Injectable } from '@angular/core';
import {Tplace} from "../model/tplace";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class TplaceService {
  placeid: number;
  private urlEndPoint:string ='http://localhost:8080/api/places';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getTplaces():Observable<Tplace[]> {
    //return of(Categories);
    return this.http.get<Tplace[]>(this.urlEndPoint);


  }

  getTplace(id):Observable<Tplace>{
    return this.http.get<Tplace>(`${this.urlEndPoint}/${id}`)
  }




}
