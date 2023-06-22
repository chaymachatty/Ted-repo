import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  repassword=""
  password=""
  user:any
  msg=""
  hidebutton=false
  constructor(private authService:AuthentificationService,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Ted University - Profile")

    let user=this.authService.getuser();
    console.log(user)
    this.authService.getpartner(user.partner_id).subscribe((res:any)=>{
      console.log(res);
      this.user=res
    })
  }
  changepwd(){
    let body={
        confirm_password:this.repassword,
        password:this.password,
        login:this.authService.getuser().username
    }
    this.authService.changepwd(body).subscribe((res:any)=>{
        //console.log(res);
        if (res.result=="Success"){
            this.hidebutton=true;
            this.msg="Votre mot de passe a été change avec success"
            let body={
                jsonrpc:"2.0",
                params:{
                  db:"clevorydbuniv",
                  login:this.authService.getuser().username,
                  password:this.password
              }
              }
              this.authService.login(body).subscribe((res:any)=>{
              })
        }
        else
            this.msg=res.result;
    })
}

}
