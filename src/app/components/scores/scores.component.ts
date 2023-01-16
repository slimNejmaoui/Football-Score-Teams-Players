import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input() matchestable: any;

  constructor() { }

  ngOnInit() {
  }

  score(a: number, b: number) {
    if (a > b) {
      return ("win");

    }
    else if (a < b) {
      return ("loss");
    }
    else {

      return ("draw");
    }


  }


  color(a: number, b: number) {
    if (a > b) {
      return ("green");

    }
    else if (a < b) {
      return ("orange");
    }
    else {

      return ("blue");
    }


  }



  // teamStyle(a: number, b: number) {
  //   if (a > b) {
  //     return "1";

  //   }
  //   else if (a < b) {
  //     return "2";
  //   }
  //   else {

  //     return "3";
  //   }


  // }







}
