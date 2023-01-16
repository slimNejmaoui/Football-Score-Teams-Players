import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {


  dataUrl: string = "http://localhost:3000/data"

  constructor(private http: HttpClient) { }

  getAllData() {

    return this.http.get<{ message: string }>(this.dataUrl);
  }



}
