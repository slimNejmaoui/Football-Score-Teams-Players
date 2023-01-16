import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user: any = {};
  signupForm: FormGroup;
  id: any;
  constructor(private router: Router, private userSERvices: UsersService, private formbuilder: FormBuilder, private activated: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activated.snapshot.paramMap.get('id');

    this.userSERvices.getUser(this.id).subscribe((response) => {

      this.user = response.user;
    })

    this.signupForm = this.formbuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: [''],
      img: ['']
    })


  }

  editUser() {

    this.userSERvices.editUser(this.user).subscribe((response) => {
      console.log("here this a new  object", response.message);
    })

    this.router.navigate(['dashboard']);

  }

}
