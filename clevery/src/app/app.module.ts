import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './services/authentification.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ContactComponent } from './static/contact/contact.component';
import { AboutusComponent } from './static/aboutus/aboutus.component';
import { MissionComponent } from './static/mission/mission.component';
import { ParcourComponent } from './parcour/parcour.component';
import { ParcourService } from './services/parcour.service';
import { ContactService } from './services/contact.service';

import { ParcourDetailsComponent } from './parcour-details/parcour-details.component';
import { PreinscriptionComponent } from './preinscription/preinscription.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { EntreprisesComponent } from './static/entreprises/entreprises.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { CertificationsComponent } from './static/certifications/certifications.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    AboutusComponent,
    MissionComponent,
    ParcourComponent,
    ParcourDetailsComponent,
    PreinscriptionComponent,
    EntreprisesComponent,
    RendezvousComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgSelectModule,
    Ng2TelInputModule
  ],
  providers: [
    AuthentificationService,
    ParcourService,
    ContactService,
    DatePipe,
    Meta,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
         
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('808615583354761')
          }
        ]
      } as SocialAuthServiceConfig,
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
