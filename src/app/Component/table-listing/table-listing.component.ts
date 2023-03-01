import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/Services/MainService/main-service.service';

@Component({
  selector: 'app-table-listing',
  templateUrl: './table-listing.component.html',
  styleUrls: ['./table-listing.component.css']
})
export class TableListingComponent {

  

  constructor(public service : MainServiceService){}

  ngOnInit(): void {
    this.service.getAllMessage()
    
  }


  removeMessage(Id:any){

    this.service.removeMsg(Id)

  }

}
