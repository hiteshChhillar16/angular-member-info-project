import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private randomUserApi = 'http://localhost:4200/randomuser';

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    let request = this.http.get<any>(this.randomUserApi)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(0))),
      catchError(this.handleError)
    );
    console.log(request)
    return request;
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
