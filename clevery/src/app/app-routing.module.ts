import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParcourDetailsComponent } from './parcour-details/parcour-details.component';
import { PreinscriptionComponent } from './preinscription/preinscription.component';
import { ProfileComponent } from './profile/profile.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { AboutusComponent } from './static/aboutus/aboutus.component';
import { CertificationsComponent } from './static/certifications/certifications.component';
import { ContactComponent } from './static/contact/contact.component';
import { EntreprisesComponent } from './static/entreprises/entreprises.component';
import { MissionComponent } from './static/mission/mission.component';

const routes: Routes = [
  {
  path:"",component:HomeComponent,
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"mission",component:MissionComponent
  },
  {
    path:"parcour-details/:id",component:ParcourDetailsComponent
  },
  {
    path:"preinscription",component:PreinscriptionComponent
  },
  {
    path:"rendezvous",component:RendezvousComponent
  },
  {
    path:"partenaires",component:EntreprisesComponent
  },
  {
    path:"certifications",component:CertificationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
