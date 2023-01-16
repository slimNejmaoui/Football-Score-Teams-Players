import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-useres-table',
  templateUrl: './useres-table.component.html',
  styleUrls: ['./useres-table.component.css']
})
export class UseresTableComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService, private route: Router,) { }

  ngOnInit() {

    this.usersService.getallusers().subscribe((response) => { this.users = response });

  }



  gotoDisplay(id: any) {

    this.route.navigate([`profile/${id}`]);
  }

  gotoEdit(id: any) {


    this.route.navigate([`editProfile/${id}`]);
  }
  deleteUser(id) {

    this.usersService.deleteUser(id).subscribe((response) => {
      console.log("here reponse after delete match", response);
      this.usersService.getallusers().subscribe(
        (response) => {
          this.users = response;
        }
      )
    })


  }


}
