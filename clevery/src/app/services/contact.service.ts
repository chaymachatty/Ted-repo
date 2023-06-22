import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _httpclient:HttpClient) { }
  sendmail(body){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/emailsend",{params:body},{headers:headers,responseType: 'text'  as 'json'} )
  }
  verifycaptcha(body){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/verifyrecaptcha",{params:body},{headers:headers,responseType: 'text'  as 'json'} )
  }

}
