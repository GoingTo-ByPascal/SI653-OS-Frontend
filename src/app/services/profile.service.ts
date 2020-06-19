import { Injectable } from '@angular/core';
import { Profile} from "../model/profile";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private urlEndPoint:string ='http://localhost:8080/api/profiles';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getUsers():Observable<Profile[]> {
    //return of(CLIENTES);
    return this.http.get<Profile[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }



  getUserprofile(id):Observable<Profile>{
    return this.http.get<Profile>(`${this.urlEndPoint}/${id}`)
  }



}
