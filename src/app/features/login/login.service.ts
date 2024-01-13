import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }

  create(data : any) : Observable<any> {
    return this.http.post(environment.API_URL + '/auth/signin', data)
  }
}
