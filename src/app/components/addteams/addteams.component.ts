import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.css']
})
export class AddteamsComponent implements OnInit {
  team: any = {};

  teamForm: FormGroup;

  constructor(private teamsService: TeamsService, private route: Router) { }

  ngOnInit() {



  }

  addteam() {

    this.teamsService.addTeams(this.team).subscribe((response) => {
      console.log("here this a new object", response);
    })
    this.route.navigate(['dashboard']);
  }



}
