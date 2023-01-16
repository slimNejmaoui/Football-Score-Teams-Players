import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamUrl: string = "http://localhost:3000/teams";

  constructor(private http: HttpClient) { }

  addTeams(obj) {

    return this.http.post<{ message: string }>(this.teamUrl, obj);

  }

  deleteTeamsById(id) {
    return this.http.delete<{ message: string }>(`${this.teamUrl}/${id}`);

  }

  displayTeamById(id) {

    return this.http.get<{ team: any }>(`${this.teamUrl}/${id}`);
  }

  displayAllTeams() {

    return this.http.get<{ team: any }>(this.teamUrl);
  }

  editTeams(obj) {

    return this.http.put(`${this.teamUrl}/${obj.id}`, obj);

  }



}
