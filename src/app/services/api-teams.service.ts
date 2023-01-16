import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTeamsService {

  apiTeamsURl: string = "http://localhost:3000/apiTeams";

  constructor(private http: HttpClient) { }



  getALLteamsApi() {

    // return this.http.get(this.matchURl);
    return this.http.get<{ teamsapi: any }>(this.apiTeamsURl);
  }
}
