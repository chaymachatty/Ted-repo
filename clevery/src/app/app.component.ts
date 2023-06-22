import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, UrlSegment } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ted University';
  hidephone=true
  hideadmission=true
  imgsrc=""
  inhome=true;
  constructor(private activatedRoute:ActivatedRoute,private router:Router){
 
  }
  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            gtag('config', 'G-8M5KTMXJRR',
                {
                    page_path: event.urlAfterRedirects
                }
            );
        });
}
  ngOnInit(){
    this.imgsrc="../assets/images/logo-noir1.png"
    this.inhome=true
    this.setUpAnalytics()
   /*
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      } 

      if (event instanceof NavigationEnd) {
         
        if (event.url.length>1){
          this.imgsrc="../assets/images/logowhite2.png"
          this.inhome=false
        }
        else{
          //GONNA INJECT WHITE LOGO
          this.imgsrc="../assets/images/logo.png"
          this.inhome=true
        }
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });
  */

  }
}
