import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { StadiumservicesService } from 'src/app/services/stadiumservices.service';

@Component({
  selector: 'app-addmatchs',
  templateUrl: './addmatchs.component.html',
  styleUrls: ['./addmatchs.component.css']
})
export class AddmatchsComponent implements OnInit {

  match: any = {};

  matchForm: FormGroup;
  T: any = [];

  stadiumId: any;


  constructor(private router: Router, private matchService: MatchService, private stadiumServices: StadiumservicesService) { }

  ngOnInit() {

    this.stadiumServices.displayAllStadium().subscribe(
      (response) => {
        this.T = response.satdiums;
      }
    )


  }

  addmatch() {

    this.match.stadiumId = this.stadiumId;
    this.matchService.addMatch(this.match).subscribe((response) => {
      console.log("here reponse after adding match", response.message);

      this.router.navigate(["dashboard"]);
    })



  }

  onSelect(event) {

    this.stadiumId = event.target.value;

  }


}


