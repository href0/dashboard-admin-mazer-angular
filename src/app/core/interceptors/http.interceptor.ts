import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService)
  const router = inject(Router)

  tokenService.isAuthenticated.subscribe({
    next : (value) => {
      if(value) {
        req = req.clone({
          headers : req.headers.set('Authorization', `Bearer ${tokenService.getToken()}`)
        })
      }
    }
  })
  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401 || e.status === 403) {
        tokenService.removeToken();
        router.navigate(['login']);
      }
      // if(e.status === 404) {
      //   router.navigate(['notfound'])
      // }
      const error = e.error?.message || e.statusText;
      return throwError(() => error);
    })
  );
};
