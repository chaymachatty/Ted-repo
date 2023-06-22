import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private _httpclient:HttpClient) { }

  changepwd(body:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/changepwd",{params:body},{headers:headers,withCredentials:true} )
  }

  logout(){
    localStorage.clear();
  }
  getpartner(id:number){
    return this._httpclient.get(environment.apiUrl+'/partner/getid/'+id,{withCredentials:true})
  }
  logoutservice(){
    this.logout();

    return this._httpclient.post(environment.apiUrl+"/web/session/logoutt",{},{withCredentials:true});

  }
  updatepartner(id:number,body:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/updatepartner/"+id,{params:body},{headers:headers,withCredentials:true} )
  }
  register(body:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpclient.post(environment.apiUrl+"/register",{params:body},{headers:headers} )
  }
  isConnected():boolean{
    return (localStorage.getItem("user")!=null&&localStorage.getItem("user").length>0)
  }
  getuser(){
    return JSON.parse(localStorage.getItem("user"));
  }
  login(body:any){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    
    return this._httpclient.post(environment.apiUrl+"/web/session/authenticate",body,{headers:headers,withCredentials:true}).pipe(map((res:any)=>{
      console.log(res)
      if (res.result&&res.result.uid){
        console.log(res.result)
        localStorage.setItem("user",JSON.stringify(res.result));
       return true

      }
      else{
        throw  "Email/Password Incorrect";
        
      }
    }));
  }
}
