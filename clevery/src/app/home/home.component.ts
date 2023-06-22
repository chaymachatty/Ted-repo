import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Ted University - Acceuil")
  /*  this.meta.addTags([
      { name: 'description', content: 'This is an article about Angular Meta service' },
      { name: 'keywords', content:"CLEVORY,Ted University, université, université tunisie, licence, mastere,afrique, privé, université privé, école ingénieur privée tunisie, tunis, école ingénieur tunis" }  
    ]);  */

    jQuery  (function ($:any) {
      
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
        


     
        var brandsSlider1 = $('.brands_slider1');
        
        brandsSlider1.owlCarousel(
        {
        rtl:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        nav:false,
        dots:false,
        autoWidth:true,
        items:5,
        margin:42,
        });
        
        if($('.brands_prev1').length)
        {
        var prev = $('.brands_prev1');
        prev.on('click', function()
        {
          brandsSlider1.trigger('next.owl.carousel');
        });
        }
        
        if($('.brands_next1').length)
        {
        var next = $('.brands_next1');
        next.on('click', function()
        {
          brandsSlider1.trigger('prev.owl.carousel');

        });
        }
        
      
    })
  }

  
}
