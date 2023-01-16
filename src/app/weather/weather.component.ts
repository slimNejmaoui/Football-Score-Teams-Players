import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm: FormGroup;

  resultData: any;

  iconUrl: string;

  constructor(private formBuilder: FormBuilder, private weatherServices: WeatherService) { }

  ngOnInit() {


    this.weatherForm = this.formBuilder.group({

      country: ['', [Validators.required]],

    })


  }


  serach() {

    console.log("search", this.weatherForm.value.country);


    this.weatherServices.searchWether(this.weatherForm.value).subscribe((response) => {
      console.log("here into response", response.result);


      this.resultData = response.result;

      this.iconUrl = "http://openweathermap.org/img/w/" + this.resultData.icone + ".png";

    })


  }

}
