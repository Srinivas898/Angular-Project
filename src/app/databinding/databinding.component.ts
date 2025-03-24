import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  // Event Binding()

  click(){
    alert("Hello Good Morning!");
  }

  // Interpolation{{}}
  age:number=32;
  name:string="Srinivas";
  place:string="Mulugu";


  // Property Binding[]
  isData:boolean=true;

  // Two Way Data Binding
  mobile:string="+91";
  submit(){
    alert(this.mobile);
  }

num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=(this.num1+this.num2)
  console.log(this.result);
}
}


