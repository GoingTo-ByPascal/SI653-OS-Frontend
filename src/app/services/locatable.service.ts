import { Injectable } from '@angular/core';
import {Locatable} from "../model/locatable";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class LocatableService {

  private urlEndPoint:string ='http://localhost:8080/api/locatables';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getLocatables():Observable<Locatable[]> {

    return this.http.get<Locatable[]>(this.urlEndPoint);

  }
  getLocatable(id):Observable<Locatable>{
    return this.http.get<Locatable>(`${this.urlEndPoint}/${id}`)
  }
  }
