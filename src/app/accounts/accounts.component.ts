import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  term:string='';
  constructor(private _accountService:AccountService){
    // this.loadAccounts();
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

  filter(){
    this._accountService.getfilteredAccounts(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

  column:string="";
  order:string="";

  sort(){
    this._accountService.getsortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }

    )
  }
  
  delete(id:any){
    if(confirm("Are you sure to delete record?")==true){
      this._accountService.getdeletedAccount(id).subscribe(
        (data:any)=>{
          alert("Account Record Deleted Successfully!");
          this.accounts();
        },(err:any)=>{
          alert("Internal Server Error!");
        }
      )
    }else{
      alert("You Have Cancelled!")
    }
  }


  limit:string="";
  page:string="";

  pagination(){
    this._accountService.getpaginatedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
