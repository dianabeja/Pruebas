import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }
  apiURL="http://localhost:8080/header";

  //Http options
  httpoptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getHeader():Observable<any>{
    return this.http.get<any>(this.apiURL,this.httpoptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any){
    let errorMessaje= '';
    if(error.error instanceof ErrorEvent){
      errorMessaje= error.error.messaje;
    }else {
      errorMessaje = `Error code: ${error.status}\n messaje: ${error.messaje}`
    }
    window.alert(errorMessaje);
    return throwError(errorMessaje);
  }
}
