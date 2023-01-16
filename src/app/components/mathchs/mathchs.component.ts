import { Component, OnInit } from '@angular/core';
import { matches } from 'src/app/components/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-mathchs',
  templateUrl: './mathchs.component.html',
  styleUrls: ['./mathchs.component.css']
})
export class MathchsComponent implements OnInit {

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
