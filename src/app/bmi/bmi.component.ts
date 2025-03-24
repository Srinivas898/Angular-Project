import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  Weight:number=0;
  Height:number=0;
  result:number=0;



bmi(){
  console.log(this.Weight,this.Height);
  this.result=(this.Weight/this.Height*2);
  console.log(this.result);
}

}
