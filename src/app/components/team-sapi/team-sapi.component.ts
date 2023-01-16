import { Component, OnInit } from '@angular/core';
import { ApiTeamsService } from 'src/app/services/api-teams.service';

@Component({
  selector: 'app-team-sapi',
  templateUrl: './team-sapi.component.html',
  styleUrls: ['./team-sapi.component.css']
})
export class TeamSapiComponent implements OnInit {

  T: any;

  pageOfItems: Array<any>;

  constructor(private apiServices: ApiTeamsService) { }

  ngOnInit() {


    this.apiServices.getALLteamsApi().subscribe((response) => {

      console.log("here into from Api", response.teamsapi);

      this.T = response.teamsapi;


    })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
