import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  Length:number=0;
  Breadth:number=0;
  result:number=0;

  area(){
    console.log(this.Length,this.Breadth);
    this.result=this.Length*this.Breadth;
    console.log(this.result);
  }

  perimeter(){
    console.log(2*(this.Length,this.Breadth));
    this.result=2*(this.Length+this.Breadth);
    console.log(this.result);
  }

}
