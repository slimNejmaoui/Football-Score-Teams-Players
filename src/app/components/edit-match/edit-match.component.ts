import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matches } from 'src/app/components/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match: any = {};

  matchForm: FormGroup;
  id: any;




  constructor(private activatedRoute: ActivatedRoute, private router: Router, private matchService: MatchService) { }

  ngOnInit() {



    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.matchService.displayMatch(this.id).subscribe((response) => {
      this.match = response;
    })




    // this.match = this.T.find((obj) => { return obj.id == this.id });
  }

  editMatch() {

    this.matchService.editMatch(this.match).subscribe((response) => {
      console.log("here this a new  object", response);
    })

    this.router.navigate(['dashboard']);

  }

}
