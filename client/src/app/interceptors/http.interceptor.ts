import {HttpEvent,HttpInterceptorFn,HttpResponse,} from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService= inject(LocalstorageService)

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        localStorageService.setItem('token', event.body.accessToken);
      }
      return event;
    }))
};