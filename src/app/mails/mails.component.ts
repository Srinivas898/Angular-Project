import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {
  mails = [
    { id: 1, subject: 'Mail 1', completed: true },
    { id: 2, subject: 'Mail 2', completed: false },
    { id: 3, subject: 'Mail 3', completed: true },
  ];
  // completed:string="";
  // mails:string="";
  constructor(private _mailService:MailService){
    _mailService.getMails().subscribe(
      (data:any)=>{
        console.log(data);
        this.mails=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
