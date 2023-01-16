import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  coacheURl: string = "http://localhost:3000/coaches";


  constructor(private http: HttpClient) { }

  addcoache(obj) {

    return this.http.post<{ message: string }>(this.coacheURl, obj);


  }

  getALLCoaches() {

    // return this.http.get(this.matchURl);
    return this.http.get<{ coaches: any }>(this.coacheURl);
  }
}
