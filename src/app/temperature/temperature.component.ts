import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  num1:number=0;
  result:number=0;

  add(){
    console.log((this.num1*1.8)+32);
    this.result=this.num1*1.8+32;
    console.log(this.result);
  }
}
