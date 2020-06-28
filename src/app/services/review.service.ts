import { Injectable } from '@angular/core';
import { Review} from "../model/review";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  private urlEndPoint:string ='http://localhost:8080/api/reviews';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getreviewsbylocatableid(locatatableid):Observable<Review[]> {

    const url ="http://localhost:8080/api/locatables/"
    return this.http.get<Review[]>(`${url}/`+locatatableid+`/reviews`)


  }






}
