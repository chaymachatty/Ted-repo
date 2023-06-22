import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _contactService:ContactService,private title:Title) { }
  name="";
  email="";
  subject="";
  body="";
  show=true;
  showbutton="";
  success=""
  ngOnInit(): void {
    this.addRecaptchaScript();
    this.title.setTitle("Ted University - Contact")

  }
  

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : environment.siteKey,
      'callback': (response) => {
        let body={
            captcha:response,
            
          }
          

          this._contactService.verifycaptcha(body).subscribe((res:any)=>{
              let result=JSON.parse(res)
              this.showbutton=result.result

          })

      }
    });
  }
 
  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
 
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
 
  }
  sendmail(){
    let body={
      name:this.name,
      email:this.email,
      subject:this.subject,
      body:this.body
    }
    if (this.showbutton=="success"){
    this._contactService.sendmail(body).subscribe((res:any)=>{
        this.show=false;
        console.log(res)
        this.success="Message envoyer avec success"
    })
}
  }

}
