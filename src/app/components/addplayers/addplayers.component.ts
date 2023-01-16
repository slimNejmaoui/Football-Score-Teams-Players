import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {

  player: any = {};
  id: any;

  playerForm: FormGroup;
  imagePreview: any;

  constructor(private route: Router, private playerServices: PlayersService, private fbuiulder: FormBuilder) { }

  ngOnInit() {

    this.playerForm = this.fbuiulder.group({

      name: [''],
      numero: [''],
      position: [''],
      team: [''],
      age: [''],
      img: ['']



    })



  }


  addPlayer() {

    this.playerServices.addPlayer(this.playerForm.value, this.playerForm.value.img).subscribe((response) => {
      console.log("here thsi a new object", response.message);
      this.route.navigate(["dashboard"]);
    })



  }


  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
