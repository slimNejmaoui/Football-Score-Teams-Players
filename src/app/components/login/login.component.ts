import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup;
  errorMsg: string;

  user: any = {};
  id: any;
  users: any = [];

  err: string;
  alerts: any;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private UsersService: UsersService) {

  }

  ngOnInit() {



  }

  connection() {


    this.auth.login(this.user.email, this.user.pwd).subscribe((response) => {

      console.log("user", response);

      if (!response) {
        this.errorMsg = "Login failed. Check the user name and password."
      }



    })


  }



}
