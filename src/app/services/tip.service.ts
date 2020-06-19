import { Injectable } from '@angular/core';
import {Tip} from "../model/tip";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class TipService {

  private urlEndPoint:string ='http://localhost:8080/api/tips';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getTips():Observable<Tip[]> {
    //return of(Categories);
    return this.http.get<Tip[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }




}
