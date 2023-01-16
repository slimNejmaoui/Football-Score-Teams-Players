import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-playertable',
  templateUrl: './playertable.component.html',
  styleUrls: ['./playertable.component.css']
})
export class PlayertableComponent implements OnInit {


  T: any = [];



  constructor(private router: Router, private playersServices: PlayersService) { }

  ngOnInit() {

    this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response })
  }

  gotoDisplay(id: any) {


    this.router.navigate([`displayplayer/${id}`]);

  }


  gotoEdit(id: any) {

    this.router.navigate([`editplayers/${id}`]);

  }

  Delete(id) {

    this.playersServices.deletePlayer(id).subscribe((response) => {
      console.log("here your object is deleted", response);
      this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response; })

    })



  }



}
