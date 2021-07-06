import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { IMember } from "./member";


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private getAllMembers = 'http://localhost:4200/api/members';
  private memberAPIUrl = 'http://localhost:4200/api/member';
  status = "";
  errorMessage="";
  

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    let request = this.http.get<any>(this.getAllMembers)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(0))),
      catchError(this.handleError)
    );
    return request;
  }


  createMember(member:any): Observable<any | undefined> {
    return this.http.post<any>(this.memberAPIUrl,member)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteMember(memberId:string): Observable<any> {
    return this.http.delete(this.memberAPIUrl+"/"+memberId)
    .pipe(
      catchError(this.handleError)
    );
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
