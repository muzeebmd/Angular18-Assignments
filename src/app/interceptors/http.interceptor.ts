import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent
} from '@angular/common/http';

import { Observable, catchError, finalize, tap, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  console.log('📤 Request sent:', req.url);

  return next(req).pipe(
    tap(event => {
      // You can modify response handling here if needed
      console.log('✅ Response received from:', req.url);
    }),
    catchError(err => {
      console.error('❌ Interceptor Error:', err);
      alert(`Error: ${err.status} - ${err.statusText}`);
      return throwError(() => err);
    }),
    finalize(() => {
      console.log('📥 Request complete for:', req.url);
    })
  );
};
