import { Component } from '@angular/core';
import { FlipcartApiService } from '../flipcart-api.service';

@Component({
  selector: 'app-flipcart-api',
  templateUrl: './flipcart-api.component.html',
  styleUrls: ['./flipcart-api.component.css']
})
export class FlipcartApiComponent {
  flipcartdata:any=[];
  constructor(private _flipcartapiService:FlipcartApiService){
    _flipcartapiService.getFlipcartApi().subscribe(
      (data:any)=>{
        console.log(data);
        this.flipcartdata=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
