import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  T: any = [];

  constructor(private playerService: PlayersService) { }

  ngOnInit() {

    this.playerService.displayAllPlayers().subscribe((response) => {
      console.log("hre reponse ", response);

      this.T = response;
    })
  }

}
