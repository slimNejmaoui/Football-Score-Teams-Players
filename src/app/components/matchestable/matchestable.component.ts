import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchestable',
  templateUrl: './matchestable.component.html',
  styleUrls: ['./matchestable.component.css']
})
export class MatchestableComponent implements OnInit {

  // items = [];
  T: any = [];
  id: any;
  match: Object;
  pageOfItems: Array<any>;
  // currentPage = 1;


  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {

    this.T = Array(10).fill(0).map((x, i) => ({ id: (i + 1), name: `item ${i + 1}` }));
    this.matchService.getALLMatches().subscribe(
      (response) => {
        this.T = response;
      }
    )

  }

  gotoDisplay(id: any) {


    this.router.navigate([`displyMatch/${id}`]);


  }


  gotoEdit(id: any) {


    this.router.navigate([`editMAtch/${id}`]);


  }

  deleteMatch(id) {

    this.matchService.deleteMatch(id).subscribe((response) => {
      console.log("here reponse after delete match", response.message);
      this.matchService.getALLMatches().subscribe(
        (response) => {
          this.T = response;
        }
      )
    })


  }



  colorMatch(a: number, b: number) {
    if (a > b) {
      return ("green");

    }
    else if (a < b) {
      return ("blue");
    }
    else {

      return ("red");
    }


  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }



}










