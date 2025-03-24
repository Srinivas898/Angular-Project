import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent {
  num1:number=0;
  num2:number=0;
  num3:number=0;
  result:number=0

  emi(){
    console.log(this.num1,this.num2,this.num3);
    this.result=this.num1*((10/12*100)*(1+10/12*100)**10/(1+10/12*100)**10-1);
    console.log(this.result);
  }

}
