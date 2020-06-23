import { Injectable } from '@angular/core';
import { City} from "../model/city";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class CityService {


  private urlEndPoint:string ='http://localhost:8080/api/cities';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getCities():Observable<City[]> {

    return this.http.get<City[]>(this.urlEndPoint);

  }



}
