import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var jQuery: any;

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor(private title:Title) { }

 
  ngOnInit(): void {
    this.title.setTitle("Ted University - Certifications")

    jQuery  (function ($:any) {
        if($('.brands_slider').length)
        {
        var brandsSlider = $('.brands_slider');
        
        brandsSlider.owlCarousel(
        {
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        nav:false,
        dots:false,
        autoWidth:true,
        items:5,
        margin:42,
        });
        
        if($('.brands_prev').length)
        {
        var prev = $('.brands_prev');
        prev.on('click', function()
        {
        brandsSlider.trigger('prev.owl.carousel');
        });
        }
        
        if($('.brands_next').length)
        {
        var next = $('.brands_next');
        next.on('click', function()
        {
        brandsSlider.trigger('next.owl.carousel');
        });
        }
        }
      
    })
  }

}
