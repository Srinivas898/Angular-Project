import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string='';
  constructor(private _vehicleService:VehicleService){
    this.loadVehicles();
  }
  loadVehicles(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

  filter(){
    this._vehicleService.getfilteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }

    )
  }

  column:string='';
  order:string='';

  sort(){
    this._vehicleService.getsortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

  delete(id:any){
    if(confirm("Are you sure to dalete record?")==true){
      this._vehicleService.getdeletedVehicle(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully!");
          this.loadVehicles();
        },(err:any)=>{
          alert("Internal Server Error!");
        }

      )
    }else{
      alert("You have Cancelled!");
    }

  }

  limit:string='';
  page:string='';

  pagination(){
    this._vehicleService.getpaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.loadVehicles=data;
      },(err:any)=>{
        alert("internal Server Error!");
      }
    )
  }

}

