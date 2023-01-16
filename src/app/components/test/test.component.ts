import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testForm: FormGroup
  T: any = [];


  constructor(private formbuilder: FormBuilder, private testServices: TestService) { }

  ngOnInit() {

    this.testForm = this.formbuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],

    })

    // this.testServices.getALLCoaches().subscribe((response) => {
    //   console.log("here response coaches", response.coaches);
    //   this.T = response.coaches;

    // });
  }


  signup() {

    this.testServices.addcoache(this.testForm.value).subscribe((response) => {

      console.log("here into response", response.message);

      this.testServices.getALLCoaches().subscribe((response) => {
        console.log("here response coaches", response.coaches);
        this.T = response.coaches;

      });

    })





  }

}
