import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-display-teams',
  templateUrl: './display-teams.component.html',
  styleUrls: ['./display-teams.component.css']
})
export class DisplayTeamsComponent implements OnInit {


  team: any;
  id: any;




  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamsService) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.teamService.displayTeamById(this.id).subscribe((response) => { this.team = response; })

    console.log("here finded", this.team);


  }

}


