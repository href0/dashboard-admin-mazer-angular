import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { TokenService } from './token.service';
import { apiEndpoint } from '../constants/constants';
import { ILogin, ILoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    private tokenService : TokenService,
  ) { }

  login(data : ILogin) : Observable<any> {
    return this.http.post<ILoginResponse>(apiEndpoint.AuthEndpoint.login, data)
      .pipe(map(response =>{
        this.tokenService.setToken(response.data.accessToken)
        return response
      }))
  }

  logout() {
    this.tokenService.removeToken()
  }

}
