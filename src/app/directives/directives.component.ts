import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  products:any=[
    {name:'Bike',cost:100000,rating:4.5},
    {name:'Tractor',cost:700000,rating:4.6},
    {name:'Car',cost:900000,rating:4.7},
    {name:'Bus',cost:2000000,rating:4.4},
    {name:'Truck',cost:2500000,rating:4.7},
    {name:'Train',cost:10000000,rating:4.9},
  ]

  states:string[]=["AP","TG","KA","TN","MH","KL","JH","GJ","GOA"];

  IsVisible:boolean=true;
}
