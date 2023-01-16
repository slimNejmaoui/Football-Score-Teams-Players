import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURl: string = "http://localhost:3000/weather";

  constructor(private http: HttpClient) { }



  searchWether(obj) {

    return this.http.post<{ result: any }>(this.weatherURl, obj);


  }
}
