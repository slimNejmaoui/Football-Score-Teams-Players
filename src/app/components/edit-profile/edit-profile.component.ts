import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  id: any;
  user: any = {};
  signupForm: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.signupForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: ['']
    })


    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.usersService.getUser(this.id).subscribe((response) => {

      this.user = response.user;
    })

  }


  editUser() {

    this.usersService.editUser(this.user).subscribe((response) => {
      console.log("here this a new  object", response.message);

    })

    this.router.navigate(['dashboard']);

  }

}
