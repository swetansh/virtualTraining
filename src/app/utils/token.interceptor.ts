// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (!request.headers.has('Content-Type')) {
//         request = request.clone({
//           headers: request.headers.set('Content-Type', 'application/json'),
//         });
//     }

//     request = request.clone({headers: request.headers.set('Accept', 'application/json'), withCredentials: true });

//     return next.handle(request).do(data => {}, error => {
//       console.log(error);
//     });
//   }
// }
