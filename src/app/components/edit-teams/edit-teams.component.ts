import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.css']
})
export class EditTeamsComponent implements OnInit {

  id: any;
  team: any = {};

  teamForm: FormGroup;
  Tteams: any = [];



  constructor(private activatedroute: ActivatedRoute, private teamsService: TeamsService, private route: Router) { }

  ngOnInit() {



    this.id = this.activatedroute.snapshot.paramMap.get('id');

    this.teamsService.displayTeamById(this.id).subscribe((response) => {
      this.team = response;
    })


  }


  editteam() {
    this.teamsService.editTeams(this.team).subscribe((response) => {
      console.log("here this a new object", response);
    })

    this.route.navigate(['dashboard']);



  }
}
