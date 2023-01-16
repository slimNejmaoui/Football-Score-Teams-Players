import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {
  player: any = {};
  id: any;
  playerForm = FormGroup;


  constructor(private playersService: PlayersService, private route: Router, private activatedroute: ActivatedRoute) { }



  ngOnInit() {

    this.id = this.activatedroute.snapshot.paramMap.get('id');


    this.playersService.displayPlayer(this.id).subscribe((response) => { this.player = response })


  }

  editplayer() {

    this.playersService.editPlayer(this.player).subscribe((response) => {
      console.log("here this new object", response.message);



    }

    )


    this.route.navigate(['dashboard']);
  }

}
