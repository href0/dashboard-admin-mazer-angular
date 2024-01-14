import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  findById() : Observable<any> {
    return this.http.get('http://localhost:3000/user/1')
  }

  findAll() : Observable<any> {
    return this.http.get(apiEndpoint.UserEndPoint.getAll)
  }
}
