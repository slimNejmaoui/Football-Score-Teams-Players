import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/data-services.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  messageData: string

  constructor(private dataServices: DataServicesService) { }

  ngOnInit() {
  }

  addData() {

    this.dataServices.getAllData().subscribe((response) => {

      console.log("here into data", response.message);

      if (response.message == "data save into DB") {

        this.messageData = response.message
      }


    })




  }


}
