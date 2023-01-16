import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURl: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getallusers() {

    return this.http.get<{ users: any }>(this.usersURl);

  }

  editUser(user) {

    return this.http.put<{ message: string }>(`${this.usersURl}/${user.id}`, user)

  }


  deleteUser(id) {

    return this.http.delete<{ message: string }>(`${this.usersURl}/${id}`);


  }


  signup(user, img: File) {

    let formData = new FormData();
    formData.append("img", img);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);

    return this.http.post<{ message: string }>(`${this.usersURl}/signup`, formData);
  }


  getUser(id) {

    return this.http.get<{ user: any }>(`${this.usersURl}/${id}`);


  }









}
