import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumservicesService } from 'src/app/services/stadiumservices.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {


  T: any = [];
  id: any;
  stadium: Object;

  constructor(private router: Router, private stadiumservices: StadiumservicesService) { }

  ngOnInit() {

    this.stadiumservices.displayAllStadium().subscribe(
      (response) => {
        this.T = response;
      }
    )
  }

  deleteStadiumObj(id) {

    this.stadiumservices.deleteStadium(id).subscribe((response) => {
      console.log("here reponse after delete stadium", response);
      this.stadiumservices.displayAllStadium().subscribe(
        (response) => {
          this.T = response;
        }
      )
    })


  }

  gotoEdit(id) {

    this.router.navigate([`editStadium/${id}`])
  }

}
