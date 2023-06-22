import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthentificationService } from '../services/authentification.service';
//Interceptor
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthentificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      /*
        console.info('HttpResponse::event =', event.body, ';');
        console.log(event)
        if (event.body.error&&event.body.error.code==100){
          this.authService.logoutservice().subscribe((res:any)=>{
            //console.log(res);
            location.reload();
          })    
      }
      */
      } 
      return event;
    }),catchError((err:HttpErrorResponse)=>{
      //console.log(err)
     /* if (err.message.includes("Unknown Error")==true){
        this.authService.logout();
        location.reload();

      }*/
      throw err;
    })
    )
  }
}
