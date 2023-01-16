import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teamtable',
  templateUrl: './teamtable.component.html',
  styleUrls: ['./teamtable.component.css']
})
export class TeamtableComponent implements OnInit {

  T: any = [];

  constructor(private router: Router, private teamsService: TeamsService) { }

  ngOnInit() {

    this.teamsService.displayAllTeams().subscribe((response) => { this.T = response; })


  }
  gotoDisplay(id: any) {
    this.router.navigate([`displyTeams/${id}`]);
  }

  gotoEdit(id: any) {
    this.router.navigate([`editTeams/${id}`]);
  }


  delete(id) {
    this.teamsService.deleteTeamsById(id).subscribe((response) => {


      console.log("delete team", response);

      this.teamsService.displayAllTeams().subscribe((response) => {
        console.log(response);

        this.T = response
      })

    })


  }

}


