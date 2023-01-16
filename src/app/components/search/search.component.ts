import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  T: any;
  id: any;
  match: Object;

  constructor(private formbuilder: FormBuilder, private matchServices: MatchService) { }

  ngOnInit() {

    this.searchForm = this.formbuilder.group({

      scoreone: ['', [Validators.required]],
      scoretwo: ['', [Validators.required]],


    })

  }
  Search() {

    console.log("search the match ", this.searchForm.value);
    this.matchServices.searchMatches(this.searchForm.value).subscribe((response) => { this.T = response.matches })

  }


}

