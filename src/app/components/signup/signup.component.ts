import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  path: string;

  errorMsg: string;


  signupForm: FormGroup;
  imagePreview: any;
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {

    this.path = this.router.url;
    console.log("here path", this.path);

    this.signupForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: [''],
      img: ['']
    })
  }

  signup() {

    if (this.path == "/registre") {
      this.signupForm.value.role = "client";
    } else {

      this.signupForm.value.role = "admin";
    }

    // console.log("her user object", this.signupForm.value);

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
      console.log("here response after signup", response);

      if (response.message == "email existe") {

        this.errorMsg = response.message
      } else {

        this.router.navigate(['login']);
      }




    })

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }



}
