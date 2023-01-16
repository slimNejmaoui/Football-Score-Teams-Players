import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.css']
})
export class LogintestComponent implements OnInit {

  loginForm: FormGroup;
  user: any = {};

  constructor() { }

  ngOnInit() {
  }


  login() {

    console.log("here user object", this.user);



  }
}
