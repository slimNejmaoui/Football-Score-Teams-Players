import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matches } from 'src/app/components/data/matches';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {




  T: any = [];



  constructor(private router: Router, private playersServices: PlayersService) { }

  ngOnInit() {

    this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response; })
  }
}
