import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matches = [{ id: 1, scoreone: 1, scoretwo: 2, teamone: "Realmadrid", teamtwo: "barcelona" },
  { id: 2, scoreone: 4, scoretwo: 2, teamone: "psg", teamtwo: "Man city" },
  { id: 3, scoreone: 3, scoretwo: 0, teamone: "Manu", teamtwo: "barcelona" },
  { id: 4, scoreone: 0, scoretwo: 2, teamone: "chelsea", teamtwo: "Realmadrid" }, { id: 4, scoreone: 0, scoretwo: 0, teamone: "monaco", teamtwo: "nice" }];




  constructor() { }

  ngOnInit() {
  }

}
