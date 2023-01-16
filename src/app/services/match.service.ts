import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //  Adresse du serveur BE 
  matchURl: string = "http://localhost:3000/matches";

  // HttpClient :module d envoie de req=request 
  constructor(private http: HttpClient) { }
  addMatch(obj) {

    return this.http.post<{ message: string }>(this.matchURl, obj);


  }


  editMatch(obj) {
    return this.http.put<{ message: string }>(`${this.matchURl}/${obj.id}`, obj)
  }



  displayMatch(id) {

    return this.http.get<{ match: any }>(`${this.matchURl}/${id}`);


  }

  deleteMatch(id) {

    return this.http.delete<{ message: string }>(`${this.matchURl}/${id}`);

  }

  getALLMatches() {

    // return this.http.get(this.matchURl);
    return this.http.get<{ matches: any }>(this.matchURl);
  }


  searchMatches(obj) {

    return this.http.post<{ matches: any }>(`${this.matchURl}/search`, obj);

  }


}
