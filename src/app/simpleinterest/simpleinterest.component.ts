import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {
num1:number=0;
num2:number=0;
num3:number=0;
result:number=0;

sum(){
  console.log(this.num1,this.num2,this.num3/100);
  this.result=this.num1*this.num2*this.num3/100;
  console.log(this.result);
}


}
