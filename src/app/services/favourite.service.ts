import { Injectable } from '@angular/core';
import {Favourite} from "../model/favourite";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Locatable} from "../model/locatable";

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  private urlEndPoint: string = 'http://localhost:8080/api/favourites';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  getallfavourites():Observable<Favourite[]>{
    return this.http.get<Favourite[]>(`${this.urlEndPoint}`)
  }

  getFavourites(userid): Observable<Locatable[]> {
    const url = 'http://localhost:8080/api/users'
    return this.http.get<Locatable[]>(`${url}/` + userid + `/locatables`)
  }

  save(userid:number, locatableid:number): Observable<Favourite> {
    const url = 'http://localhost:8080/api/users'
    return this.http.post<Favourite>(`${url}/`+userid+`/locatables/`+locatableid, null)
  }


}
