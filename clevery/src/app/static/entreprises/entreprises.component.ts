import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var jQuery: any;

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {

  constructor(private title:Title) { }

 
  ngOnInit(): void {
    this.title.setTitle("Ted University - Nos partenaires")

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


      if($('.brands_slider1').length)
      {
      var brandsSlider1 = $('.brands_slider1');
      
      brandsSlider1.owlCarousel(
      {
      loop:true,
      rtl:true,

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
        brandsSlider1.trigger('prev.owl.carousel');
      });
      }
      
      if($('.brands_next1').length)
      {
      var next = $('.brands_next1');
      next.on('click', function()
      {
      brandsSlider1.trigger('next.owl.carousel');
      });
      }
      }
    
  })
  }

}
