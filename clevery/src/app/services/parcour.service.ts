import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParcourService {

  constructor(private _httpclient:HttpClient) { }
  getParcours():Observable<[]>{
    return this._httpclient.get<[]>(environment.apiUrl+'/parcours/all')
  }
  getParcourbyid(id:any){
    return this._httpclient.get(environment.apiUrl+'/parcours/getid/'+id)
  }

  preinscription(body:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/preinscription/",{params:body},{headers:headers} )
  }

  rendezvous(body:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/rendezvous/",{params:body},{headers:headers} )
  }
}
