import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matches } from 'src/app/components/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  match: any;
  id: any;


  constructor(private activatedRoute: ActivatedRoute, private matcheServices: MatchService) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.matcheServices.displayMatch(this.id).subscribe((response) => { this.match = response; })



    console.log("here finded", this.match);
  }




}
