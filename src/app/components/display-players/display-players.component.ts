import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-display-players',
  templateUrl: './display-players.component.html',
  styleUrls: ['./display-players.component.css']
})
export class DisplayPlayersComponent implements OnInit {




  id: any;
  player: any;

  constructor(private activatedroute: ActivatedRoute, private playersService: PlayersService) { }

  ngOnInit() {

    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.playersService.displayPlayer(this.id).subscribe((response) => { this.player = response; });

  }



}
