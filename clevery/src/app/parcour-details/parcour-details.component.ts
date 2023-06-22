import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcourService } from '../services/parcour.service';

@Component({
  selector: 'app-parcour-details',
  templateUrl: './parcour-details.component.html',
  styleUrls: ['./parcour-details.component.scss']
})
export class ParcourDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private parcourService:ParcourService,private title:Title) { }
  id:any;
  parcour:any
  debouches=[]
  prerequis=[]
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
    this.id=params.get('id')
    this.parcourService.getParcourbyid(this.id).subscribe((res:any)=>{
      this.parcour=res;
      console.log(res)
      this.title.setTitle("Ted University - "+res.name)
      this.debouches=this.parcour.debouches

      this.prerequis=this.parcour.prerequis.split('●')
    })
  })
  }

}
