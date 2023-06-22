import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router,UrlSegment  } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ParcourService } from 'src/app/services/parcour.service';
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //@ViewChild('closebutto') closebutton:HTMLElement;
  parcours:any
  constructor(private userService:AuthentificationService,private router:Router,private parcourService:ParcourService,private activatedRoute:ActivatedRoute) { }
  isLogged=false;
  text="Login"
  partner:any
  showmanagement=true;
  @Input() imgsrc
  @Input() inhome;
  async ngOnInit() {
   


    this.isLogged=this.userService.isConnected();
    let call=await this.getParcours();
    this.parcours=call;
    if (this.isLogged){
      this.text=this.userService.getuser().name;

      this.userService.getpartner(this.userService.getuser().partner_id).subscribe((res:any)=>{
        this.partner=res
        if (res.dirformation==true){
          this.showmanagement=true;
        }
    })
  }

}
getParcours(){
  return new Promise((resolve,reject)=>{

  this.parcourService.getParcours().subscribe((res:any)=>{
    resolve(res)
  },err=>reject(err))
})

}

  error=""
  email=""
  password=""
  gotoregister(){

  }
  login(){
    let body={
      jsonrpc:"2.0",
      params:{
        db:"clevorydbuniv",
        login:this.email,
        password:this.password
    }
    }
    this.userService.login(body).subscribe((res:any)=>{
      console.log(res)
      if (res==true){
        this.router.navigate(['/'])
        this.text=this.userService.getuser().name;
        this.isLogged=true;
        this.userService.getpartner(this.userService.getuser().partner_id).subscribe((res:any)=>{
          this.partner=res
          if (res.dirformation==true){
            this.showmanagement=true;
          }
          let element=document.getElementById("closebutto") as HTMLElement
          element.click()

      })

      }
     
    },err=>{
      console.log(err)
      this.error=err
      

    })

  }

  logout(){
    this.userService.logoutservice().subscribe((res:any)=>{
      location.reload();
      this.text="Login"
      this.isLogged=false;
    })
  }
}
