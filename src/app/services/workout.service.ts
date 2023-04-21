import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, pipe, throwError, of } from 'rxjs';

const API_KEY = environment.API_KEY
const API_HOST = environment.API_HOST
const API_URL = environment.API_URL


@Injectable({
  providedIn: 'root',
})
export class WorkoutService {

  constructor(private httpClient: HttpClient) { }
  
    getApi(search?: string | null | undefined): Observable<any> {
      if(!search) {
        return of ([])
      }
       return this.httpClient.get<any>(`${API_URL}exercises/bodyPart/${search || ''}`, {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      }).pipe(catchError(this.errorHandle))
    }

    errorHandle(error: any) {
      let errorMessage = ''
      if(error.error instanceof ErrorEvent) {
        errorMessage = error
      } else {
        errorMessage = error
      }
      return throwError(errorMessage)
    }

}
