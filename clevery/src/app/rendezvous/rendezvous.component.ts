import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ParcourService } from '../services/parcour.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {


  constructor(
    private parcourService:ParcourService,
    private authService: SocialAuthService,
    private route:ActivatedRoute,
    private title:Title
    ) { }
  parcours=[]

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  socialUser: SocialUser;
  isLoggedin: boolean = null;
  nationalite=""
  pays=""
  nom=""
  prenom=""
  email=""
  mobile=""
  diplome=""
  parcour=''
  idfacebook=""
  genre="Genre"
  source="Website"
  sourcequery
  success=""
  erreur=""
  date
  datemin=new Date().setDate(new Date().getDate()+1);
  //1 IS FOR FACEBOOK ETC
  @ViewChild('fbbutton') fbbutton: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.title.setTitle("Ted University - Rendez vous")

    this.route.queryParams.subscribe(params => {
      this.sourcequery = params['share'];
      this.parcour = params['parcour'];
  });
    
    this.parcourService.getParcours().subscribe((res:any)=>{
      console.log(res)
    
      this.parcours=res
   
    })

    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(user)
      if (this.isLoggedin){
        this.email=user.email;
        this.nom=user.lastName
        this.prenom=user.firstName
        this.idfacebook=user.id
        this.source="Facebook"
      }

    });
 

  }
  ngAfterViewInit(){
    setTimeout(() => {
      if (this.fbbutton && this.sourcequery==1){
        let el: HTMLElement = this.fbbutton.nativeElement;
        el.click();
        console.log("clicked")
      }   
      }, 1000);
  
  }
  inscrire(){
    let body={
      name:this.nom,
      prenom:this.prenom,
      email:this.email,
      num_tel:this.mobile,
      parcour:this.parcour,
      source:this.source,
      date:this.date
    }
    console.log(body)
    this.parcourService.rendezvous(body).subscribe((res:any)=>{
      this.success="Votre rendez-vous a éte enregistré"
    },err=>{
      this.erreur="Erreur"
    })
  }
}
