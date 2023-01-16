import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-mymatches',
  templateUrl: './mymatches.component.html',
  styleUrls: ['./mymatches.component.css']
})
export class MymatchesComponent implements OnInit {

  matches: any = [];

  pageOfItems: Array<any>;

  constructor(private matcheServices: MatchService) { }

  ngOnInit() {

    this.matcheServices.getALLMatches().subscribe(

      (response) => {

        console.log("hre reponse ", response);
        this.matches = response;
      }



    );
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
