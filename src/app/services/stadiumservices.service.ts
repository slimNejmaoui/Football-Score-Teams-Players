import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumservicesService {

  stadiumUrl: string = "http://localhost:3000/stadium";

  constructor(private http: HttpClient) { }

  addStadium(obj) {

    return this.http.post<{ message: string }>(this.stadiumUrl, obj)


  }


  displayAllStadium() {

    return this.http.get<{ satdiums: any }>(this.stadiumUrl);
  }

  deleteStadium(id) {


    return this.http.delete<{ message: string }>(`${this.stadiumUrl}/${id}`)
  }

  getStadiumById(id) {


    return this.http.get<{ stadium: any }>(`${this.stadiumUrl}/${id}`)
  }
  editStadium(obj) {
    return this.http.put<{ message: string }>(this.stadiumUrl, obj)
  }


}
