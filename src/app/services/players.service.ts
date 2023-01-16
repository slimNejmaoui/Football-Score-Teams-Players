import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playersUrl: string = " http://localhost:3000/players";

  constructor(private http: HttpClient) { }
  addPlayer(player, img: File) {

    let formData = new FormData();
    formData.append("img", img);
    formData.append("name", player.name);
    formData.append("numero", player.numero);
    formData.append("position", player.position);
    formData.append("team", player.team);
    formData.append("age", player.age);

    return this.http.post<{ message: string }>(this.playersUrl, formData);


  }


  editPlayer(obj) {
    return this.http.put<{ message: string }>(`${this.playersUrl}/${obj.id}`, obj)
  }



  displayPlayer(id) {

    return this.http.get<{ player: any }>(`${this.playersUrl}/${id}`);


  }

  deletePlayer(id) {

    return this.http.delete<{ message: string }>(`${this.playersUrl}/${id}`);

  }

  displayAllPlayers() {

    return this.http.get<{ players: any }>(this.playersUrl);
  }












}
