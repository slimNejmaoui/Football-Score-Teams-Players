import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumservicesService } from 'src/app/services/stadiumservices.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadium: any = {}
  stadiumForm: FormGroup
  id: any;
  title: string = "Add Stadium"

  constructor(private router: Router, private stadiumservices: StadiumservicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {

      this.title = "Edit Stadium"

      this.stadiumservices.getStadiumById(this.id).subscribe((response) => {


        this.stadium = response;

      })

    }


  }


  AddStadium() {

    if (this.id) {

      this.stadiumservices.editStadium(this.stadium).subscribe((response) => {


        console.log("her ino edit", response);

      })
      this.router.navigate(["dashboard"]);
    }
    else {

      this.stadiumservices.addStadium(this.stadium).subscribe((response) => {
        console.log("here reponse after adding match", response);

      })
      this.router.navigate(["dashboard"]);
    }


  }

}
